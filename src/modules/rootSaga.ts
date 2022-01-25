import { all, fork } from 'redux-saga/effects';

import matchesSaga from './matches/matches.sagas';
import mostInfoSaga from './mostInfo/mostInfo.sagas';
import summonerSaga from './summoner/summoner.sagas';
import itemSaga from './item/item.sagas';
import matchDetailSaga from './matchDetail/matchDetail.sagas';

export function* rootSaga() {
  yield all([
    fork(summonerSaga),
    fork(mostInfoSaga),
    fork(matchesSaga),
    fork(itemSaga),
    fork(matchDetailSaga),
  ]);
}
