import {
  AUTH_USER,
  LOG_OUT_USER,
  SET_AUTH_USER,
  SET_LOG_OUT_USER,
} from "../constants";

export const authUserAction = (data) => {
  console.log("authuser   action init 9999999", data);
  return {
    type: AUTH_USER,
    loading: data.loading,
  };
};

export const setAuthUserAction = (data) => {
  console.log("authUser 10101010101000======================", data);
  return {
    type: SET_AUTH_USER,
    currentUser: data.currentUser,
    loading: data.loading,
  };
};
export const logOutUserAction = (data) => {
  console.log("LOG OUT");
  return {
    type: LOG_OUT_USER,
    data: data,
  };
};
export const setLogOutUserAction = (data) => {
  console.log("Log OUT", data);
  return {
    type: SET_LOG_OUT_USER,
    currentUser: data,
  };
};
