import { takeLatest, all, fork, takeEvery } from "redux-saga/effects";
import {
  GET_ALL_USERS,
  LOGIN_USER,
  LOG_OUT_USER,
  REGISTER_USER_WITH_EMAIL,
  SIGN_UP_USER_FIREBASE,
} from "../../constants";
import {
  handlerGetAllUsers,
  handlerLogOutUser,
  handlerLoginUser,
  handlerRegisterUserWithEmail,
  handlerSignUpUserFirebase,
} from "../handlerSaga/user";
export function* userWatcherSaga() {
  yield takeLatest(GET_ALL_USERS, handlerGetAllUsers);
}
export function* registerUserWithEmailWatcher() {
  yield takeLatest(REGISTER_USER_WITH_EMAIL, handlerRegisterUserWithEmail);
}

export function* signUpUserFirebaseWatcher() {
  yield takeLatest(SIGN_UP_USER_FIREBASE, handlerSignUpUserFirebase);
}
export function* loginUserWatcher() {
  yield takeLatest(LOGIN_USER, handlerLoginUser);
}

export default function* userSaga() {
  yield all([
    fork(userWatcherSaga),
    fork(registerUserWithEmailWatcher),
    fork(signUpUserFirebaseWatcher),
    fork(loginUserWatcher),
  ]);
}