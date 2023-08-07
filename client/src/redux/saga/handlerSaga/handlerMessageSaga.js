import { call, put } from "redux-saga/effects";
import { setErrorMessage } from "../../actions/messagesAction";

export function* handlerErrorMessage(message) {
  console.log("handler error ", message);

  try {
    console.log("error message ", message);
    yield put(setErrorMessage(message));
  } catch (err) {
    return err;
  }
}
