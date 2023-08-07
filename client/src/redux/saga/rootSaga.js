import { all } from "redux-saga/effects";

import userSaga from "./watcherSaga/user";
import messagesSaga from "./watcherSaga/messageSaga";
import authUserSaga from "./watcherSaga/authUserSaga";

export default function* rootSaga() {
  yield all([userSaga(), messagesSaga(), authUserSaga()]);
}
