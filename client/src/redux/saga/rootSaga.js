import { all } from "redux-saga/effects";

import registerUserSaga from "./sagaWatcher/registerUserSagaWatcher";
import messagesSaga from "./sagaWatcher/messageSaga";
import createTandaSaga from "./sagaWatcher/createTandaSaga";
import getTandaByUserSaga from "./sagaWatcher/getTandaCreatedByUserSaga";
export default function* rootSaga() {
  yield all([
    registerUserSaga(),
    messagesSaga(),
    createTandaSaga(),
    getTandaByUserSaga(),
  ]);
}
