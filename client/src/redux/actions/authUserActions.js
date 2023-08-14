import {
  AUTH_USER,
  LOG_OUT_USER,
  SET_AUTH_USER,
  SET_LOG_OUT_USER,
} from "../constants";

export const authUserAction = (data) => {
  return {
    type: AUTH_USER,
    loading: data.loading,
  };
};

export const setAuthUserAction = (data) => {
  return {
    type: SET_AUTH_USER,
    currentUser: data.currentUser,
    loading: data.loading,
  };
};
export const logOutUserAction = (data) => {
  return {
    type: LOG_OUT_USER,
    data: data,
  };
};
export const setLogOutUserAction = (data) => {
  return {
    type: SET_LOG_OUT_USER,
    currentUser: data,
  };
};
