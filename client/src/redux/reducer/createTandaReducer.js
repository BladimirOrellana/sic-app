import {
  CREATE_TANDA,
  CREATE_TANDA_FAIL,
  CREATE_TANDA_START,
  CREATE_TANDA_SUCCESS,
} from "../constants";

const initState = { tanda: [] };

export const createTandaReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TANDA_START:
      return {
        ...state,
        tanda: [...state.tanda, action.data],
        loading: true,
      };

    case CREATE_TANDA_SUCCESS:
      console.log("set tanda created by reducer", action);
      return {
        ...state,
        tanda: [...state.tanda, action.data],
        loading: false,
      };
    case CREATE_TANDA_FAIL:
      console.log("set tanda created by reducer", action);
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
