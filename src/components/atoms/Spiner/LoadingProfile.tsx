import React from 'react';
import styled from 'styled-components';

export default function LoadingProfile() {
  return (
    <Container>
      <Profile />
      <div>
        <Name />
        <Label />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Profile = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(51 51 51 / 20%);
  border-radius: 2px;
`;

const Name = styled.div`
  width: 100px;
  height: 24px;
  background-color: rgb(51 51 51 / 20%);
  margin-left: 20px;
  border-radius: 2px;
`;

const Label = styled.div`
  margin-top: 4px;
  width: 140px;
  height: 13px;
  background-color: rgb(51 51 51 / 20%);
  margin-left: 20px;
  border-radius: 2px;
`;
