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
} from "./../constants";

export const getAllUsersAction = () => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("action called");
  return {
    type: GET_ALL_USERS,
  };
};

export const setGetAllUsersAction = (data) => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("action called setUsers ", data.data);
  return {
    type: SET_GET_ALL_USERS,
    data: data.data,
  };
};

export const registerUserWithEmailAction = (data) => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("action called register", data);
  return {
    type: REGISTER_USER_WITH_EMAIL,
  };
};

export const setRegisterUserWithEmailAction = (data) => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("create user ", data);
  return {
    type: SET_REGISTER_USER_WITH_EMAIL,
    data: data.data,
  };
};

export const signUpUserFirebaseAction = (data) => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("action called register", data);
  return {
    type: SIGN_UP_USER_FIREBASE,
    data,
  };
};

export const SetSignUpUserFirebaseAction = (data) => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("create user ", data);
  return {
    type: SET_SIGN_UP_USER_FIREBASE,
    payload: data.data,
  };
};

export const loginUserAction = (data) => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("login user ", data);
  return {
    type: LOGIN_USER,
    data,
  };
};

export const setLoginUserAction = (data) => {
  //this send data coming from this addToCart action
  //below we will sent the data receive from addtocart to reducer

  console.log("login user ", data);
  return {
    type: SET_LOGIN_USER,
    payload: data.data,
  };
};
