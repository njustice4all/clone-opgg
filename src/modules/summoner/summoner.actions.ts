import { createAction, createAsyncAction, ActionType } from 'typesafe-actions';

import { RequestSummoner, ResponseSummoner } from './summoner.models';

export const GET_SUMMONER_REQUEST = 'GET_SUMMONER_REQUEST';
export const GET_SUMMONER_SUCCESS = 'GET_SUMMONER_SUCCESS';
export const GET_SUMMONER_FAILURE = 'GET_SUMMONER_FAILURE';
export const actionGetSummoner = createAsyncAction(
  GET_SUMMONER_REQUEST,
  GET_SUMMONER_SUCCESS,
  GET_SUMMONER_FAILURE
)<RequestSummoner, ResponseSummoner, undefined>();

export const GET_SUMMONER_SUGGEST_REQUEST = 'GET_SUMMONER_SUGGEST_REQUEST';
export const GET_SUMMONER_SUGGEST_SUCCESS = 'GET_SUMMONER_SUGGEST_SUCCESS';
export const GET_SUMMONER_SUGGEST_FAILURE = 'GET_SUMMONER_SUGGEST_FAILURE';
export const actionGetSummonerSuggest = createAsyncAction(
  GET_SUMMONER_SUGGEST_REQUEST,
  GET_SUMMONER_SUGGEST_SUCCESS,
  GET_SUMMONER_SUGGEST_FAILURE
)<RequestSummoner, ResponseSummoner, undefined>();

export const CLICK_SUMMONER = 'CLICK_SUMMONER';
export const actionClickSummoner = createAction(CLICK_SUMMONER)<string>();

export const CANCEL_GET_SUMMONER_SUGGEST = 'CANCEL_GET_SUMMONER_SUGGEST';
export const actionCancelGetSummonerSuggest = createAction(CANCEL_GET_SUMMONER_SUGGEST)();

export const COPY_SUMMONER = 'COPY_SUMMONER';
export const actionCopySummoner = createAction(COPY_SUMMONER)();

const actions = {
  actionGetSummoner,
  actionGetSummonerSuggest,
  actionClickSummoner,
  actionCancelGetSummonerSuggest,
  actionCopySummoner,
};

export type SummonerActions = ActionType<typeof actions>;
