import React from 'react';
import styled from 'styled-components';

import Header from 'components/organisms/Header';
import TierTagRow from 'components/organisms/TierTagRow';
import Profile from 'components/organisms/Profile';
import SoloRank from 'components/organisms/Widget/SoloRank';
import BodyLayout from 'components/organisms/BodyLayout';
import FreeRank from 'components/organisms/Widget/FreeRank';
import MostInfo from 'components/organisms/Widget/MostInfo';
import SummaryGames from 'components/organisms/Widget/SummaryGames';
import Matches from 'components/organisms/Widget/Matches';

export default function SummonerTemplate() {
  return (
    <Container>
      <Header />
      <TierTagRow />
      <Profile />
      <BodyLayout>
        <Left>
          <SoloRank />
          <FreeRank />
          <MostInfo />
        </Left>
        <Right>
          <SummaryGames />
          <Matches />
        </Right>
      </BodyLayout>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eaeaea;
  padding-bottom: 100px;
  min-height: 100vh;
`;

const Left = styled.div`
  width: 300px;
`;

const Right = styled.div`
  margin-left: 10px;
  width: 690px;
`;
