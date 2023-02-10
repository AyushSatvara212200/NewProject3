import actions from "./actions";

export const authState = {
  token: "",
  userdata: {},
  loggedIn: false,
};

export default function reducer(state = authState, action) {
  switch (action.type) {
    case actions.SET_DATA:
      return {
        ...state,
        token: action.token,
        userdata: action.userdata,
        loggedIn: true,
      };

    case actions.LOGOUT_USER:
      return {
        ...state,
        token: "",
        userdata: {},
        loggedIn: false,
      };

    case actions.SET_USER:
      return {
        ...state,
        userdata: action.userdata,
      };

    case actions.UPDATE_USER:
      const updateData = { ...state.userdata, ...action.userdata };
      return {
        ...state,
        userdata: updateData,
      };

    default:
      return state;
  }
}
