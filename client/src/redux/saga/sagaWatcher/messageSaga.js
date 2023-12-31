import { fork, takeLatest, all } from "redux-saga/effects";
import { ERROR_MESSAGE } from "../../constants";
import { handlerErrorMessage } from "../handlerSaga/handlerMessageSaga";

export function* errorMessageWatcher() {
  yield takeLatest(ERROR_MESSAGE, handlerErrorMessage);
}

export default function* messagesSaga() {
  yield all([fork(errorMessageWatcher)]);
}
