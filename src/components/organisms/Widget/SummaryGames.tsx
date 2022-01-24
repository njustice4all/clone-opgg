import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { RootState } from 'modules/rootState';
import { actionGetMatches } from 'modules/matches/matches.actions';
import Donut from 'components/molecules/SummaryBody/Donut';
import MostChampion from 'components/molecules/SummaryBody/MostChampion';
import MostPosition from 'components/molecules/SummaryBody/MostPosition';
import SummaryHeader from 'components/molecules/SummaryHeader';

export type TAB = 'all' | 'solo' | 'free';

export default function SummaryGames() {
  const dispatch = useDispatch();
  const params = useParams<{ userName: string }>();
  const [tab, setTab] = useState<TAB>('all');
  const { isFetching } = useSelector((state: RootState) => state.matches);

  useEffect(() => {
    if (params.userName) {
      dispatch(actionGetMatches.request({ userName: params.userName }));
    }
  }, [dispatch, params.userName]);

  return (
    <Container>
      <SummaryHeader tab={tab} onClickTab={setTab} />
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <BodyWrapper>
          <Donut tab={tab} />
          <MostChampion />
          <MostPosition />
        </BodyWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cdd2d2;
`;

const BodyWrapper = styled.div`
  display: flex;
  background-color: #ededed;
`;
