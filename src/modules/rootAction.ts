import { MostInfoActions } from './mostInfo/mostInfo.actions';
import { SummonerActions } from './summoner/summoner.actions';

export type RootAction = SummonerActions | MostInfoActions;
