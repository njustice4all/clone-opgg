import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import CardMatch from 'components/molecules/CardMatch';
import useFilteredGames from 'hooks/useFilteredGames';
import { actionGetItems } from 'modules/item/item.actions';

export default function Matches() {
  const dispatch = useDispatch();
  const games = useFilteredGames();

  useEffect(() => {
    dispatch(actionGetItems.request());
  }, [dispatch]);

  return (
    <Container>
      {games.map((game, idx) => (
        <CardMatch key={idx} {...game} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 16px;
`;
