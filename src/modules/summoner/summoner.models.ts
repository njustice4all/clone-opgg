import { Summoner, SummonerDTO } from 'models';

export type RequestSummoner = {
  userName: string;
};

export type ResponseSummoner = SummonerDTO;

interface AutoComplete extends Summoner {
  isFetching: boolean;
}

interface Result extends Summoner {
  isFetching: boolean;
}

export interface ISummonerState {
  resAutoComplete: AutoComplete;
  result: Result;
}
