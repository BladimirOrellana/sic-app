import { ERROR_MESSAGE, SET_ERROR_MESSAGE } from "../constants";

const initState = {
  message: null,
  loading: false,
};

export const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        loading: true,
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
