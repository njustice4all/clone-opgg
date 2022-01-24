import React from 'react';
import styled from 'styled-components';

import CardMatch from 'components/molecules/CardMatch';
import useFilteredGames from 'hooks/useFilteredGames';

export default function Matches() {
  const games = useFilteredGames();
  console.log(games);

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
