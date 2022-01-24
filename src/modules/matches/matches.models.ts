import { MatchesDTO } from 'models';

export type RequestMatches = {
  userName: string;
};

export type ResponseMatches = MatchesDTO;

export interface IMatchesState extends MatchesDTO {
  isFetching: boolean;
}
