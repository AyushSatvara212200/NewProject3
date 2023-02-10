const actions = {
  SET_DATA: "auth/SET_DATA",
  SET_USER: "auth/SET_USER",
  UPDATE_USER: "auth/UPDATE_USER",
  LOGOUT_USER: "auth/LOGOUT_USER",

  setUserData: (token, data) => {
    let tok = "";
    let udata = {};
    if (token && token !== "") {
      tok = token;
    }
    if (data && Object.keys(data).length > 0) {
      udata = data;
    }
    return (dispatch) =>
      dispatch({
        type: actions.SET_DATA,
        token: tok,
        userdata: udata,
      });
  },

  setUserTypes: (data) => {
    return (dispatch) =>
      dispatch({
        type: actions.SET_USER_TYPES,
        data,
      });
  },

  logoutAuthUser: (data) => {
    return (dispatch) =>
      dispatch({
        type: actions.LOGOUT_USER,
        data,
      });
  },

  setUser: (data) => {
    return (dispatch) =>
      dispatch({
        type: actions.SET_USER,
        userdata: data,
      });
  },

  updateUser: (data) => {
    return (dispatch) =>
      dispatch({
        type: actions.UPDATE_USER,
        userdata: data,
      });
  },

  //Set My Requests
  setUserRequests: (data) => {
    return (dispatch) =>
      dispatch({
        type: actions.SET_USER_REQUESTS,
        data,
      });
  },
};

export default actions;
