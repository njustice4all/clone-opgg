import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import {
  GET_MOST_INFO_REQUEST,
  GET_MOST_INFO_SUCCESS,
  GET_MOST_INFO_FAILURE,
} from './mostInfo.actions';
import { IMostInfoState } from './mostInfo.models';

const initialState = {
  isFetching: false,
  champions: [],
  recentWinRate: [],
};

const mostInfoReducer = createReducer<IMostInfoState, RootAction>(initialState, {
  [GET_MOST_INFO_REQUEST]: () => ({ ...initialState, isFetching: true }),
  [GET_MOST_INFO_SUCCESS]: (state, action) => ({
    isFetching: false,
    champions: action.payload.champions,
    recentWinRate: action.payload.recentWinRate,
  }),
  [GET_MOST_INFO_FAILURE]: () => ({ ...initialState, isFetching: false }),
});

export default mostInfoReducer;
