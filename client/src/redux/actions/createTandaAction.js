import {
  CREATE_TANDA,
  GET_TANDA_CREATEDBY,
  SET_CREATE_TANDA,
  SET_GET_TANDA_CREATEDBY,
} from "../constants";

export const createTandaAction = (data) => {
  console.log("authuser   action init 9999999", data);
  return {
    type: CREATE_TANDA,
    data,
  };
};
export const setCreateTandaAction = (data) => {
  console.log("authuser   action init 9999999", data);
  return {
    type: SET_CREATE_TANDA,
    data,
  };
};

export const getTandaCreatedbyAction = (data) => {
  console.log("authuser   action init 9999999", data);
  return {
    type: GET_TANDA_CREATEDBY,
    data,
  };
};
export const setGetTandaCreatedbyAction = (data) => {
  console.log("authuser   action init 9999999", data);
  return {
    type: SET_GET_TANDA_CREATEDBY,
    data,
  };
};
