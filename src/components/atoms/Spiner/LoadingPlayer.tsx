import React from 'react';
import styled from 'styled-components';

export default function LoadingPlayer() {
  return (
    <Container>
      <div>Loading...</div>
    </Container>
  );
}

const Container = styled.div`
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
