import { createAsyncAction, ActionType } from 'typesafe-actions';

import { RequestMatches, ResponseMatches } from './matches.models';

export const GET_MATCHES_REQUEST = 'GET_MATCHES_REQUEST';
export const GET_MATCHES_SUCCESS = 'GET_MATCHES_SUCCESS';
export const GET_MATCHES_FAILURE = 'GET_MATCHES_FAILURE';
export const actionGetMatches = createAsyncAction(
  GET_MATCHES_REQUEST,
  GET_MATCHES_SUCCESS,
  GET_MATCHES_FAILURE
)<RequestMatches, ResponseMatches, undefined>();

const actions = { actionGetMatches };

export type MatchesActions = ActionType<typeof actions>;
