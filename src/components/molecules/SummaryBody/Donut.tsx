import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'modules/rootState';
import { TAB } from 'components/organisms/Widget/SummaryGames';
import { filterdGames } from 'utils/filterdGames';
import { calScore, calWinRate } from 'utils';

interface IDonut {
  tab: TAB;
}

export default function Donut({ tab }: IDonut) {
  const { games } = useSelector((state: RootState) => state.matches);

  const visibleGames = useCallback(() => filterdGames(games, tab), [games, tab]);

  const totalGames = visibleGames().length;
  const win = visibleGames().filter((game) => game.isWin).length;
  const lose = totalGames - win;

  const totalKDA = visibleGames().reduce<{ k: number; d: number; a: number; str: number }>(
    (acc, game) => {
      acc['k'] = acc['k'] + game.stats.general.kill;
      acc['d'] = acc['d'] + game.stats.general.death;
      acc['a'] = acc['a'] + game.stats.general.assist;
      acc['str'] = acc['str'] + Number(game.stats.general.kdaString.split(':')[0]);
      return acc;
    },
    { k: 0, d: 0, a: 0, str: 0 }
  );

  return (
    <Container>
      <SummaryRow>
        {totalGames}전 {win}승 {lose}패
      </SummaryRow>
      <Wrap>
        <DonutWrapper>
          <Image />
        </DonutWrapper>
        <Box>
          <KDAWrap>
            {(totalKDA.k / totalGames).toFixed(1)}
            <Divide>/</Divide>
            <span style={{ color: '#c6443e' }}>{(totalKDA.d / totalGames).toFixed(1)}</span>
            <Divide>/</Divide>
            {(totalKDA.a / totalGames).toFixed(1)}
          </KDAWrap>
          <RateWrap>
            <Score color={calScore(totalKDA.str / totalGames)}>
              {(totalKDA.str / totalGames).toFixed(2)}:1
            </Score>
            <WinRate overWin={calWinRate(win, lose) >= 60}>({calWinRate(win, lose)}%)</WinRate>
          </RateWrap>
        </Box>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 270px;
`;

const SummaryRow = styled.div`
  padding: 16px 0 14px 33px;
  line-height: 14px;
  font-size: 12px;
  color: #666;
`;

const Wrap = styled.div`
  display: flex;
  padding-bottom: 23px;
`;

const DonutWrapper = styled.div`
  padding-left: 24px;
  margin-right: 35px;
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  background-color: blue;
`;

const Box = styled.div`
  text-align: center;
`;

const KDAWrap = styled.div`
  padding-top: 18px;
  font-size: 11px;
  font-weight: bold;
  color: #333333;
`;

const Divide = styled.span`
  margin: 0 3px;
  color: #999999;
`;

const RateWrap = styled.div`
  margin-top: 6px;
  font-size: 16px;
  font-weight: bold;
`;

const Score = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

const WinRate = styled.span<{ overWin: boolean }>`
  margin-left: 5px;
  color: ${({ overWin }) => (overWin ? '#c6443e' : '#5e5e5e')};
`;
