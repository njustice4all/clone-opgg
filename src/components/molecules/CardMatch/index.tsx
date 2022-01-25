import React from 'react';
import styled from 'styled-components';

import { GameInfo } from 'models';
import MatchStats from 'components/atoms/Matches/MatchStats';
import MatchSpell from 'components/atoms/Matches/MatchSpell';

interface ICardMatch extends GameInfo {}

export default function CardMatch(game: ICardMatch) {
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
      </ContentWrap>
      <Players>인예지어린이</Players>
      <Expand>뿅</Expand>
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

const Players = styled.div`
  width: 170px;
`;

const Expand = styled.div`
  width: 30px;
`;
