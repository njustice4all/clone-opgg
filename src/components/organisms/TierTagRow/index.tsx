import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TierTag from 'components/atoms/TierTag';
import { RootState } from 'modules/rootState';

export default function TierTagRow() {
  const { previousTiers } = useSelector((state: RootState) => state.summoner.result);

  return (
    <Container>
      {[...previousTiers].reverse().map(({ season, tierDivision }, idx) => (
        <TierTag key={idx} season={season} tierDivision={tierDivision} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 15px 0;
  padding-left: 35px;
`;
