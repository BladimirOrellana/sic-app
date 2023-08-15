import {
  CREATE_TANDA,
  ERROR_MESSAGE,
  GET_TANDA_CREATEDBY,
  SET_CREATE_TANDA,
  SET_ERROR_MESSAGE,
  SET_GET_TANDA_CREATEDBY,
} from "../constants";

const initState = { tanda: [], tandaCreatedBy: [] };

export const createTandaReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CREATE_TANDA:
      return {
        ...state,
        tanda: [...state.tanda, action.data],
      };

    case SET_GET_TANDA_CREATEDBY:
      console.log("set tanda created by reducer", action);
      return {
        ...state,
        tandaCreatedBy: [...state.tandaCreatedBy, action.tanda],
      };
    default:
      return initState;
  }
};
