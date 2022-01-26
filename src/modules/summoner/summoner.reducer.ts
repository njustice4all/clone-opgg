import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { ISummonerState } from './summoner.models';
import {
  GET_SUMMONER_REQUEST,
  GET_SUMMONER_SUCCESS,
  GET_SUMMONER_FAILURE,
  GET_SUMMONER_SUGGEST_REQUEST,
  GET_SUMMONER_SUGGEST_SUCCESS,
  GET_SUMMONER_SUGGEST_FAILURE,
  CLICK_SUMMONER,
  COPY_SUMMONER,
} from './summoner.actions';

const summonerState = {
  ladderRank: {
    rank: 0,
    rankPercentOfTop: 0,
  },
  leagues: [],
  level: 0,
  name: '',
  previousTiers: [],
  profileBackgroundImageUrl: '',
  profileBorderImageUrl: '',
  profileImageUrl: '',
  url: '',
};

const initialState = {
  resAutoComplete: { isFetching: false, ...summonerState },
  result: { isFetching: false, ...summonerState },
};

const summonerReducer = createReducer<ISummonerState, RootAction>(initialState, {
  [GET_SUMMONER_REQUEST]: (state) => ({ ...state, result: { ...state.result, isFetching: true } }),
  [GET_SUMMONER_SUCCESS]: (state, action) => {
    return { ...state, result: { ...action.payload.summoner, isFetching: false } };
  },
  [GET_SUMMONER_FAILURE]: () => initialState,

  [GET_SUMMONER_SUGGEST_REQUEST]: (state) => ({
    ...state,
    resAutoComplete: { ...state.resAutoComplete, isFetching: true },
  }),
  [GET_SUMMONER_SUGGEST_SUCCESS]: (state, action) => {
    return { ...state, resAutoComplete: { ...action.payload.summoner, isFetching: false } };
  },
  [GET_SUMMONER_SUGGEST_FAILURE]: () => initialState,

  [CLICK_SUMMONER]: (state) => ({
    ...state,
    result: { ...state.resAutoComplete, isFetching: false },
  }),

  [COPY_SUMMONER]: (state) => ({
    result: { ...state.resAutoComplete, isFetching: false },
    resAutoComplete: initialState.resAutoComplete,
  }),
});

export default summonerReducer;
