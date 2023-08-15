import { REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from "../constants";

const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
};

export const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      console.log("reducer ", action);
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case REGISTER_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
