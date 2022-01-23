import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/organisms/Header';
import TierTagRow from 'components/organisms/TierTagRow';
import Profile from 'components/organisms/Profile';

export default function SummonerTemplate() {
  const { userName } = useParams();

  return (
    <Container>
      <Header />
      <TierTagRow />
      <Profile />
    </Container>
  );
}

const Container = styled.div`
  background-color: #eaeaea;
`;
