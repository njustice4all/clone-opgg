import React from 'react';
import styled from 'styled-components';
import { calKDA } from 'utils';

interface IRateKDA {
  kill: number;
  death: number;
  assist: number;
}

export default function RateKDA({ kill, death, assist }: IRateKDA) {
  const { str, color } = calKDA(kill, death, assist);
  return <Container color={color}>{str} 평점</Container>;
}

const Container = styled.div<{ color: string }>`
  font-size: 13px;
  color: ${({ color }) => color};
  font-weight: bold;
`;
