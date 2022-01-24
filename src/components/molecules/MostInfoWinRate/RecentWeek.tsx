import React from 'react';
import styled from 'styled-components';

import { ChampionWinRate } from 'models';
import { calWinRate } from 'utils';

interface IRecentWeek {
  winRate: ChampionWinRate;
}

export default function RecentWeek({ winRate }: IRecentWeek) {
  const { wins, losses } = winRate;
  const widthWin = (wins / (wins + losses)) * 100;

  return (
    <Container>
      <Image src={winRate.imageUrl} alt="챔피언 사진" />
      <Name>{winRate.name}</Name>
      <Rate>{calWinRate(winRate.wins, winRate.losses)}%</Rate>
      <Bar>
        {wins !== 0 && <Win width={widthWin}>{wins}승</Win>}
        {losses !== 0 && <Lose width={100 - widthWin}>{losses}패</Lose>}
      </Bar>
    </Container>
  );
}

const Container = styled.div`
  padding: 8px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cdd2d2;
  &:last-child {
    border: none;
  }
`;

const Image = styled.img`
  width: 32px;
  border-radius: 25px;
  margin-right: 10px;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #5e5e5e;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 60px;
`;

const Rate = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #879292;
  width: 40px;
  text-align: center;
  margin-right: 5px;
`;

const Bar = styled.div`
  width: 123px;
  margin: 4px 0;
  display: flex;
  height: 24px;
  border-radius: 4px;
  overflow: hidden;
`;

const Win = styled.div<{ width: number }>`
  background-color: #1f8ecd;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 4px;
  width: ${({ width }) => width}%;
  min-width: 25px;
`;

const Lose = styled.div<{ width: number }>`
  background-color: #ee5a52;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  padding-right: 4px;
  justify-content: flex-end;
  width: ${({ width }) => width}%;
  min-width: 25px;
`;
