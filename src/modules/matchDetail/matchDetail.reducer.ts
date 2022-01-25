import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { IMatchDetailState } from './matchDetail.models';
import {
  GET_MATCH_DETAIL_REQUEST,
  GET_MATCH_DETAIL_SUCCESS,
  GET_MATCH_DETAIL_FAILURE,
} from './matchDetail.actions';

const initialState = {};

const matchDetailReducer = createReducer<IMatchDetailState, RootAction>(initialState, {
  [GET_MATCH_DETAIL_REQUEST]: (state) => state,
  [GET_MATCH_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    [action.payload.gameId]: action.payload,
  }),
  [GET_MATCH_DETAIL_FAILURE]: () => initialState,
});

export default matchDetailReducer;
