import { MostInfoDTO } from 'models';

export type RequestMostInfo = {
  userName: string;
};

export type ResponseMostInfo = MostInfoDTO;

export interface IMostInfoState extends MostInfoDTO {
  isFetching: boolean;
}
