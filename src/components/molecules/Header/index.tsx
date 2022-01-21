import React from 'react';
import styled from 'styled-components';

import SummonerSearchForm from 'components/atoms/SummonerSearchForm';

export default function Header() {
  return (
    <HeaderBlock>
      <SummonerSearchForm />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  background-color: #1ea1f7;
  height: 97px;
`;
