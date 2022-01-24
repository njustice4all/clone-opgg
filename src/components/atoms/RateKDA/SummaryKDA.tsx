import React from 'react';
import styled from 'styled-components';

import { calKDA } from 'utils';

interface ISummaryKDA {
  kill: number;
  death: number;
  assist: number;
}

export default function SummaryKDA({ kill, death, assist }: ISummaryKDA) {
  const { str, color } = calKDA(kill, death, assist);
  return <Container color={color}>{str} 평점</Container>;
}

const Container = styled.span<{ color: string }>`
  font-size: 11px;
  color: ${({ color }) => color};
  font-weight: bold;
`;
