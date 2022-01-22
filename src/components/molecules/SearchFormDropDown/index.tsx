import React, { useState } from 'react';
import styled from 'styled-components';

import RecentSearchHistory from './RecentSearchHistory';
import FavoriteSearch from './FavoriteSearch';

interface ISearchFormDropDown {
  closeAll(): void;
}

export default function SearchFormDropDown({ closeAll }: ISearchFormDropDown) {
  const [activeTab, setActiveTab] = useState('recent');

  const onClickTab = (tab: 'recent' | 'favorite') => () => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <TabHeader>
        <Tab active={activeTab === 'recent'} onClick={onClickTab('recent')}>
          최근검색
        </Tab>
        <Tab active={activeTab === 'favorite'} onClick={onClickTab('favorite')}>
          즐겨찾기
        </Tab>
      </TabHeader>
      {activeTab === 'recent' ? (
        <RecentSearchHistory closeAll={closeAll} />
      ) : (
        <FavoriteSearch closeAll={closeAll} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 260px;
  background: red;
  margin-left: -14px;
  margin-top: 12px;
  border-radius: 2px;
  z-index: 10000;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
`;

const TabHeader = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const Tab = styled.li<{ active: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: ${({ active }) => (active ? '#fff' : '#e3e3e3')};
  color: ${({ active }) => (active ? '#4a4a4a' : '#9c9c9c')};
  font-size: 14px;
  cursor: pointer;
`;
