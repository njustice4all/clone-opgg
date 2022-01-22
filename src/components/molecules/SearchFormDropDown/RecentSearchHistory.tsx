import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconFavoriteOn from 'assets/images/icon-favorite-on.png';
import IconFavoriteOff from 'assets/images/icon-favorite-off.png';
import IconHistoryDelete from 'assets/images/icon-history-delete.png';
import { addCookie, deleteCookie, getCookie } from 'utils/cookieHelper';
import { _FAV, _HIST } from 'utils/constants';
import EmptySummoner from 'components/atoms/EmptySummoner';

interface IRecentSearchHistory {
  closeAll(): void;
}

export default function RecentSearchHistory({ closeAll }: IRecentSearchHistory) {
  const navigate = useNavigate();

  const onClickButtonFavorite = (userName: string, idx: number) => () => {
    const hasFavorite = getCookie(_FAV)
      .split('$')
      .some((favoriteUser) => favoriteUser === userName);
    if (hasFavorite) {
      deleteCookie(_FAV, idx);
    } else {
      addCookie(_FAV, userName);
    }

    closeAll();
  };

  const onClickButtonHistoryDelete = (userName: string, idx: number) => () => {
    deleteCookie(_HIST, idx);
    closeAll();
  };

  const onClickUserName = (userName: string) => () => {
    closeAll();
    navigate(`/summoner/${userName}`);
  };

  const userHistories = getCookie(_HIST).split('$');
  const favoriteUsers = getCookie(_FAV).split('$');

  return (
    <Container>
      {userHistories.every((user) => user === '') ? (
        <EmptySummoner>
          <div>최근에 본 소환사가 없습니다.</div>
        </EmptySummoner>
      ) : (
        userHistories.map((user, idx) => (
          <Row key={idx}>
            <UserName onClick={onClickUserName(user)}>{user}</UserName>
            <Favorite onClick={onClickButtonFavorite(user, idx)}>
              <img
                src={
                  favoriteUsers.some((favoriteUser) => favoriteUser === user)
                    ? IconFavoriteOn
                    : IconFavoriteOff
                }
                alt="소환사 즐겨찾기"
              />
            </Favorite>
            <HistoryDelete onClick={onClickButtonHistoryDelete(user, idx)}>
              <img src={IconHistoryDelete} alt="소환사 검색 내역 제거" />
            </HistoryDelete>
          </Row>
        ))
      )}
    </Container>
  );
}

const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 5px 20px 20px 0;
`;

const Row = styled.li`
  position: relative;
  color: #666;
  padding-left: 20px;
  margin-top: 15px;
  line-height: 15px;
  font-size: 12px;
`;

const UserName = styled.span`
  cursor: pointer;
`;

const Favorite = styled.span`
  position: absolute;
  right: 26px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const HistoryDelete = styled.span`
  position: absolute;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
