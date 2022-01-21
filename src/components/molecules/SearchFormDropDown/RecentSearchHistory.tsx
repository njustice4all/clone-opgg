import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconFavoriteOn from 'assets/images/icon-favorite-on.png';
import IconFavoriteOff from 'assets/images/icon-favorite-off.png';
import IconHistoryDelete from 'assets/images/icon-history-delete.png';

interface IRecentSearchHistory {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: 최근에 본 소환사가 없습니다.
export default function RecentSearchHistory({ setShowDropDown }: IRecentSearchHistory) {
  const navigate = useNavigate();
  const onClickButtonFavorite = () => {
    console.log('즐겨찾기');
  };

  const onClickButtonHistoryDelete = (userName: string) => () => {
    console.log('히스토리 삭제');
  };

  const onClickUserName = (userName: string) => () => {
    setShowDropDown(false);
    navigate(`/summoner/${userName}`);
  };

  return (
    <Container>
      <Row>
        <UserName onClick={onClickUserName('인예지 어린이')}>인예지 어린이</UserName>
        <Favorite onClick={onClickButtonFavorite}>
          <img src={IconFavoriteOn} alt="소환사 즐겨찾기" />
        </Favorite>
        <HistoryDelete onClick={onClickButtonHistoryDelete('인예지 어린이')}>
          <img src={IconHistoryDelete} alt="소환사 검색 내역 제거" />
        </HistoryDelete>
      </Row>
      <Row>
        <UserName onClick={onClickUserName('강개즈님')}>강개즈님</UserName>
        <Favorite onClick={onClickButtonFavorite}>
          <img src={IconFavoriteOn} alt="소환사 즐겨찾기" />
        </Favorite>
        <HistoryDelete onClick={onClickButtonHistoryDelete('강개즈님')}>
          <img src={IconHistoryDelete} alt="소환사 검색 내역 제거" />
        </HistoryDelete>
      </Row>
      <Row>
        <UserName onClick={onClickUserName('동해물과백두산이')}>동해물과백두산이</UserName>
        <Favorite onClick={onClickButtonFavorite}>
          <img src={IconFavoriteOff} alt="소환사 즐겨찾기" />
        </Favorite>
        <HistoryDelete onClick={onClickButtonHistoryDelete('동해물과백두산이')}>
          <img src={IconHistoryDelete} alt="소환사 검색 내역 제거" />
        </HistoryDelete>
      </Row>
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
