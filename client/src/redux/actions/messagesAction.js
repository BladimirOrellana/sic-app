import { ERROR_MESSAGE, SET_ERROR_MESSAGE } from "../constants";

export const errorMessage = (message) => {
  return {
    type: ERROR_MESSAGE,
    message,
  };
};
export const setErrorMessage = (message) => {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  };
};
