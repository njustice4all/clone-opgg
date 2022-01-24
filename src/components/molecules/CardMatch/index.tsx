import React from 'react';
import styled from 'styled-components';

import { GameInfo } from 'models';
import { calDisplayDate } from 'utils';

interface ICardMatch extends GameInfo {}

export default function CardMatch(game: ICardMatch) {
  const { createDate, gameLength } = game;
  const minutes = Math.floor(gameLength / 60);
  const seconds = gameLength - minutes * 60;

  return (
    <Container isWin={game.isWin}>
      <ContentWrap>
        <Stats>
          <GameType>{game.gameType}</GameType>
          <div>{calDisplayDate(createDate * 1000)}</div>
          <Bar isWin={game.isWin} />
          <GameResult isWin={game.isWin}>{game.isWin ? '승리' : '패배'}</GameResult>
          <div>
            {minutes}분 {seconds}초
          </div>
        </Stats>
        <Info>
          <div>사진</div>
          <div>스펠</div>
          <div>레오나</div>
        </Info>
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
`;

const Stats = styled.div`
  width: 70px;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Info = styled.div`
  width: 100px;
`;

const Players = styled.div`
  width: 170px;
`;

const Expand = styled.div`
  width: 30px;
`;
