import {
  AUTH_USER,
  SET_AUTH_USER,
  LOG_OUT_USER,
  SET_LOG_OUT_USER,
} from "../constants";

const initState = {
  loading: false,
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

        loading: true,
      };
    case SET_AUTH_USER:
      console.log("authuser reducer 2 ", action);
      return {
        ...state,
        currentUser: action.currentUser,
        loading: false,
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
