import { takeLatest, fork, all } from "redux-saga/effects";
import { GET_TANDA_CREATED_BY_USER_START } from "../../constants";
import { getTandaCreatedByUserHandler } from "../handlerSaga/getTandaCreatedByUserHandler";

export function* getTandaByUserWatcher() {
  console.log("get tanda watcher");

  yield takeLatest(
    GET_TANDA_CREATED_BY_USER_START,
    getTandaCreatedByUserHandler
  );
}

export default function* getTandaByUserSaga() {
  yield all([fork(getTandaByUserWatcher)]);
}
