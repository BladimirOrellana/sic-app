import { call, put } from "redux-saga/effects";
import { setErrorMessage } from "../../actions/messagesAction";
import { setAuthUserAction } from "../../actions/authUserActions";
import {
  requestCreateTanda,
  requestGetTandaCreatedby,
} from "../RequestSaga/createTandaRequest";
import {
  setCreateTandaAction,
  setGetTandaCreatedbyAction,
} from "../../actions/createTandaAction";

export function* handlerCreateTanda(data) {
  try {
    const tanda = yield call(requestCreateTanda, data);

    const currentUser = localStorage.getItem("user");

    yield put(setCreateTandaAction({ tanda: tanda.data }));
    yield put(
      setAuthUserAction({
        currentUser: JSON.parse(currentUser),
        loading: false,
      })
    );
  } catch (err) {
    return err;
  }
}

export function* handlerGetTandaCreatedby(data) {
  try {
    const tandaBy = yield call(requestGetTandaCreatedby, data);

    yield put(setGetTandaCreatedbyAction(tandaBy.data));
  } catch (err) {
    return err;
  }
}
