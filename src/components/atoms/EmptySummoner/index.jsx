import React from 'react';
import styled from 'styled-components';

interface IEmptySummoner {
  children?: React.ReactNode;
}

export default function EmptySummoner({ children }: IEmptySummoner) {
  return (
    <Container>
      <Icon
        src="https://opgg-static.akamaized.net/images/site/icon-history-info@2x.png"
        alt="소환사가 없습니다."
      />
      <div>{children}</div>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 20px;
  text-align: center;
  font-size: 12px;
  color: #666;
`;

const Icon = styled.img`
  padding: 16px 0;
  width: 16px;
`;
