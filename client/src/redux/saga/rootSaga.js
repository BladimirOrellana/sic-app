import { all } from "redux-saga/effects";

import registerUserSaga from "./sagaWatcher/registerUserSagaWatcher";
import messagesSaga from "./sagaWatcher/messageSaga";
export default function* rootSaga() {
  yield all([registerUserSaga(), messagesSaga()]);
}
