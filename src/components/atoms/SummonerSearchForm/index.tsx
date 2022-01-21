import React, { MouseEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

import Http from '@http';

import SearchLogo from '../../../assets/images/00-icon-gg.svg';

export default function SummonerSearchForm() {
  const [userName, setUserName] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('search now');
      Http.instance.get(`/summoner/${userName}`).then((res) => {
        console.log(res.data);
      });
    }
  };

  const onClickButtonSummit = (e: MouseEvent) => {};

  return (
    <Form>
      <Input
        type="text"
        placeholder="소환사명, 챔피언, ..."
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <Button onClick={onClickButtonSummit}>
        <img src={SearchLogo} alt="소환사 검색 버튼" />
      </Button>
    </Form>
  );
}

const Form = styled.div`
  position: relative;
  width: 260px;
  height: 32px;
  padding: 7px 14px;
  border-radius: 2px;
  background-color: #fff;
`;

const Input = styled.input`
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

  img {
    width: 30px;
  }
`;
