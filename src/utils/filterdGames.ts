import { GameInfo } from 'models';
import { TAB } from 'components/organisms/Widget/SummaryGames';
import { GAME_TYPE } from './constants';

export const filterdGames = (games: GameInfo[], tab: TAB) => {
  return games.filter(({ gameType }) => (tab === 'all' ? gameType : gameType === GAME_TYPE[tab]));
};
