import { call, put } from "redux-saga/effects";
import { getTandaByUserRequest } from "../requestSaga/getTandaCreatedByUserRequest";
import { setErrorMessage } from "../../actions/messagesAction";
import {
  getTandaCreatedByUserStartAction,
  getTandaCreatedByUserSuccessAction,
} from "../../actions/getTandaCreatedByUserActions";

export function* getTandaCreatedByUserHandler(payload) {
  console.log("get tanda handler =============>>>>>>>>>1", payload.data);
  try {
    const tandaByUser = yield call(getTandaByUserRequest, payload.data);
    const data = tandaByUser.data;
    console.log("get tanda handler 2", tandaByUser.data);
    yield put(getTandaCreatedByUserSuccessAction(data));
  } catch (error) {
    console.log("get tanda handler error ", error);
    yield put(setErrorMessage(error));
  }
}
