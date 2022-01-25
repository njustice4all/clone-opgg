import { AxiosResponse } from 'axios';
import { takeLatest, all, fork, put } from 'redux-saga/effects';

import Http from '@http';
import { actionGetItems, GET_ITEMS_REQUEST } from './item.actions';

function* workerGetItems() {
  try {
    const response: AxiosResponse<any> = yield Http.itemInstance.get('/item.json');

    if (response.status === 200) {
      yield put(actionGetItems.success(response.data.data));
    } else {
      yield put(actionGetItems.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetItems() {
  yield takeLatest(GET_ITEMS_REQUEST, workerGetItems);
}

export default function* itemSaga() {
  yield all([fork(watchGetItems)]);
}
