import React from 'react';
import styled from 'styled-components';
import { calKDA } from 'utils';
import { KILL_STRING } from 'utils/constants';

interface IMatchResult {
  k: number;
  d: number;
  a: number;
  opScoreBadge: string;
  largestMultiKillString: string;
}

export default function MatchResult({
  k,
  d,
  a,
  opScoreBadge,
  largestMultiKillString,
}: IMatchResult) {
  const { str } = calKDA(k, d, a);
  const isShowTags = opScoreBadge !== '' || largestMultiKillString !== '';

  return (
    <Container>
      <KDA>
        <Number>{k}</Number>
        <Divide>/</Divide>
        <Number isDeath>{d}</Number>
        <Divide>/</Divide>
        <Number>{a}</Number>
      </KDA>
      <KDARatio>
        <Ratio>{str}</Ratio>
        <RatioLabel>평점</RatioLabel>
      </KDARatio>
      {isShowTags && (
        <TagWrap>
          {largestMultiKillString !== '' && (
            <KillTag>{[KILL_STRING[largestMultiKillString]] || '트리플킬'}</KillTag>
          )}
          {opScoreBadge !== '' && <ScoreTag>{opScoreBadge}</ScoreTag>}
        </TagWrap>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KDA = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #948e8d;
`;

const Number = styled.span<{ isDeath?: boolean }>`
  color: ${({ isDeath }) => (isDeath ? '#d0021b' : '#555e5e')};
`;

const Divide = styled.span`
  margin: 0 3px;
`;

const KDARatio = styled.div`
  margin-top: 6px;
  font-weight: bold;
  font-size: 11px;
`;

const Ratio = styled.span`
  color: #333333;
`;

const RatioLabel = styled.span`
  color: #555e5e;
  margin-left: 3px;
`;

const TagWrap = styled.div`
  margin-top: 7px;
  display: flex;
`;

const KillTag = styled.div`
  border: 1px solid #bf3b36;
  background-color: #ec4f48;
  border-radius: 9px;
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  margin-right: 4px;
`;

const ScoreTag = styled.div`
  border: 1px solid #7f3590;
  background-color: #8c51c5;
  border-radius: 9px;
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  margin-right: 4px;
`;
