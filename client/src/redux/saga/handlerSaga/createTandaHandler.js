import { call, put } from "redux-saga/effects";
import { createTandaSuccessAction } from "./../../actions/createTanda";
import { requestCreateTanda } from "../RequestSaga/createTandaRequest";
import { getTandaCreatedByUserSuccessAction } from "../../actions/getTandaCreatedByUserActions";
import { getTandaByUserRequest } from "../RequestSaga/getTandaCreatedByUserRequest";

export function* handlerCreateTanda(data) {
  try {
    const tanda = yield call(requestCreateTanda, data);
    console.log("data from tanda created 1", tanda.data._id);
    const tandaByUser = yield call(getTandaByUserRequest, tanda.data._id);
    console.log("data from tanda created 2", tandaByUser);
    const userTanda = tandaByUser.data;
    console.log("data from tanda created 3", userTanda);
    yield put(getTandaCreatedByUserSuccessAction(userTanda));
    // yield put(createTandaSuccessAction({ tanda: tanda.data }));
  } catch (err) {
    return err;
  }
}
