import { call, put } from "redux-saga/effects";
import { auth } from "./../../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  authUserAction,
  setAuthUserAction,
} from "../../actions/authUserActions";
import { useDispatch } from "react-redux";
import { logOUTUserAction } from "../../actions/userActions";
import { requestLogoutUser } from "../RequestSaga/authRequestSaga";
export function* handlerAuthUser() {
  try {
    const currentUser = localStorage.getItem("user");
    console.log("handler auth ", JSON.parse(currentUser));

    yield put(setAuthUserAction(JSON.parse(currentUser)));
  } catch (err) {
    return err;
  }
}

//logout
export function* handlerLogOutUser({ data }) {
  try {
    console.log("logout user handler", data);
    const currentUser = yield call(requestLogoutUser, data);
    console.log("current user handler call back", currentUser);
    yield put(setAuthUserAction(null));
  } catch (err) {
    console.log("err ", err);
  }
}
