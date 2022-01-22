import React from 'react';
import styled from 'styled-components';

export default function EmptyHistory() {
  return (
    <Container>
      <Icon
        src="https://opgg-static.akamaized.net/images/site/icon-history-info@2x.png"
        alt="최근에 본 소환사가 없습니다."
      />
      <div>최근에 본 소환사가 없습니다.</div>
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
