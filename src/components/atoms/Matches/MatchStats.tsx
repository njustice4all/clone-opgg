import React from 'react';
import styled from 'styled-components';

import { calDisplayDate } from 'utils';

interface IStats {
  gameType: string;
  gameLength: number;
  createDate: number;
  isWin: boolean;
}

export default function MatchStats({ isWin, createDate, gameLength, gameType }: IStats) {
  const minutes = Math.floor(gameLength / 60);
  const seconds = gameLength - minutes * 60;

  return (
    <Container>
      <GameType>{gameType}</GameType>
      <div>{calDisplayDate(createDate * 1000)}</div>
      <Bar isWin={isWin} />
      <GameResult isWin={isWin}>{isWin ? '승리' : '패배'}</GameResult>
      <div>
        {minutes}분 {seconds}초
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 70px;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GameType = styled.div`
  color: #555555;
  font-weight: bold;
`;

const Bar = styled.div<{ isWin: boolean }>`
  background-color: ${({ isWin }) => (isWin ? '#99b9cf' : '#cea7a7')};
  width: 27px;
  height: 1px;
  margin: 3px auto;
`;

const GameResult = styled.div<{ isWin: boolean }>`
  color: ${({ isWin }) => (isWin ? '#2c709b' : '#d0021b')};
  font-weight: bold;
`;
