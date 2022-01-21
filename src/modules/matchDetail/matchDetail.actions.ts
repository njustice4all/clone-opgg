import { createAsyncAction, ActionType } from 'typesafe-actions';

import { RequestMatchDetail, ResponseMatchDetail } from './matchDetail.models';

export const GET_MATCH_DETAIL_REQUEST = 'GET_MATCH_DETAIL_REQUEST';
export const GET_MATCH_DETAIL_SUCCESS = 'GET_MATCH_DETAIL_SUCCESS';
export const GET_MATCH_DETAIL_FAILURE = 'GET_MATCH_DETAIL_FAILURE';
export const actionGetMatchDetail = createAsyncAction(
  GET_MATCH_DETAIL_REQUEST,
  GET_MATCH_DETAIL_SUCCESS,
  GET_MATCH_DETAIL_FAILURE
)<RequestMatchDetail, ResponseMatchDetail>();

const actions = { actionGetMatchDetail };

export type MatchDetailActions = ActionType<typeof actions>;
