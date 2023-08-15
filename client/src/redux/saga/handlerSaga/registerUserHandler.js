import { call, put } from "redux-saga/effects";
import { registerUserFirebaseRequest } from "../requestSaga/registerUserRequest";
import {
  registerFailAction,
  registerSuccessAction,
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
