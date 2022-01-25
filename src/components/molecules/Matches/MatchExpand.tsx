import React from 'react';
import styled from 'styled-components';
import SpliteImage from 'assets/images/site.png';

interface IMatchExpand {
  isWin: boolean;
}

export default function MatchExpand({ isWin }: IMatchExpand) {
  return (
    <Container isWin={isWin}>
      <Arrow isWin={isWin} />
    </Container>
  );
}

const Container = styled.div<{ isWin: boolean }>`
  width: 30px;
  border: 1px solid ${({ isWin }) => (isWin ? '#549dc7' : '#c8817c')};
  background-color: ${({ isWin }) => (isWin ? '#7fb0e1' : '#e89c95')};
  padding: 12px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Arrow = styled.div<{ isWin: boolean }>`
  background-position: -127px ${({ isWin }) => (isWin ? '-3840' : '-3880')}px;
  width: 13px;
  height: 10px;
  background-image: url(${SpliteImage});
`;
