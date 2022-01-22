import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { ISummonerState } from './summoner.models';
import {
  GET_SUMMONER_REQUEST,
  GET_SUMMONER_SUCCESS,
  GET_SUMMONER_FAILURE,
} from './summoner.actions';

const initialState = {
  isFetching: false,
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

const summonerReducer = createReducer<ISummonerState, RootAction>(initialState, {
  [GET_SUMMONER_REQUEST]: () => ({ ...initialState, isFetching: true }),
  [GET_SUMMONER_SUCCESS]: (state, action) => {
    return { ...action.payload.summoner, isFetching: false };
  },
  [GET_SUMMONER_FAILURE]: () => ({ ...initialState, isFetching: false }),
});

export default summonerReducer;
