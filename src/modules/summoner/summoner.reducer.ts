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
  isFetching: false,
  resAutoComplete: summonerState,
  result: summonerState,
};

const summonerReducer = createReducer<ISummonerState, RootAction>(initialState, {
  [GET_SUMMONER_REQUEST]: () => ({ ...initialState, isFetching: true }),
  [GET_SUMMONER_SUCCESS]: (state, action) => {
    return { ...state, result: action.payload.summoner, isFetching: false };
  },
  [GET_SUMMONER_FAILURE]: () => ({ ...initialState, isFetching: false }),

  [GET_SUMMONER_SUGGEST_REQUEST]: () => ({ ...initialState, isFetching: true }),
  [GET_SUMMONER_SUGGEST_SUCCESS]: (state, action) => {
    return { ...state, resAutoComplete: action.payload.summoner, isFetching: false };
  },
  [GET_SUMMONER_SUGGEST_FAILURE]: () => ({ ...initialState, isFetching: false }),

  [CLICK_SUMMONER]: (state) => ({
    ...state,
    isFetching: false,
    result: state.resAutoComplete,
  }),
});

export default summonerReducer;
