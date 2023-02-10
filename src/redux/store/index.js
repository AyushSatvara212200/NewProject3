import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store as default, persistor };
