import { createAsyncAction, ActionType } from 'typesafe-actions';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const actionGetItems = createAsyncAction(
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE
)<undefined, any, undefined>();

const actions = { actionGetItems };

export type ItemActions = ActionType<typeof actions>;
