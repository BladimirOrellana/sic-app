import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { messageReducer } from "./messagesReducer";
import { authUserReducer } from "./authUserReducer";
import { createTandaReducer } from "./createTandaReducer";
userReducer;
export default combineReducers({
  getAllUsers: userReducer,
  messages: messageReducer,
  user: authUserReducer,
  tandas: createTandaReducer,
});
