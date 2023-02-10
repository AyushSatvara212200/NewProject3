/**
 * @format
 */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../redux/store";
import { logoutUser, refreshToken, setAccessToken } from "../redux";

let isAlreadyFetchingAccessToken = false;

// type SubscriberType = (access_token: string) => void;

let subscribers = [];

function onAccessTokenFetched(accessToken) {
  subscribers = subscribers.filter((callback) => callback(accessToken));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

const client = axios.create({
  headers: { "Content-Type": "application/json" },
});

const ROUTE_WITHOUT_TOKEN = ["login", "signup"];

client.interceptors.request.use(
  (request) => {
    const authRoutes = ROUTE_WITHOUT_TOKEN.some((i) =>
      request?.url?.includes(i)
    );
    const { accessToken } = store.getState().user;
    if (!authRoutes && request.headers && accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    if (response.data.error) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  },
  async (error) => {
    if (error?.config?.url?.includes("refreshToken")) {
      store.dispatch(logoutUser());
      return Promise.reject(error.response?.data);
    }

    if (error.response?.status === 401) {
      const originalRequest = error.config;

      try {
        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber((accessToken) => {
            if (originalRequest?.headers) {
              originalRequest.headers.Authorization = accessToken;
            }
            if (originalRequest) {
              resolve(client(originalRequest));
            }
          });
        });

        const { refreshToken: rToken } = store.getState().user;
        if (!isAlreadyFetchingAccessToken && rToken) {
          isAlreadyFetchingAccessToken = true;
          const data = await refreshToken(rToken);
          store.dispatch(setAccessToken(data.accessToken));
          isAlreadyFetchingAccessToken = false;
          onAccessTokenFetched(data.accessToken);
        }

        return retryOriginalRequest;
      } catch (err) {
        store.dispatch(logoutUser());
      }
    }
    return Promise.reject(error.response?.data);
  }
);

export default client;
