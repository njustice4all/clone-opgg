import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import orderBy from 'lodash/orderBy';

import { RootState } from 'modules/rootState';
import IconPosition from 'components/atoms/IconPosition';

export default function MostPosition() {
  const { positions } = useSelector((state: RootState) => state.matches);

  return (
    <Container>
      <Label>선호 포지션 (랭크)</Label>
      <IconWrapper>
        {orderBy(positions, ['games'], ['desc']).map((position, idx) => (
          <IconPosition key={idx} {...position} />
        ))}
      </IconWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  flex: 1;
`;

const Label = styled.div`
  font-size: 12px;
  color: #666666;
`;

const IconWrapper = styled.div``;
