import { RouterState } from 'connected-react-router';

import { IMostInfoState } from './mostInfo/mostInfo.models';
import { ISummonerState } from './summoner/summoner.models';

export interface RootState {
  router: RouterState;
  summoner: ISummonerState;
  mostInfo: IMostInfoState;
}
