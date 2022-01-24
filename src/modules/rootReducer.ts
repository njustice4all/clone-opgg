import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { RootState } from './rootState';
import summonerReducer from './summoner/summoner.reducer';
import mostInfoReducer from './mostInfo/mostInfo.reducer';
import matchesReducer from './matches/matches.reducer';

const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    summoner: summonerReducer,
    mostInfo: mostInfoReducer,
    matches: matchesReducer,
  });

export default createRootReducer;
