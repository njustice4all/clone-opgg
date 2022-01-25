import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { GameInfo } from 'models';
import MatchStats from 'components/molecules/Matches/MatchStats';
import MatchSpell from 'components/molecules/Matches/MatchSpell';
import MatchResult from 'components/molecules/Matches/MatchResult';
import MatchSummonerInfo from 'components/molecules/Matches/MatchSummonerInfo';
import MatchItems from 'components/molecules/Matches/MatchItems';
import MatchPlayers from '../Matches/MatchPlayers';
import MatchExpand from '../Matches/MatchExpand';
import { actionGetMatchDetail } from 'modules/matchDetail/matchDetail.actions';

interface ICardMatch extends GameInfo {}

export default function CardMatch(game: ICardMatch) {
  const dispatch = useDispatch();
  const { userName } = useParams<{ userName: string }>();
  const { kill, death, assist, opScoreBadge, largestMultiKillString } = game.stats.general;

  useEffect(() => {
    const gameId = game.gameId;
    if (userName) {
      dispatch(actionGetMatchDetail.request({ userName, gameId }));
    }
  }, [game.gameId, userName, dispatch]);

  return (
    <Container isWin={game.isWin}>
      <ContentWrap>
        <MatchStats
          isWin={game.isWin}
          gameType={game.gameType}
          createDate={game.createDate}
          gameLength={game.gameLength}
        />
        <MatchSpell imageUrl={game.champion.imageUrl} spells={game.spells} peak={game.peak} />
        <MatchResult
          k={kill}
          d={death}
          a={assist}
          opScoreBadge={opScoreBadge}
          largestMultiKillString={largestMultiKillString}
        />
        <MatchSummonerInfo level={game.champion.level || 0} general={game.stats.general} />
        <MatchItems isWin={game.isWin} items={game.items} ward={game.stats.ward} />
      </ContentWrap>
      <MatchPlayers gameId={game.gameId} />
      <MatchExpand isWin={game.isWin} />
    </Container>
  );
}

const Container = styled.div<{ isWin: boolean }>`
  border: 1px solid ${({ isWin }) => (isWin ? '#a1b8cd' : '#c0aba8')};
  background-color: ${({ isWin }) => (isWin ? '#b0ceea' : '#d6b5b2')};
  margin-bottom: 8px;
  display: flex;
  height: 96px;
`;

const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  padding: 12px 0;
`;
