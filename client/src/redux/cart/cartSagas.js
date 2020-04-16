import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from '../user/userActionTypes';
import cartActions from './cartActions';

function* clearCartOnSignOut() {
  yield put(cartActions.clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
