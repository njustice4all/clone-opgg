import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { RootState } from './rootState';

const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),
  });

export default createRootReducer;
