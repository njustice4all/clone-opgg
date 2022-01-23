import React from 'react';
import styled from 'styled-components';

import ImageUnranked from 'assets/images/unranked@2x.png';

export default function FreeRank() {
  return (
    <Container>
      <Image src={ImageUnranked} alt="언랭크" />
      <Info>
        <Label>자유 5:5 랭크</Label>
        <Unranked>Unranked</Unranked>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  padding: 17px 28px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  display: flex;
  margin-top: 8px;
`;

const Image = styled.img`
  width: 64px;
  margin-right: 28px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #879292;
`;

const Label = styled.div`
  font-size: 11px;
`;

const Unranked = styled.div`
  margin-top: 2px;
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
`;
