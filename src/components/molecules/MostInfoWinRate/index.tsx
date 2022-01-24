import React from 'react';
import styled from 'styled-components';

import { MostChampion } from 'models';
import RateKDA from 'components/atoms/RateKDA';
import { calWinRate } from 'utils';

interface IMostInfoWinRate {
  champion: MostChampion;
}

export default function MostInfoWinRate({ champion }: IMostInfoWinRate) {
  const { games, kills, deaths, assists } = champion;
  const winRate = calWinRate(champion.wins, champion.losses);

  return (
    <Container>
      <First>
        <Image src={champion.imageUrl} alt="챔피언 이미지" />
      </First>
      <Second>
        <Name title={champion.name}>{champion.name}</Name>
        <CS>CS {champion.cs} (2.4)</CS>
      </Second>
      <Third>
        <RateKDA kill={kills} death={deaths} assist={assists} />
        <KDA>
          {(kills / games).toFixed(1)} / {(deaths / games).toFixed(1)} /{' '}
          {(assists / games).toFixed(1)}
        </KDA>
      </Third>
      <Fourth>
        <WinRate overWin={winRate >= 60}>{winRate}%</WinRate>
        <TotalGames>{champion.games}게임</TotalGames>
      </Fourth>
    </Container>
  );
}

const Container = styled.div`
  padding: 4px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cdd2d2;
  &:last-child {
    border: none;
  }
`;

const Image = styled.img`
  width: 45px;
  border-radius: 25px;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const CS = styled.div`
  color: #879292;
  font-size: 11px;
`;

const First = styled.div`
  text-align: center;
  margin-right: 10px;
`;

const Second = styled.div`
  width: 70px;
`;

const Third = styled.div`
  text-align: center;
  flex: 1;
`;

const KDA = styled.div`
  margin-top: 3px;
  font-size: 11px;
  color: #879292;
  font-weight: normal;
`;

const Fourth = styled.div`
  text-align: center;
`;

const WinRate = styled.div<{ overWin: boolean }>`
  font-size: 13px;
  font-weight: bold;
  color: ${({ overWin }) => (overWin ? '#c6443e' : '#5e5e5e')};
`;

const TotalGames = styled.div`
  font-size: 11px;
  color: #879292;
  margin-top: 3px;
`;
