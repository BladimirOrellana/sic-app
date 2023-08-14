import { ERROR_MESSAGE, SET_ERROR_MESSAGE } from "../constants";

const initState = {
  message: null,
};

export const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        message: action.message,
        loading: false,
      };
    default:
      return initState;
  }
};
