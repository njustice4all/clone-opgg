import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconFavoriteOn from 'assets/images/icon-favorite-on.png';
import IconFavoriteOff from 'assets/images/icon-favorite-off.png';
import IconHistoryDelete from 'assets/images/icon-history-delete.png';
import { deleteCookie, getCookie } from 'utils/cookieHelper';
import EmptyHistory from 'components/atoms/EmptyHistory';
import { _HIST } from 'utils/constants';

interface IRecentSearchHistory {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RecentSearchHistory({ setShowDropDown }: IRecentSearchHistory) {
  const navigate = useNavigate();

  const onClickButtonFavorite = () => {
    console.log('즐겨찾기');
  };

  const onClickButtonHistoryDelete = (userName: string) => () => {
    deleteCookie(_HIST, userName);
    setShowDropDown(false);
  };

  const onClickUserName = (userName: string) => () => {
    setShowDropDown(false);
    navigate(`/summoner/${userName}`);
  };

  const userHistories = getCookie(_HIST).split('$');

  return (
    <Container>
      {userHistories.every((user) => user === '') ? (
        <EmptyHistory />
      ) : (
        userHistories.map((user, idx) => (
          <Row key={idx}>
            <UserName onClick={onClickUserName(user)}>{user}</UserName>
            <Favorite onClick={onClickButtonFavorite}>
              <img src={IconFavoriteOff} alt="소환사 즐겨찾기" />
            </Favorite>
            <HistoryDelete onClick={onClickButtonHistoryDelete(user)}>
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
