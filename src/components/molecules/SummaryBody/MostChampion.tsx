import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'modules/rootState';
import { TAB } from 'components/organisms/Widget/SummaryGames';
import Empty from 'assets/images/group.svg';
import { calWinRate } from 'utils';
import SummaryKDA from 'components/atoms/RateKDA/SummaryKDA';

interface IMostChampion {
  tab: TAB;
}

export default function MostChampion({ tab }: IMostChampion) {
  const { champions } = useSelector((state: RootState) => state.matches);
  let withEmptyChampions: any = [...champions];
  if (champions.length < 3) {
    const length = 3 - champions.length;
    for (let i = 0; i < length; i++) {
      withEmptyChampions.push('empty');
    }
  }

  console.log(champions);

  return (
    <Container>
      {withEmptyChampions.map((champion, idx) => {
        if (champion === 'empty') {
          return (
            <Row key={idx}>
              <Image src={Empty} alt="챔피언 정보가 없습니다." />
              <Nothing>챔피언 정보가 없습니다.</Nothing>
            </Row>
          );
        }

        return (
          <Row key={idx}>
            <Image src={champion.imageUrl} alt="챔피언" />
            <Right>
              <Name>{champion.name}</Name>
              <Stats>
                <WinRate overWin={calWinRate(champion.wins, champion.losses) >= 60}>
                  {calWinRate(champion.wins, champion.losses)}%
                </WinRate>
                <WinLose>
                  ({champion.wins}승 {champion.losses}패)
                </WinLose>
                <SummaryKDA
                  kill={champion.kills}
                  death={champion.deaths}
                  assist={champion.assists}
                />
              </Stats>
            </Right>
          </Row>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 220px;
  border-left: 1px solid #cdd2d2;
  border-right: 1px solid #cdd2d2;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 34px;
  border-radius: 25px;
  margin-right: 8px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Nothing = styled.div`
  font-size: 11px;
  color: #999999;
`;

const Name = styled.div`
  font-size: 14px;
  color: #333333;
`;

const Stats = styled.div`
  font-size: 11px;
  margin-top: 3px;
`;

const WinRate = styled.span<{ overWin: boolean }>`
  font-weight: bold;
  color: ${({ overWin }) => (overWin ? '#c6443e' : '#333333')};
`;

const WinLose = styled.span`
  color: #555555;
  margin-left: 3px;
  padding-right: 6px;
  border-right: 1px solid #cdd2d2;
  margin-right: 6px;
`;
