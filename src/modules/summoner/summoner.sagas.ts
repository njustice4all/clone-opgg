import { AxiosResponse } from 'axios';
import { takeLatest, all, fork, put } from 'redux-saga/effects';

import Http from '@http';
import { actionGetSummoner, GET_SUMMONER_REQUEST } from './summoner.actions';
import { ResponseSummoner } from './summoner.models';

function* workerGetSummoner(action: ReturnType<typeof actionGetSummoner.request>) {
  try {
    const { userName } = action.payload;
    const response: AxiosResponse<ResponseSummoner> = yield Http.instance.get(
      `/summoner/${userName}`
    );

    if (response.status === 200) {
      yield put(actionGetSummoner.success(response.data));
    } else {
      yield put(actionGetSummoner.failure());
    }
  } catch (error) {
    console.error(error);
    yield put(actionGetSummoner.failure());
  }
}

function* watchGetSummoner() {
  yield takeLatest(GET_SUMMONER_REQUEST, workerGetSummoner);
}

export default function* summonerSaga() {
  yield all([fork(watchGetSummoner)]);
}
