import { createAsyncAction, ActionType } from 'typesafe-actions';

import { RequestSummoner, ResponseSummoner } from './summoner.models';

export const GET_SUMMONER_REQUEST = 'GET_SUMMONER_REQUEST';
export const GET_SUMMONER_SUCCESS = 'GET_SUMMONER_SUCCESS';
export const GET_SUMMONER_FAILURE = 'GET_SUMMONER_FAILURE';
export const actionGetSummoner = createAsyncAction(
  GET_SUMMONER_REQUEST,
  GET_SUMMONER_SUCCESS,
  GET_SUMMONER_FAILURE
)<RequestSummoner, ResponseSummoner>();

const actions = { actionGetSummoner };

export type SummonerActions = ActionType<typeof actions>;
