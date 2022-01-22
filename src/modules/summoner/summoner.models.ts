import { Summoner, SummonerDTO } from 'models';

export type RequestSummoner = {
  userName: string;
};

export type ResponseSummoner = SummonerDTO;

export interface ISummonerState {
  isFetching: boolean;
  resAutoComplete: Summoner;
  result: Summoner;
}
