import { call, put } from "redux-saga/effects";

import {
  registerUserWithEmailAction,
  setGetAllUsersAction,
  setRegisterUserWithEmailAction,
} from "../../actions/userActions";
import {
  createUserWithEmailPasswordRequest,
  requestGetAllUsers,
  requestLoginUser,
  requestLoginUserWithEmailAndPassword,
  requestLogoutUser,
  requestRegisterUserWithEmail,
  requestSignUpUserFirebase,
} from "../RequestSaga/user";
import { setErrorMessage } from "../../actions/messagesAction";
import {
  authUserAction,
  setAuthUserAction,
} from "../../actions/authUserActions";

export function* handlerGetAllUsers() {
  const users = yield call(requestGetAllUsers);
  const user = users;

  yield put(setGetAllUsersAction(users));
  try {
  } catch (err) {}
}
export function* handlerSignUpUserFirebase(data) {
  try {
    const user = yield call(requestSignUpUserFirebase, data);
    if (user.message) {
      yield put(setErrorMessage(user.message));
    } else {
      const userData = yield requestRegisterUserWithEmail({
        email: user.user.email,
        uid: user.user.uid,
        username: data.data.username,
      });
      console.log("local user999999999999900000000000000000 ", userData);
      localStorage.setItem("user", JSON.stringify(userData.data));
      yield put(authUserAction(userData.data));
    }
  } catch (err) {
    console.log("errorloco ", err);
  }
}

export function* handlerRegisterUserWithEmail({ data }) {
  //console.log("loca db 1 ", currentUser);
  // try {
  //   const currentUser = yield call(requestRegisterUserWithEmail, data);
  //   console.log("loca db ", currentUser);
  //   const user = yield call(requestGetAllUsers);
  //   yield put(setGetAllUsersAction(user));
  //   yield put(setAuthUserAction(currentUser));
  // } catch (err) {
  //   console.log("error db ", err);
  // }
}

export function* handlerLoginUser(data) {
  yield put(authUserAction({ loading: true }));
  console.log("login user handler ", data.data);
  try {
    const user = yield call(requestLoginUser, data.data);
    if (user.message) {
      yield put(authUserAction());
      yield put(setErrorMessage(user.message));
    } else {
      console.log("login user handler succes ", user.user);

      console.log("user data data", data);
      const userData = yield requestLoginUserWithEmailAndPassword({
        uid: user.user.uid,
      });
      console.log("local user999999999999900000000000000000 ", userData.data);
      localStorage.setItem("user", JSON.stringify(userData.data));
      yield put(authUserAction(userData.data));
    }
  } catch (err) {
    console.log("errorloco ", err);
  }
}
