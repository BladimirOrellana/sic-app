import { fork, takeLatest, all } from "redux-saga/effects";
import { CREATE_TANDA_START } from "../../constants";

import { handlerCreateTanda } from "../handlerSaga/createTandaHandler";

export function* createTandaWatcher() {
  yield takeLatest(CREATE_TANDA_START, handlerCreateTanda);
}

export default function* createTandaSaga() {
  yield all([fork(createTandaWatcher)]);
}
