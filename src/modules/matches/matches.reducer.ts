import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { GET_MATCHES_REQUEST, GET_MATCHES_SUCCESS, GET_MATCHES_FAILURE } from './matches.actions';
import { IMatchesState } from './matches.models';

const initialState = {
  isFetching: false,
  champions: [],
  games: [],
  positions: [],
  summary: {
    assists: 0,
    deaths: 0,
    kills: 0,
    losses: 0,
    wins: 0,
  },
};

const matchesReducer = createReducer<IMatchesState, RootAction>(initialState, {
  [GET_MATCHES_REQUEST]: (state) => ({ ...state, isFetching: true }),
  [GET_MATCHES_SUCCESS]: (state, action) => ({ isFetching: false, ...action.payload }),
  [GET_MATCHES_FAILURE]: () => initialState,
});

export default matchesReducer;
