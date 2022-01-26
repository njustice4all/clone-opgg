import { AxiosResponse } from 'axios';
import { all, fork, put, select, takeEvery } from 'redux-saga/effects';

import Http from '@http';
import { actionGetMatchDetail, GET_MATCH_DETAIL_REQUEST } from './matchDetail.actions';
import { ResponseMatchDetail } from './matchDetail.models';
import { RootState } from 'modules/rootState';

function* workerGetMatchDetail(action: ReturnType<typeof actionGetMatchDetail.request>) {
  try {
    const { userName, gameId } = action.payload;
    const matchDetail = yield select((state: RootState) => state.matchDetail);

    // 해당게임 정보 있으면 그걸 사용함
    if (matchDetail[gameId]) return;

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
