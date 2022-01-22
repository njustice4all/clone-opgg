import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { RootState } from './rootState';
import summonerReducer from './summoner/summoner.reducer';

const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    summoner: summonerReducer,
  });

export default createRootReducer;
