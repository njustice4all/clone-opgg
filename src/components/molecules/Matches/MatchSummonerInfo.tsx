import React from 'react';
import styled from 'styled-components';

import { General } from 'models';

interface IMatchSummonerInfo {
  level: number;
  general: General;
}

export default function MatchSummonerInfo({ level, general }: IMatchSummonerInfo) {
  return (
    <Container>
      <div>레벨{level}</div>
      <Row>
        {general.cs} ({general.csPerMin}) CS
      </Row>
      <Contribution>킬관여 {general.contributionForKillRate}</Contribution>
    </Container>
  );
}

const Container = styled.div`
  width: 90px;
  font-size: 11px;
  color: #555e5e;
  text-align: center;
`;

const Row = styled.div`
  margin: 6px 0;
`;

const Contribution = styled.div`
  color: #d0021b;
  font-weight: bold;
`;
