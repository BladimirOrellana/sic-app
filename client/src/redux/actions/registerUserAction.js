import { REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from "../constants";

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
