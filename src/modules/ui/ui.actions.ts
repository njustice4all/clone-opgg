import { createAction, ActionType } from 'typesafe-actions';

import { Payload } from './ui.models';

export const UPDATE_UI = 'UPDATE_UI';
export const actionUpdateUI = createAction(UPDATE_UI)<Payload>();

const actions = { actionUpdateUI };

export type UIActions = ActionType<typeof actions>;
