import { createAsyncAction, ActionType } from 'typesafe-actions';

import { RequestMostInfo, ResponseMostInfo } from './mostInfo.models';

export const GET_MOST_INFO_REQUEST = 'GET_MOST_INFO_REQUEST';
export const GET_MOST_INFO_SUCCESS = 'GET_MOST_INFO_SUCCESS';
export const GET_MOST_INFO_FAILURE = 'GET_MOST_INFO_FAILURE';
export const actionGetMostInfo = createAsyncAction(
  GET_MOST_INFO_REQUEST,
  GET_MOST_INFO_SUCCESS,
  GET_MOST_INFO_FAILURE
)<RequestMostInfo, ResponseMostInfo, undefined>();

const actions = { actionGetMostInfo };

export type MostInfoActions = ActionType<typeof actions>;
