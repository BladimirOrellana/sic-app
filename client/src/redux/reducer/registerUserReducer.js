import {
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  SET_AUTH_USER_FAIL,
  SET_AUTH_USER_START,
  SET_AUTH_USER_SUCCESS,
} from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    case LOGIN_USER_START:
      console.log("reducer LOGIN START", action);
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case LOGOUT_USER_START:
      console.log("reducer LOGOUT", action);
      return { ...state, loading: true };
    case LOGOUT_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case LOGOUT_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case SET_AUTH_USER_START:
      console.log("reducer ", action);
      return { ...state, loading: true };
    case SET_AUTH_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case SET_AUTH_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
