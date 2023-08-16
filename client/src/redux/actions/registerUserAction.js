import {
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  SET_AUTH_USER_FAIL,
  SET_AUTH_USER_START,
  SET_AUTH_USER_SUCCESS,
} from "../constants";

export const registerStartAction = (payload) => ({
  type: REGISTER_START,
  payload,
});
export const registerSuccessAction = (user) => {
  console.log("register user success action ", user);
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};
export const registerFailAction = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});
export const logOutUserStartAction = (payload) => {
  return {
    type: LOGOUT_USER_START,

    payload,
  };
};
export const logOutUserSuccessAction = (user) => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: user,
  };
};

export const logOutUserFailAction = (error) => {
  return {
    type: LOGOUT_USER_FAIL,
    payload: error,
  };
};
export const loginStartAction = (payload) => ({
  type: LOGIN_USER_START,
  payload,
});
export const loginSuccessAction = (user) => {
  console.log("login user success action ", user);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};
export const loginFailAction = (error) => ({
  type: LOGIN_USER_FAIL,
  payload: error,
});

export const setAuthUserStartAction = (payload) => ({
  type: SET_AUTH_USER_START,
  payload,
});
export const setAuthUserSuccessAction = (user) => {
  console.log("set user success action ", user);
  return {
    type: SET_AUTH_USER_SUCCESS,
    payload: user,
  };
};
export const setAuthUserFailAction = (error) => ({
  type: SET_AUTH_USER_FAIL,
  payload: error,
});
