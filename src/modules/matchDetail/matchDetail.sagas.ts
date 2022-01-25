import { AxiosResponse } from 'axios';
import { all, fork, put, takeEvery } from 'redux-saga/effects';

import Http from '@http';
import { actionGetMatchDetail, GET_MATCH_DETAIL_REQUEST } from './matchDetail.actions';
import { ResponseMatchDetail } from './matchDetail.models';

function* workerGetMatchDetail(action: ReturnType<typeof actionGetMatchDetail.request>) {
  try {
    const { userName, gameId } = action.payload;
    const response: AxiosResponse<ResponseMatchDetail> = yield Http.instance.get(
      `/summoner/${userName}/matchDetail/${gameId}`
    );

    if (response.status === 200) {
      yield put(actionGetMatchDetail.success(response.data));
    } else {
      yield put(actionGetMatchDetail.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetMatchDetail() {
  yield takeEvery(GET_MATCH_DETAIL_REQUEST, workerGetMatchDetail);
}

export default function* matchDetailSaga() {
  yield all([fork(watchGetMatchDetail)]);
}
