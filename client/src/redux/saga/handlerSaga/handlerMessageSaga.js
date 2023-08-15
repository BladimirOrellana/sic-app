import { call, put } from "redux-saga/effects";
import { setErrorMessage } from "../../actions/messagesAction";

export function* handlerErrorMessage(message) {
  try {
    yield put(setErrorMessage(message));
  } catch (err) {
    return err;
  }
}
