import { call, put } from "redux-saga/effects";
import {
  loginUserFirebaseRequest,
  registerUserFirebaseRequest,
  requestLogoutUser,
  requestSetUser,
} from "../RequestSaga/registerUserRequest";
import {
  logOutUserSuccessAction,
  loginFailAction,
  loginSuccessAction,
  registerFailAction,
  registerSuccessAction,
  setAuthUserFailAction,
  setAuthUserStartAction,
  setAuthUserSuccessAction,
} from "../../actions/registerUserAction";
import { setErrorMessage } from "../../actions/messagesAction";

export function* handlerRegisterUserFirebase({ payload }) {
  console.log("handler payload ", payload.email);
  try {
    const user = yield call(registerUserFirebaseRequest, payload);
    console.log("user handler 1 ", user);
    if (payload.password === payload.reEnterPassword) {
      if (user.message) {
        yield put(registerFailAction(user.message));
      } else {
        console.log("user handler 2 ", user);
        const data = user;
        yield put(registerSuccessAction(data));
      }
    } else {
      yield put(registerFailAction("Tu password No conside "));
    }
  } catch (error) {
    console.log("error ", error);
  }
}

export function* handlerLoginUserFirebase({ payload }) {
  console.log("handler payload login 1 ", payload.email);
  try {
    const user = yield call(loginUserFirebaseRequest, payload);
    console.log("user handler  2 login ", user);

    if (user.message) {
      yield put(loginFailAction(user.message));
    } else {
      console.log("user handler  3 ", user);

      yield put(loginSuccessAction(user));
      yield call(setAuthUserSuccessAction);
    }
  } catch (error) {
    console.log("error ", error);
  }
}

export function* handlerSetAuthUser() {
  try {
    const currentUser = yield call(requestSetUser);
    console.log("current user ", JSON.parse(currentUser));
    yield put(setAuthUserSuccessAction(JSON.parse(currentUser)));
    //Continue fixing login and sign up error display Loading
    // yield put(
    //   setAuthUserAction(JSON.parse({ currentUser: currentUser, loading: true }))
    // );
  } catch (err) {
    yield put(setAuthUserFailAction(err));
    return err;
  }
}

export function* handlerLogoutUser({ payload }) {
  console.log("handler payload ", payload);
  try {
    const user = yield call(requestLogoutUser, payload);
    console.log("user handler 1 ", user);
    yield put(logOutUserSuccessAction(null));
  } catch (error) {}
}
