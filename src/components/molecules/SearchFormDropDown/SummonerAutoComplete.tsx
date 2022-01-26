import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'modules/rootState';

interface ISummonerAutoComplete {
  userName: string;
  submit(): void;
}

export default function SummonerAutoComplete({ userName, submit }: ISummonerAutoComplete) {
  const { resAutoComplete } = useSelector((state: RootState) => state.summoner);
  const { isFetching } = resAutoComplete;

  const onClickSummoner = () => {
    if (!isFetching) {
      submit();
    }
  };

  return (
    <Container>
      <Row onClick={onClickSummoner}>
        <Item>
          {isFetching ? (
            <EmptyImage />
          ) : (
            <Image src={resAutoComplete.profileImageUrl} alt={`${userName}의 프로필`} />
          )}
          <div>
            <Name>{userName}</Name>
            {isFetching ? (
              <Stats>Loading...</Stats>
            ) : (
              <Stats>
                {resAutoComplete.leagues[0]?.tierRank.tier}{' '}
                {resAutoComplete.leagues[0]?.tierRank.division} -{' '}
                {resAutoComplete.leagues[0]?.tierRank.lp}LP
              </Stats>
            )}
          </div>
        </Item>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 260px;
  margin-left: -14px;
  margin-top: 12px;
  border-radius: 2px;
  z-index: 10000;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  background-color: #fff;
  &:hover {
    background-color: #e3edef;
  }
`;

const Row = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const Item = styled.div`
  padding: 7px 17px;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 14px;
  border-radius: 25px;
`;

const EmptyImage = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 14px;
  border-radius: 25px;
  background-color: #333;
`;

const Name = styled.div`
  color: #d53f3f;
  margin-top: 2px;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 17px;
`;

const Stats = styled.div`
  margin-top: 2px;
  line-height: 14px;
  font-size: 12px;
  color: #666;
`;
