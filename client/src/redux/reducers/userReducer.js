import {
  GET_ALL_USERS,
  LOGIN_USER,
  LOG_OUT_USER,
  REGISTER_USER_WITH_EMAIL,
  SET_GET_ALL_USERS,
  SET_LOGIN_USER,
  SET_LOG_OUT_USER,
  SET_REGISTER_USER_WITH_EMAIL,
  SET_SIGN_UP_USER_FIREBASE,
  SIGN_UP_USER_FIREBASE,
} from "../constants";

const initState = {
  loading: false,
  currentUser: null,
  error: null,
};
export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state };
    case SET_GET_ALL_USERS:
      return { ...state, user: action.data };

    case REGISTER_USER_WITH_EMAIL:
      return { ...state, data: action.data };
    case SET_REGISTER_USER_WITH_EMAIL:
      return { ...state, data: action.data };
    case SIGN_UP_USER_FIREBASE:
      return { ...state, data: action.data };
    case SET_SIGN_UP_USER_FIREBASE:
      return { ...state, data: action.data };
    case LOG_OUT_USER:
      return { ...state, data: action.data };
    case LOGIN_USER:
      return { ...state, data: action.data };
    case SET_LOGIN_USER:
      return { ...state, data: action.data, loading: false };

    default:
      return initState;
  }
};
