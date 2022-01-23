import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/organisms/Header';
import TierTagRow from 'components/organisms/TierTagRow';

export default function SummonerTemplate() {
  const { userName } = useParams();

  return (
    <Container>
      <Header />
      <TierTagRow />
      <h1>this is it - {userName}</h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eaeaea;
`;
