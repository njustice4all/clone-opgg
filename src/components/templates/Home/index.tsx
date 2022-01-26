import React from 'react';
import styled from 'styled-components';

export default function HomeTemplate() {
  return (
    <Container>
      <Label src="https://opgg-static.akamaized.net/logo/20220121055153.66dd630976d24dcc9e77378fdf271684.png" />
      <Input />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5383e8;
`;

const Label = styled.img`
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 10px;
`;
