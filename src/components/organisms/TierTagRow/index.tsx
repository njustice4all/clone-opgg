import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TierTag from 'components/atoms/TierTag';
import { RootState } from 'modules/rootState';

export default function TierTagRow() {
  const { isFetching, previousTiers } = useSelector((state: RootState) => state.summoner.result);

  return (
    <Container>
      {isFetching && <LoadingTag />}
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

const LoadingTag = styled.div`
  background-color: rgb(51 51 51 / 20%);
  width: 58px;
  height: 20px;
  border-radius: 2px;
`;
