import { all, fork, takeLatest } from "redux-saga/effects";
import {
  LOGIN_USER_START,
  LOGOUT_USER_START,
  REGISTER_START,
  SET_AUTH_USER_START,
} from "../../constants";
import {
  handlerLoginUserFirebase,
  handlerLogoutUser,
  handlerRegisterUserFirebase,
  handlerSetAuthUser,
} from "../handlerSaga/registerUserHandler";

export function* registerUserFirebaseWatcher() {
  console.log("register user firebase watcher");
  yield takeLatest(REGISTER_START, handlerRegisterUserFirebase);
}
export function* loginUserFirebaseWatcher() {
  console.log("Login user firebase watcher");
  yield takeLatest(LOGIN_USER_START, handlerLoginUserFirebase);
}
export function* logoutUserWatcher() {
  console.log("logout watcher");
  yield takeLatest(LOGOUT_USER_START, handlerLogoutUser);
}
export function* setAuthUserWatcher() {
  console.log("set auth watcher");
  yield takeLatest(SET_AUTH_USER_START, handlerSetAuthUser);
}

export default function* registerUserSaga() {
  yield all([
    fork(registerUserFirebaseWatcher),
    fork(logoutUserWatcher),
    fork(loginUserFirebaseWatcher),
    fork(setAuthUserWatcher),
  ]);
}
