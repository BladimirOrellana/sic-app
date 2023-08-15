import { all, fork, takeLatest } from "redux-saga/effects";
import { REGISTER_START } from "../../constants";
import { handlerRegisterUserFirebase } from "../handlerSaga/registerUserHandler";

export function* registerUserFirebaseWatcher() {
  console.log("register user firebase watcher");
  yield takeLatest(REGISTER_START, handlerRegisterUserFirebase);
}

export default function* registerUserSaga() {
  yield all([fork(registerUserFirebaseWatcher)]);
}
