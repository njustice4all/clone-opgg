import { MatchDetailDTO, Team } from 'models';

export type RequestMatchDetail = {
  userName: string;
  gameId: string;
};

export type ResponseMatchDetail = MatchDetailDTO;

export interface IMatchDetailState {
  [k: string]: {
    gameId: string;
    teams: Team[];
  };
}
