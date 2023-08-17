import {
  GET_TANDA_CREATED_BY_USER_START,
  GET_TANDA_CREATED_BY_USER_SUCCSESS,
  GET_TANDA_CREATED_BY_USER_FAIL,
} from "../constants";

export const getTandaCreatedByUserStartAction = (data) => {
  console.log("get tanda action 1 ", data);
  return {
    type: GET_TANDA_CREATED_BY_USER_START,
    data,
  };
};

export const getTandaCreatedByUserSuccessAction = (payload) => {
  console.log("get tanda action 2 ", payload);
  return {
    type: GET_TANDA_CREATED_BY_USER_SUCCSESS,
    payload,
  };
};

export const getTandaCreatedByUserFailAction = (message) => {
  console.log("get tanda action 3 ", message);
  return {
    type: GET_TANDA_CREATED_BY_USER_FAIL,
    message,
  };
};
