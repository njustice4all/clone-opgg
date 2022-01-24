import { all, fork } from 'redux-saga/effects';

import matchesSaga from './matches/matches.sagas';
import mostInfoSaga from './mostInfo/mostInfo.sagas';
import summonerSaga from './summoner/summoner.sagas';

export function* rootSaga() {
  yield all([fork(summonerSaga), fork(mostInfoSaga), fork(matchesSaga)]);
}
