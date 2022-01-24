import { MatchesActions } from './matches/matches.actions';
import { MostInfoActions } from './mostInfo/mostInfo.actions';
import { SummonerActions } from './summoner/summoner.actions';
import { UIActions } from './ui/ui.actions';

export type RootAction = SummonerActions | MostInfoActions | MatchesActions | UIActions;
