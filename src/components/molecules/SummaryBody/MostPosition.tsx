import React from 'react';
import styled from 'styled-components';

import { TAB } from 'components/organisms/Widget/SummaryGames';

interface IMostPosition {
  tab: TAB;
}

export default function MostPosition({ tab }: IMostPosition) {
  return (
    <Container>
      <div>MostPosition</div>
    </Container>
  );
}

const Container = styled.div``;
