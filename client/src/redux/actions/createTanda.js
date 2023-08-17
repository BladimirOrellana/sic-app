import {
  CREATE_TANDA_FAIL,
  CREATE_TANDA_START,
  CREATE_TANDA_SUCCESS,
} from "../constants";

export const createTandaStartAction = (data) => {
  console.log("create tanda action ", data);
  return {
    type: CREATE_TANDA_START,
    data,
  };
};
export const createTandaSuccessAction = (message) => {
  return {
    type: CREATE_TANDA_SUCCESS,
    data,
  };
};

export const createTandaFailAction = (message) => {
  return {
    type: CREATE_TANDA_FAIL,
    data,
  };
};
