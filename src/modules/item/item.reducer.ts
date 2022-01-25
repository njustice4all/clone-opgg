import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { IItemState } from './item.models';
import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from './item.actions';

const initialState = {};

const itemReducer = createReducer<IItemState, RootAction>(initialState, {
  [GET_ITEMS_REQUEST]: () => initialState,
  [GET_ITEMS_SUCCESS]: (state, action) => ({ ...action.payload }),
  [GET_ITEMS_FAILURE]: () => initialState,
});

export default itemReducer;
