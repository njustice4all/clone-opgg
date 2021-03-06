import React from 'react';
import styled from 'styled-components';

import { calScore, toFixed } from 'utils';
import useFilteredGames from 'hooks/useFilteredGames';
import ProgressDonut from 'components/atoms/ProgressDonut';

export default function Donut() {
  const games = useFilteredGames();

  const totalGames = games.length;
  const win = games.filter((game) => game.isWin).length;
  const lose = totalGames - win;
  let contribute = 0;

  const totalKDA = games.reduce<{ k: number; d: number; a: number; str: number }>(
    (acc, game) => {
      contribute += Number(game.stats.general.contributionForKillRate.split('%')[0]);
      acc['k'] = acc['k'] + game.stats.general.kill;
      acc['d'] = acc['d'] + game.stats.general.death;
      acc['a'] = acc['a'] + game.stats.general.assist;
      acc['str'] = acc['str'] + Number(game.stats.general.kdaString.split(':')[0]);
      return acc;
    },
    { k: 0, d: 0, a: 0, str: 0 }
  );

  const killContribute = Math.round(contribute / totalGames);

  return (
    <Container>
      <SummaryRow>
        {totalGames}전 {win}승 {lose}패
      </SummaryRow>
      <Wrap>
        <DonutWrapper>
          <ProgressDonut win={win} lose={lose} />
        </DonutWrapper>
        <Box>
          <KDAWrap>
            {toFixed(totalKDA.k / totalGames, 1)}
            <Divide>/</Divide>
            <span style={{ color: '#c6443e' }}>{toFixed(totalKDA.d / totalGames, 1)}</span>
            <Divide>/</Divide>
            {toFixed(totalKDA.a / totalGames, 1)}
          </KDAWrap>
          <RateWrap>
            <Score color={calScore(totalKDA.str / totalGames)}>
              {toFixed(totalKDA.str / totalGames, 2)}:1
            </Score>
            <WinRate overWin>({killContribute}%)</WinRate>
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
