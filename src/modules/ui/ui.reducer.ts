import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { IUIState } from './ui.models';
import { UPDATE_UI } from './ui.actions';

const initialState = {
  currentTab: 'all' as const,
};

const uiReducer = createReducer<IUIState, RootAction>(initialState, {
  [UPDATE_UI]: (state, action) => ({ ...state, [action.payload.key]: action.payload.value }),
});

export default uiReducer;
