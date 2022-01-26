import React from 'react';
import styled from 'styled-components';

import { calWinRate } from 'utils';

interface IProgressDonut {
  win: number;
  lose: number;
}

export default function ProgressDonut({ win, lose }: IProgressDonut) {
  const winRate = calWinRate(win, lose);
  const RADIUS = 37;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const progress = 100 - winRate / 100;
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <Container>
      <SVG>
        <circle
          className="bar"
          cx="45"
          cy="45"
          r="37"
          strokeWidth="14"
          fill="none"
          stroke="#ee5a52"
        />
        <circle
          className="frame"
          cx="45"
          cy="45"
          r="37"
          strokeWidth="14"
          fill="none"
          stroke="#1f8ecd"
          strokeDashoffset={dashOffset}
          strokeDasharray={CIRCUMFERENCE}
        />
      </SVG>
      <Rate>{winRate}%</Rate>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVG = styled.svg`
  width: 90px;
  height: 90px;
  transform: rotate(-90deg);
`;

const Rate = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #555;
`;
