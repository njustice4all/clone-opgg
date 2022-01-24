import { MatchDetailDTO } from 'models';

export type RequestMatchDetail = {
  userName: string;
  gameId: number;
};

export type ResponseMatchDetail = MatchDetailDTO;

// TODO: { ...게임아이디: 디테일 }
