import React from 'react';
import styled from 'styled-components';

interface ISummaryHeader {
  tab: 'all' | 'solo' | 'free';
  onClickTab: React.Dispatch<React.SetStateAction<'all' | 'solo' | 'free'>>;
}

export default function SummaryHeader({ tab, onClickTab }: ISummaryHeader) {
  return (
    <Container>
      <Tab active={tab === 'all'} onClick={() => onClickTab('all')}>
        전체
      </Tab>
      <Tab active={tab === 'solo'} onClick={() => onClickTab('solo')}>
        솔로게임
      </Tab>
      <Tab active={tab === 'free'} onClick={() => onClickTab('free')}>
        자유랭크
      </Tab>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 16px;
  border-bottom: 1px solid #cdd2d2;
  background-color: #f2f2f2;
`;

const Tab = styled.div<{ active: boolean }>`
  font-size: 12px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#1f8ecd' : '#555555')};
  padding: 12px 0 10px;
  margin-right: 24px;
  border-bottom: ${({ active }) => active && '2px solid #1f8ecd'};
  cursor: pointer;
`;
