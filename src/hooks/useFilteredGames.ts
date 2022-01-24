import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GameInfo } from 'models';
import { RootState } from 'modules/rootState';
import { GAME_TYPE } from 'utils/constants';

const filteredGames = (games: GameInfo[], tab: 'all' | 'solo' | 'free') => {
  return games.filter(({ gameType }) => (tab === 'all' ? gameType : gameType === GAME_TYPE[tab]));
};

export default function useFilteredGames() {
  const [results, setResults] = useState<GameInfo[]>([]);
  const { games } = useSelector((state: RootState) => state.matches);
  const { currentTab } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    setResults(filteredGames(games, currentTab));
  }, [games, currentTab]);

  return results;
}
