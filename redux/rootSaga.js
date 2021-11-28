import { all } from "redux-saga/effects";

import productsSaga from "bus/products/sagas";

export function* rootSaga() {
  yield all([
    ...productsSaga,

  ]);
}
