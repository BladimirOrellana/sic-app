import {
  GET_TANDA_CREATED_BY_USER_START,
  GET_TANDA_CREATED_BY_USER_SUCCSESS,
  GET_TANDA_CREATED_BY_USER_FAIL,
} from "../constants";

const initState = {
  userTanda: [],
};

export const getTandaCreatedByUserReducer = (state = initState, action) => {
  console.log("get tanda reducer 1", action);
  switch (action.type) {
    case GET_TANDA_CREATED_BY_USER_START:
      return {
        ...state,
        loading: true,
      };
    case GET_TANDA_CREATED_BY_USER_SUCCSESS:
      console.log("get tanda reducer 2", action);
      return {
        ...state,
        loading: false,
        userTanda: action.payload,
      };
    case GET_TANDA_CREATED_BY_USER_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
