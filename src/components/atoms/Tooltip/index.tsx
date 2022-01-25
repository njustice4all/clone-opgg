import React from 'react';
import styled from 'styled-components';

interface ITooptip {
  x: number;
  y: number;
  width: number;
  description: string;
  name: string;
  plaintext: string;
  gold: number;
}

export default function Tooltip({ x, y, width, description, name, plaintext, gold }: ITooptip) {
  const left = x + width / 2;
  const top = y + window.scrollY;

  return (
    <Container left={left} top={top}>
      <Inner>
        <Name>{name}</Name>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <Gold>가격: {gold}</Gold>
      </Inner>
      <Box />
    </Container>
  );
}

const Container = styled.div<{ left: number; top: number }>`
  position: absolute;
  width: 300px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  transform: translate(-150px, -100%);
  padding-bottom: 16px;
`;

const Inner = styled.div`
  padding: 10px;
  font-size: 11px;
  color: #fff;
  background-color: #222727;
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 16px;
  height: 16px;
  background-color: #222727;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const Name = styled.div`
  color: #00cfbc;
  margin-bottom: 5px;
`;

const Gold = styled.div`
  color: #ffc659;
  margin-top: 15px;
`;
