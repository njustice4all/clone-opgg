import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';

import { actionGetMostInfo } from 'modules/mostInfo/mostInfo.actions';
import { RootState } from 'modules/rootState';
import MostInfoWinRate from 'components/molecules/MostInfoWinRate';
import RecentWeek from 'components/molecules/MostInfoWinRate/RecentWeek';

export default function MostInfo() {
  const params = useParams<{ userName: string }>();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState<'champ' | 'recent'>('champ');
  const { isFetching, champions, recentWinRate } = useSelector(
    (state: RootState) => state.mostInfo
  );

  useEffect(() => {
    if (params.userName) {
      dispatch(actionGetMostInfo.request({ userName: params.userName }));
    }
  }, [dispatch, params.userName]);

  if (isFetching) {
    return <LoadingMostInfo>Loading...</LoadingMostInfo>;
  }

  return (
    <WidgetMostInfo>
      <WidgetHeader>
        <Tab active={currentTab === 'champ'} onClick={() => setCurrentTab('champ')}>
          챔피언 승률
        </Tab>
        <Tab active={currentTab === 'recent'} onClick={() => setCurrentTab('recent')}>
          7일간 랭크 승률
        </Tab>
      </WidgetHeader>
      {currentTab === 'champ'
        ? orderBy(champions, ['games'], ['desc']).map((champion, idx) => (
            <MostInfoWinRate key={idx} champion={champion} />
          ))
        : recentWinRate.map((winRate, idx) => <RecentWeek key={idx} winRate={winRate} />)}
    </WidgetMostInfo>
  );
}

const WidgetMostInfo = styled.div`
  margin-top: 8px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
`;

const WidgetHeader = styled.div`
  display: flex;
`;

const Tab = styled.div<{ active: boolean }>`
  width: 50%;
  text-align: center;
  padding: 15px 0;
  font-size: 12px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active }) => (active ? '#5e5e5e' : '#879292')};
  background-color: ${({ active }) => !active && '#f2f2f2'};
  border-bottom: ${({ active }) => !active && '1px solid #cdd2d2'};
  cursor: pointer;
  &:last-child {
    border-left: 1px solid #cdd2d2;
  }
`;

const LoadingMostInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-top: 8px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
`;
