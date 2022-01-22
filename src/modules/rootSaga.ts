import { all, fork } from 'redux-saga/effects';

import summonerSaga from './summoner/summoner.sagas';

export function* rootSaga() {
  yield all([fork(summonerSaga)]);
}
