import React from 'react';
import styled from 'styled-components';

import SummonerSearchForm from 'components/molecules/SummonerSearchForm';

export default function Header() {
  return (
    <HeaderBlock>
      <Inner>
        <SummonerSearchForm />
      </Inner>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  background-color: #1ea1f7;
  height: 97px;
`;

const Inner = styled.div`
  width: 1000px;
  position: relative;
  height: 100%;
  margin: 0 auto;
`;
