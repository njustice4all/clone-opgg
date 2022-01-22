import { RouterState } from 'connected-react-router';

import { ISummonerState } from './summoner/summoner.models';

export interface RootState {
  router: RouterState;
  summoner: ISummonerState;
}
