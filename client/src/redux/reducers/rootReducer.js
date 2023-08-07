import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { messageReducer } from "./messagesReducer";
import { authUserReducer } from "./authUserReducer";
userReducer;
export default combineReducers({
  getAllUsers: userReducer,
  messages: messageReducer,
  user: authUserReducer,
});
