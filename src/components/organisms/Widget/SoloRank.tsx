import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'modules/rootState';
import { calWinRate, numberWithComma } from 'utils';

export default function SoloRank() {
  const { isFetching, result } = useSelector((state: RootState) => state.summoner);

  const solo = result.leagues[0];

  if (isFetching || !solo) {
    return <Container>Loading</Container>;
  }

  const tierPosition = solo.tierRank.shortString;
  const totalGames = solo.wins + solo.losses;
  const tier = solo.tierRank.tier + ' ' + tierPosition[tierPosition.length - 1];

  return (
    <Container>
      <ImageWrapper>
        <Image src={solo.tierRank.imageUrl} />
      </ImageWrapper>
      <Info>
        <Label>솔로랭크</Label>
        <TotalGames>
          <span>탑</span> (총 {numberWithComma(totalGames)}게임)
        </TotalGames>
        <Tier>{tier}</Tier>
        <Point>
          {solo.tierRank.lp} LP
          <span>
            {' '}
            / {solo.wins}승 {solo.losses}패
          </span>
        </Point>
        <WinRate>승률 {calWinRate(solo.wins, solo.losses)}%</WinRate>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  height: 124px;
  padding: 10px 8px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  display: flex;
`;

const ImageWrapper = styled.div`
  margin-right: 8px;
`;

const Image = styled.img`
  width: 104px;
`;

const Info = styled.div`
  padding-top: 5px;
`;

const Label = styled.div`
  width: 41px;
  height: 13px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #879292;
`;

const TotalGames = styled.div`
  color: #353a3a;
  font-size: 12px;
  margin-top: 4px;
  span {
    font-weight: bold;
  }
`;

const Tier = styled.div`
  font-size: 15px;
  color: #1f8ecd;
  font-weight: bold;
  margin-top: 4px;
`;

const Point = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #555e5e;
  span {
    color: #879292;
    font-weight: normal;
  }
`;

const WinRate = styled.div`
  color: #879292;
  font-size: 12px;
  margin-top: 4px;
`;
