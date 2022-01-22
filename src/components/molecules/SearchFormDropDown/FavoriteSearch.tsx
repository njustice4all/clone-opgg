import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconFavoriteOff from 'assets/images/icon-favorite-off.png';
import IconHistoryDelete from 'assets/images/icon-history-delete.png';
import { _FAV } from 'utils/constants';
import { deleteCookie, getCookie } from 'utils/cookieHelper';
import EmptySummoner from 'components/atoms/EmptySummoner';

interface IFavoriteSearch {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FavoriteSearch({ setShowDropDown }: IFavoriteSearch) {
  const navigate = useNavigate();

  const onClickUserName = (userName: string) => () => {
    setShowDropDown(false);
    navigate(`/summoner/${userName}`);
  };

  const onClickButtonHistoryDelete = (userName: string) => () => {
    deleteCookie(_FAV, userName);
    setShowDropDown(false);
  };

  const favoriteUsers = getCookie(_FAV).split('$');

  return (
    <Container>
      {favoriteUsers.every((user) => user === '') ? (
        <EmptySummoner>
          <div>
            관심있는 소환사에
            <Icon src={IconFavoriteOff} alt="소환사가 없습니다." />
            즐겨찾기를 하여 편리하게 정보를 받아보세요.
          </div>
        </EmptySummoner>
      ) : (
        favoriteUsers.map((user, idx) => (
          <Row key={idx}>
            <UserName onClick={onClickUserName(user)}>{user}</UserName>
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

const HistoryDelete = styled.span`
  position: absolute;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Icon = styled.img`
  vertical-align: sub;
  margin: 0 2px;
`;
