import { combineReducers } from "redux";
import { registerUserReducer } from "./registerUserReducer";
import { messageReducer } from "./messagesReducer";

export default combineReducers({
  auth: registerUserReducer,
  messages: messageReducer,
});
