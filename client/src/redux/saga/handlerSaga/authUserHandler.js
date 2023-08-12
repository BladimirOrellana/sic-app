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
    console.log("handler auth 232323", JSON.parse(currentUser));

    yield put(setAuthUserAction({ currentUser: currentUser, loading: false }));
    //Continue fixing login and sign up error display Loading
    // yield put(
    //   setAuthUserAction(JSON.parse({ currentUser: currentUser, loading: true }))
    // );
  } catch (err) {
    yield put(setAuthUserAction({ currentUser: null, loading: false }));
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
