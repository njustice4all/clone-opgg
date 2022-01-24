import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { MouseEvent, KeyboardEvent, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import SearchLogo from '../../../assets/images/00-icon-gg.svg';
import SearchFormDropDown from '../SearchFormDropDown';
import { addCookie } from 'utils/cookieHelper';
import { _HIST } from 'utils/constants';
import {
  actionClickSummoner,
  actionGetSummoner,
  actionGetSummonerSuggest,
} from 'modules/summoner/summoner.actions';
import SummonerAutoComplete from '../SearchFormDropDown/SummonerAutoComplete';
import useOnClickOutside from 'hooks/useOnClickOutside';

export default function SummonerSearchForm() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams<{ userName: string }>();
  const [userName, setUserName] = useState('');
  const [visibleDropDown, setVisibleDropDown] = useState({ recent: false, auto: false });
  useOnClickOutside(ref, () => setVisibleDropDown({ recent: false, auto: false }));

  useEffect(() => {
    if (params.userName) {
      addCookie(_HIST, params.userName);
      dispatch(actionGetSummoner.request({ userName: params.userName }));
    }
  }, [params, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleDropDown((dropDown) => ({ ...dropDown, auto: true }));
    setUserName(e.target.value);
    dispatch(actionGetSummonerSuggest.request({ userName: e.target.value }));
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && userName !== '') {
      submit();
    }
  };

  const onClickInput = () => {
    setVisibleDropDown((dropDown) => ({ ...dropDown, recent: true }));
  };

  const onClickButtonSummit = (e: MouseEvent) => {
    if (userName !== '') {
      submit();
    }
  };

  const submit = () => {
    addCookie(_HIST, userName);
    setUserName('');
    setVisibleDropDown({ recent: false, auto: false });
    dispatch(actionClickSummoner(userName));
    navigate(`/summoner/${userName}`);
  };

  const isShowAutoComplete = visibleDropDown.auto && userName !== '';
  const isShowDropDown = visibleDropDown.recent && userName === '';

  return (
    <Form ref={ref}>
      <Input
        type="text"
        placeholder="소환사명, 챔피언, ..."
        onChange={onChange}
        onKeyUp={onKeyUp}
        onClick={onClickInput}
        value={userName}
        onFocus={() => setVisibleDropDown((dropDown) => ({ ...dropDown, auto: true }))}
      />
      <Button onClick={onClickButtonSummit}>
        <img src={SearchLogo} alt="소환사 검색" />
      </Button>
      {isShowAutoComplete && <SummonerAutoComplete submit={submit} userName={userName} />}
      {isShowDropDown && (
        <SearchFormDropDown closeAll={() => setVisibleDropDown({ recent: false, auto: false })} />
      )}
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
  cursor: pointer;

  img {
    width: 30px;
  }
`;
