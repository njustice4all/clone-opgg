import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'modules/rootState';
import LevelBox from 'assets/images/bg-levelbox.png';
import { numberWithComma } from 'utils';
import LoadingProfile from 'components/atoms/Spiner/LoadingProfile';

export default function Profile() {
  const { isFetching } = useSelector((state: RootState) => state.summoner.result);
  const { name, level, ladderRank, profileImageUrl, profileBorderImageUrl } = useSelector(
    (state: RootState) => state.summoner.result
  );

  return (
    <Container>
      {isFetching ? (
        <LoadingProfile />
      ) : (
        <>
          <ImageWrapper>
            <ProfileImage src={profileImageUrl} alt="프로필 이미지" />
            <BorderImage src={profileBorderImageUrl} alt="프로필 보더 이미지" />
            <Level>{level}</Level>
          </ImageWrapper>
          <ProfileRow>
            <Name>{name}</Name>
            <Stats>
              레더 랭킹 <Position>{numberWithComma(ladderRank.rank)}</Position>위 (상위{' '}
              {ladderRank.rankPercentOfTop}%)
            </Stats>
          </ProfileRow>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-left: 30px;
  display: flex;
  padding-bottom: 30px;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-right: 50px;
`;

const BorderImage = styled.img`
  position: absolute;
  left: 0;
`;

const Level = styled.span`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-13px, -3px);
  width: 44px;
  height: 24px;
  padding-top: 3px;
  box-sizing: border-box;
  background: url(${LevelBox});
  background-size: 100%;
  line-height: 17px;
  font-family: Helvetica;
  font-size: 14px;
  text-align: center;
  color: #eabd56;
`;

const ProfileImage = styled.img`
  width: 100px;
  transform: translate(10px, 10px);
`;

const ProfileRow = styled.div`
  padding: 10px 0;
`;

const Name = styled.div`
  font-size: 20px;
  color: #242929;
  font-weight: bold;
`;

const Stats = styled.div`
  margin-top: 4px;
  font-size: 11px;
  color: #657070;
`;

const Position = styled.span`
  font-weight: bold;
`;
