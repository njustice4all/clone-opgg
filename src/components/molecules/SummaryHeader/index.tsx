import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'modules/rootState';
import { actionUpdateUI } from 'modules/ui/ui.actions';

export default function SummaryHeader() {
  const dispatch = useDispatch();
  const { currentTab } = useSelector((state: RootState) => state.ui);

  const onClickTab = (value) => () => {
    if (currentTab !== value) {
      dispatch(actionUpdateUI({ key: 'currentTab', value }));
    }
  };

  return (
    <Container>
      <Tab active={currentTab === 'all'} onClick={onClickTab('all')}>
        전체
      </Tab>
      <Tab active={currentTab === 'solo'} onClick={onClickTab('solo')}>
        솔로게임
      </Tab>
      <Tab active={currentTab === 'free'} onClick={onClickTab('free')}>
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
