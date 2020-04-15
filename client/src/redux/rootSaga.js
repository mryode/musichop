import { all, call } from 'redux-saga/effects';

import shopSagas from './shop/shopSagas';

export default function* rootSaga() {
  yield all([call(shopSagas)]);
}
