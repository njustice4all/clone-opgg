import React from 'react';
import styled from 'styled-components';

import { TAB } from 'components/organisms/Widget/SummaryGames';

interface IMostChampion {
  tab: TAB;
}

export default function MostChampion({ tab }: IMostChampion) {
  return (
    <Container>
      <div>MostChampion</div>
    </Container>
  );
}

const Container = styled.div``;
