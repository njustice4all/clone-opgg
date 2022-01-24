import React from 'react';
import styled from 'styled-components';
import { calWinRate } from 'utils';

import { POSITION } from 'utils/constants';

interface IIconPosition {
  games: number;
  losses: number;
  position: string;
  wins: number;
}

const TOTAL = 20;
export default function IconPosition({ games, losses, position, wins }: IIconPosition) {
  const { name, src } = POSITION[position];
  const rate = (games * 100) / TOTAL;

  return (
    <Container>
      <Icon src={src} alt="포지션" />
      <Wrap>
        <Name>{name}</Name>
        <Stats>
          <PositionRate>{rate}%</PositionRate>
          <LabelWinRate>승률 </LabelWinRate>
          <WinRate>{calWinRate(wins, losses)}%</WinRate>
        </Stats>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon = styled.img`
  width: 28px;
  margin-right: 8px;
`;

const Wrap = styled.div``;

const Name = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const Stats = styled.div`
  font-size: 11px;
  margin-top: 3px;
`;

const PositionRate = styled.span`
  font-weight: bold;
  color: #1f8ecd;
  padding-right: 6px;
  margin-right: 6px;
  border-right: 1px solid #cdd2d2;
`;

const LabelWinRate = styled.span`
  color: #666666;
`;

const WinRate = styled.span`
  font-weight: bold;
  color: #333333;
`;
