import React, { MouseEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import SearchLogo from 'assets/images/00-icon-gg.svg';

export default function HomeTemplate() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && userName.trim() !== '') {
      navigate(`/summoner/${userName}`);
    }
  };

  const onClickButtonSummit = (e: MouseEvent) => {
    if (userName.trim() !== '') {
      navigate(`/summoner/${userName}`);
    }
  };

  return (
    <Container>
      <Content>
        <Image src="https://opgg-static.akamaized.net/logo/20220121055153.66dd630976d24dcc9e77378fdf271684.png" />
        <Form>
          <Input onKeyUp={onKeyUp} onChange={onChange} value={userName} />
          <Button onClick={onClickButtonSummit}>
            <img src={SearchLogo} alt="소환사 검색" />
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5383e8;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-bottom: 30px;
`;

const Form = styled.div`
  position: relative;
  right: 0;
  bottom: 12px;
  padding: 7px 14px;
  border-radius: 2px;
  background-color: #fff;
`;

const Input = styled.input`
  font-family: 'AppleSDGothicNeo';
  width: 100%;
  border: none;
  background: none;
  font-size: 12px;
  line-height: 15px;
  color: #727272;
  outline: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  height: 32px;
  text-align: center;
  background: none;
  border: none;
  line-height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 30px;
  }
`;
