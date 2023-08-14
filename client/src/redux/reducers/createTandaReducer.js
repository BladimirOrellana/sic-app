import {
  CREATE_TANDA,
  ERROR_MESSAGE,
  GET_TANDA_CREATEDBY,
  SET_CREATE_TANDA,
  SET_ERROR_MESSAGE,
  SET_GET_TANDA_CREATEDBY,
} from "../constants";

const initState = {
  tanda: [],
};

export const createTandaReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TANDA:
      return {
        ...state,
      };
    case SET_CREATE_TANDA:
      return {
        ...state,
        tanda: action.data,
      };
    case GET_TANDA_CREATEDBY:
      return {
        ...state,
      };
    case SET_GET_TANDA_CREATEDBY:
      return {
        ...state,
        tanda: action.data,
      };
    default:
      return initState;
  }
};
