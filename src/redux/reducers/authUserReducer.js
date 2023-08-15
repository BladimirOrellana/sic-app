import {
  AUTH_USER,
  SET_AUTH_USER,
  LOG_OUT_USER,
  SET_LOG_OUT_USER,
  SET_ERROR_MESSAGE,
} from "../constants";

const initState = {
  loading: true,
  currentUser: null,
  error: null,
};
export const authUserReducer = (state = initState, action) => {
  SET_ERROR_MESSAGE;
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        loading: false,
      };
    case AUTH_USER:
      return {
        ...state,
        loading: false,
      };
    case SET_AUTH_USER:
      return {
        ...state,
        currentUser: action.currentUser,
        loading: action.loading,
      };
    case LOG_OUT_USER:
      return { ...state, data: action.data };
    case SET_LOG_OUT_USER:
      return { ...state, data: action.data };
    default:
      return initState;
  }
};
