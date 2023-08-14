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
  console.log("handler create tanda============================1111 ", data);

  try {
    console.log(" tanda handler 1", data);
    const tanda = yield call(requestCreateTanda, data);

    console.log(" tanda handler 2 ", tanda);
    const currentUser = localStorage.getItem("user");
    console.log("handler auth 232323", JSON.parse(currentUser));

    yield put(setCreateTandaAction({ tanda: tanda.data }));
    yield put(
      setAuthUserAction({
        currentUser: JSON.parse(currentUser),
        loading: false,
      })
    );
  } catch (err) {
    console.log(" tanda handler error ", err);
    return err;
  }
}

export function* handlerGetTandaCreatedby(data) {
  console.log(
    "handler get  tanda create by============================ user ",
    data
  );

  try {
    console.log(" get  tanda handler 1", data);
    const tandaBy = yield call(requestGetTandaCreatedby, data);
    console.log(" get  tanda handler 2=====================2", tandaBy);

    yield put(setGetTandaCreatedbyAction(tandaBy.data));
    const currentUser = localStorage.getItem("user");
    console.log("handler auth 232323", JSON.parse(currentUser));
    yield put(
      setAuthUserAction({
        currentUser: JSON.parse(currentUser),
        loading: false,
      })
    );
  } catch (err) {
    console.log(" tanda handler error ", err);
    return err;
  }
}
