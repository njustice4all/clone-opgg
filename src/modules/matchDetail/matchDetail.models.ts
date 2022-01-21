import { MatchDetailDTO } from 'models';

export type RequestMatchDetail = {
  userName: string;
  gameId: number;
};

export type ResponseMatchDetail = MatchDetailDTO;
