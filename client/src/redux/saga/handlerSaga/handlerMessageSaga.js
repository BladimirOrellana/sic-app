import { call, put } from "redux-saga/effects";
import { setErrorMessage } from "../../actions/messagesAction";
import { setAuthUserAction } from "../../actions/authUserActions";

export function* handlerErrorMessage(message) {
  console.log("handler error000pp============================1111 ", message);

  try {
    console.log("error message ", message);

    yield put(setErrorMessage(message));
  } catch (err) {
    return err;
  }
}
