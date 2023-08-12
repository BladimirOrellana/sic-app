import {
  AUTH_USER,
  SET_AUTH_USER,
  LOG_OUT_USER,
  SET_LOG_OUT_USER,
} from "../constants";

const initState = {
  loading: true,
  currentUser: null,
  error: null,
};
export const authUserReducer = (state = initState, action) => {
  console.log("authuser reducer  from action", action);
  switch (action.type) {
    case AUTH_USER:
      console.log("888888888888888888888 3332222222222", action);
      return {
        ...state,
        loading: action.loading,
      };
    case SET_AUTH_USER:
      console.log("authuser reducer 2 ", action);
      console.log("authuser reducer 22 ", action.currentUser);
      console.log("authuser reducer 23 ", action.loading);
      return {
        ...state,
        currentUser: action.currentUser,
        loading: action.loading,
      };
    case LOG_OUT_USER:
      console.log("logout reducer 1", action.data);

      return { ...state, data: action.data };
    case SET_LOG_OUT_USER:
      console.log("logout reducer user set", action.data);

      return { ...state, data: action.data };
    default:
      return initState;
  }
};
