import { RouterState } from 'connected-react-router';

import { IMatchesState } from './matches/matches.models';
import { IMostInfoState } from './mostInfo/mostInfo.models';
import { ISummonerState } from './summoner/summoner.models';
import { IUIState } from './ui/ui.models';
import { IItemState } from './item/item.models';

export interface RootState {
  router: RouterState;
  summoner: ISummonerState;
  mostInfo: IMostInfoState;
  matches: IMatchesState;
  ui: IUIState;
  item: IItemState;
}
