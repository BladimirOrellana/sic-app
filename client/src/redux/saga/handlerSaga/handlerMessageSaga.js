import { call, put } from "redux-saga/effects";
import { setErrorMessage } from "../../actions/messagesAction";
import { setAuthUserAction } from "../../actions/authUserActions";

export function* handlerErrorMessage(message) {
  try {
    yield put(setErrorMessage(message));
  } catch (err) {
    return err;
  }
}
