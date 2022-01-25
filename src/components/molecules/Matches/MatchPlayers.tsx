import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { RootState } from 'modules/rootState';
import LoadingPlayer from 'components/atoms/Spiner/LoadingPlayer';

interface IMatchPlayers {
  gameId: string;
}

export default function MatchPlayers({ gameId }: IMatchPlayers) {
  const { userName } = useParams<{ userName: string }>();
  const matches = useSelector((state: RootState) => state.matchDetail);

  if (!matches[gameId]) {
    return <LoadingPlayer />;
  }

  return (
    <Container>
      {matches[gameId].teams.map((team, idx) => (
        <TeamWrap key={idx}>
          {team.players.map((player, i) => (
            <Row key={i}>
              <Image src={player.champion.imageUrl} alt="챔피언" />
              <Name isMe={userName === player.summonerName}>{player.summonerName}</Name>
            </Row>
          ))}
        </TeamWrap>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 170px;
  display: flex;
`;

const TeamWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 0;
`;

const Row = styled.div`
  display: flex;
  font-size: 11px;
  color: #555555;
  align-items: center;
`;

const Image = styled.img`
  width: 16px;
`;

const Name = styled.div<{ isMe?: boolean }>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
  color: ${({ isMe }) => isMe && '#000'};
  margin-left: 3px;
  padding-right: 3px;
`;
