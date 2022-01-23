import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/organisms/Header';
import TierTagRow from 'components/organisms/TierTagRow';
import Profile from 'components/organisms/Profile';
import SoloRank from 'components/organisms/Widget/SoloRank';

export default function SummonerTemplate() {
  const { userName } = useParams();

  return (
    <Container>
      <Header />
      <TierTagRow />
      <Profile />
      <Content>
        <SoloRank />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eaeaea;
  padding-bottom: 100px;
`;

const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
`;
