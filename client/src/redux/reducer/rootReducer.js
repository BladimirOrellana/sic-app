import { combineReducers } from "redux";
import { registerUserReducer } from "./registerUserReducer";
import { messageReducer } from "./messagesReducer";
import { createTandaReducer } from "./createTandaReducer";
import { getTandaCreatedByUserReducer } from "./getTandaCreatedByUserReducers";

export default combineReducers({
  auth: registerUserReducer,
  messages: messageReducer,
  tandas: createTandaReducer,
  tandaCreatedByUser: getTandaCreatedByUserReducer,
});
