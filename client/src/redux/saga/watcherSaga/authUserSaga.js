import { fork, all, takeLatest } from "redux-saga/effects";
import { AUTH_USER, LOG_OUT_USER } from "../../constants";
import {
  handlerAuthUser,
  handlerLogOutUser,
} from "../handlerSaga/authUserHandler";

export function* authUserWatcher() {
  console.log("auth  watcher 232323");
  yield takeLatest(AUTH_USER, handlerAuthUser);
}

export function* logOutUserWatcher() {
  console.log("Log out watcher");
  yield takeLatest(LOG_OUT_USER, handlerLogOutUser);
}
export default function* authUserSaga() {
  yield all([fork(authUserWatcher), fork(logOutUserWatcher)]);
}
