import React, { useState } from 'react';
import styled from 'styled-components';

import Donut from 'components/molecules/SummaryBody/Donut';
import MostChampion from 'components/molecules/SummaryBody/MostChampion';
import MostPosition from 'components/molecules/SummaryBody/MostPosition';
import SummaryHeader from 'components/molecules/SummaryHeader';

export default function SummaryGames() {
  const [tab, setTab] = useState<'all' | 'solo' | 'free'>('all');

  return (
    <Container>
      <SummaryHeader tab={tab} onClickTab={setTab} />
      <BodyWrapper>
        <Donut />
        <MostChampion />
        <MostPosition />
      </BodyWrapper>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cdd2d2;
`;

const BodyWrapper = styled.div`
  display: flex;
`;
