import { AxiosResponse } from 'axios';
import { takeLatest, all, fork, put, select, take, cancel } from 'redux-saga/effects';

import Http from '@http';
import { actionGetMostInfo, GET_MOST_INFO_REQUEST } from './mostInfo.actions';
import { ResponseMostInfo } from './mostInfo.models';

function* workerGetMostInfo(action: ReturnType<typeof actionGetMostInfo.request>) {
  try {
    const { userName } = action.payload;
    const response: AxiosResponse<ResponseMostInfo> = yield Http.instance.get(
      `/summoner/${userName}/mostInfo`
    );

    if (response.status === 200) {
      yield put(actionGetMostInfo.success(response.data));
    } else {
      yield put(actionGetMostInfo.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetMostInfo() {
  yield takeLatest(GET_MOST_INFO_REQUEST, workerGetMostInfo);
}

export default function* mostInfoSaga() {
  yield all([fork(watchGetMostInfo)]);
}
