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
  console.log("data from user signUp ", data.data);
  try {
    if (data.data.password === data.data.reEnterPassword) {
      const user = yield call(requestSignUpUserFirebase, data);
      if (user.message) {
        yield put(setErrorMessage(user.message));
      } else {
        const userData = yield requestRegisterUserWithEmail({
          email: user.user.email,
          uid: user.user.uid,
          username: data.data.username,
        });

        localStorage.setItem("user", JSON.stringify(userData.data));

        yield put(
          setAuthUserAction({ currentUser: userData.data, loading: false })
        );
      }
    } else {
      yield put(setErrorMessage("Tu password No conside "));
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
  try {
    const user = yield call(requestLoginUser, data.data);
    if (user.message) {
      yield put(setAuthUserAction({ currentUser: null, loading: false }));
      yield put(setErrorMessage(user.message));
    } else {
      const userData = yield requestLoginUserWithEmailAndPassword({
        uid: user.user.uid,
      });

      localStorage.setItem("user", JSON.stringify(userData.data));

      yield put(
        setAuthUserAction({ currentUser: userData.data, loading: false })
      );
    }
  } catch (err) {
    console.log("errorloco ", err);
  }
}
