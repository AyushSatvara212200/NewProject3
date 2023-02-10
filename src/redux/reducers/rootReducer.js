import { combineReducers } from "redux";
import auth from "./auth/reducer";
// import geo from './geo/reducer';

const rootReducer = combineReducers({
  auth,
  // geo,
});

export default (state, action) => {
  // if (
  //   action.type === "auth/LOGOUT_USER" ||
  //   action.type === "auth/LOGOUT_USER"
  // ) {
  //   state.auth = authState;
  // }
  return rootReducer(state, action);
};
