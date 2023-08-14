import { fork, takeLatest, all } from "redux-saga/effects";
import { CREATE_TANDA, GET_TANDA_CREATEDBY } from "../../constants";

import {
  handlerCreateTanda,
  handlerGetTandaCreatedby,
} from "../handlerSaga/createTandaHandler";

export function* createTandaWatcher() {
  console.log("create tanda  watcher ");
  yield takeLatest(CREATE_TANDA, handlerCreateTanda);
}
export function* getTandaCreatedbyWatcher() {
  console.log("create tanda  watcher ");
  yield takeLatest(GET_TANDA_CREATEDBY, handlerGetTandaCreatedby);
}

export default function* createTandaSaga() {
  yield all([fork(createTandaWatcher), fork(getTandaCreatedbyWatcher)]);
}
