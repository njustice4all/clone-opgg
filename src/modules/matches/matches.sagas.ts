import { AxiosResponse } from 'axios';
import { takeLatest, all, fork, put } from 'redux-saga/effects';

import Http from '@http';
import { actionGetMatches, GET_MATCHES_REQUEST } from './matches.actions';
import { ResponseMatches } from './matches.models';

function* workerGetMatches(action: ReturnType<typeof actionGetMatches.request>) {
  try {
    const { userName } = action.payload;
    const response: AxiosResponse<ResponseMatches> = yield Http.instance.get(
      `/summoner/${userName}/matches`
    );

    if (response.status === 200) {
      yield put(actionGetMatches.success(response.data));
    } else {
      yield put(actionGetMatches.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetMatches() {
  yield takeLatest(GET_MATCHES_REQUEST, workerGetMatches);
}

export default function* matchesSaga() {
  yield all([fork(watchGetMatches)]);
}
