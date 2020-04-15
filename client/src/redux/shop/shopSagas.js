import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import shopActions from './shopActions';
import { shopActionTypes } from './shopActionTypes';

function* fetchCollectionsAsync() {
  const collectionRef = yield firestore.collection('collections');

  try {
    const snapshot = yield collectionRef.get();
    console.log('snapshot', snapshot);
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    console.log('collectionMap', collectionMap);

    yield put(shopActions.fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(shopActions.fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
