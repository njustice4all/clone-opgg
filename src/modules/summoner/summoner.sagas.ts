import { AxiosResponse } from 'axios';
import { takeLatest, all, fork, put, delay, select, take, cancel } from 'redux-saga/effects';

import Http from '@http';
import { RootState } from 'modules/rootState';
import {
  actionCancelGetSummonerSuggest,
  actionClickSummoner,
  actionCopySummoner,
  actionGetSummoner,
  actionGetSummonerSuggest,
  CANCEL_GET_SUMMONER_SUGGEST,
  CLICK_SUMMONER,
  GET_SUMMONER_SUGGEST_REQUEST,
} from './summoner.actions';
import { ResponseSummoner } from './summoner.models';

function* workerGetSummonerSuggest(action: ReturnType<typeof actionGetSummonerSuggest.request>) {
  if (action.payload.userName === '') return;

  try {
    yield delay(500);
    const { userName } = action.payload;
    const response: AxiosResponse<ResponseSummoner> = yield Http.instance.get(
      `/summoner/${userName}`
    );

    if (response.status === 200) {
      yield put(actionGetSummonerSuggest.success(response.data));
    } else {
      yield put(actionGetSummonerSuggest.failure());
    }
  } catch (error) {
    console.error(error);
    yield put(actionGetSummonerSuggest.failure());
  }
}

function* workerClickSummoner(action: ReturnType<typeof actionClickSummoner>) {
  try {
    yield put(actionCancelGetSummonerSuggest());
    const level: number = yield select((state: RootState) => state.summoner.resAutoComplete.level);

    if (!!level) {
      yield put(actionCopySummoner());
    } else {
      const response: AxiosResponse<ResponseSummoner> = yield Http.instance.get(
        `/summoner/${action.payload}`
      );

      if (response.status === 200) {
        yield put(actionGetSummoner.success(response.data));
      } else {
        yield put(actionGetSummoner.failure());
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchClickSummoner() {
  yield takeLatest(CLICK_SUMMONER, workerClickSummoner);
}

function* watchGetSummonerSuggest() {
  while (true) {
    const task = yield takeLatest(GET_SUMMONER_SUGGEST_REQUEST, workerGetSummonerSuggest);
    yield take(CANCEL_GET_SUMMONER_SUGGEST);
    yield cancel(task);
  }
}

export default function* summonerSaga() {
  yield all([fork(watchGetSummonerSuggest), fork(watchClickSummoner)]);
}
