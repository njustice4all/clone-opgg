import React, { MouseEvent, KeyboardEvent, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Http from '@http';
import SearchLogo from '../../../assets/images/00-icon-gg.svg';
import SearchFormDropDown from '../SearchFormDropDown';
import useClickOutside from 'hooks/useClickOutside';

export default function SummonerSearchForm() {
  const ref = useRef(null);
  const [userName, setUserName] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const isClickOutside = useClickOutside(ref);

  useEffect(() => {
    if (isClickOutside) {
      setShowDropDown(false);
    }
  }, [isClickOutside]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: SearchFormDropDown에 props로 display block상태 전달
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

  const onClickInput = () => {
    setShowDropDown(true);
  };

  const onClickButtonSummit = (e: MouseEvent) => {};

  return (
    <Form ref={ref}>
      <Input
        type="text"
        placeholder="소환사명, 챔피언, ..."
        onChange={onChange}
        onKeyUp={onKeyUp}
        onClick={onClickInput}
      />
      <Button onClick={onClickButtonSummit}>
        <img src={SearchLogo} alt="소환사 검색" />
      </Button>
      {showDropDown && <SearchFormDropDown setShowDropDown={setShowDropDown} />}
    </Form>
  );
}

const Form = styled.div`
  position: absolute;
  right: 0;
  bottom: 12px;
  width: 260px;
  height: 32px;
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

  img {
    width: 30px;
  }
`;
