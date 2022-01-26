import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';

import WardBlue from 'assets/images/icon-ward-blue.svg';
import WardRed from 'assets/images/icon-ward-red.svg';
import IconBuildBlue from 'assets/images/icon-buildblue-p.png';
import IconBuildRed from 'assets/images/icon-buildred-p.png';
import { getItemArray } from 'utils';
import { RootState } from 'modules/rootState';
import Portal from '../../atoms/Portal';
import Tooltip from '../../atoms/Tooltip';

interface IMatchItems {
  isWin: boolean;
  items: { imageUrl: string }[];
  ward: {
    sightWardsBought: number;
    visionWardsBought: number;
  };
}

const initialState = {
  isOver: false,
  description: '',
  x: 0,
  y: 0,
  width: 0,
  name: '',
  plaintext: '',
  gold: 0,
};

export default function MatchItems({ isWin, items, ward }: IMatchItems) {
  const [tooltip, setTooltip] = useState(initialState);
  const itemData = useSelector((state: RootState) => state.item);
  const { visionWardsBought } = ward;
  const { newItems, wards } = getItemArray(items);

  const onMouseOver = (itemUrl: string) => (e) => {
    const { x, y, width } = e.target.getBoundingClientRect();

    const [itemNo] = itemUrl.split('/')[itemUrl.split('/').length - 1].split('.');
    if (itemData[itemNo]) {
      const { description, name, plaintext, gold } = itemData[itemNo];
      setTooltip({
        isOver: true,
        description,
        x,
        y,
        width,
        name,
        plaintext,
        gold: gold.base,
      });
    }
  };

  const onMouseOut = () => {
    setTooltip(initialState);
  };

  return (
    <Container>
      <ItemWrap>
        {tooltip.isOver && (
          <Portal>
            <Tooltip {...tooltip} />
          </Portal>
        )}
        <IconWrap>
          {newItems.map((item, idx) => {
            if (item === 'empty') {
              return <Empty key={idx} isWin={isWin} />;
            }
            return (
              <Icon
                key={idx}
                src={item.imageUrl}
                alt="아이템"
                onMouseOver={onMouseOver(item.imageUrl)}
                onMouseOut={onMouseOut}
              />
            );
          })}
        </IconWrap>
        <SpecialItemWrap>
          <Icon
            src={wards.imageUrl}
            onMouseOver={onMouseOver(wards.imageUrl)}
            onMouseOut={onMouseOut}
          />
          <Icon style={{ marginTop: '2px' }} src={isWin ? IconBuildBlue : IconBuildRed} />
        </SpecialItemWrap>
      </ItemWrap>
      <Ward>
        <img src={isWin ? WardBlue : WardRed} alt="와드" />
        <span>제어와드 {visionWardsBought}</span>
      </Ward>
    </Container>
  );
}

const Container = styled.div``;

const ItemWrap = styled.div`
  display: flex;
`;

const IconWrap = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 2px;
`;

const SpecialItemWrap = styled.div`
  margin-left: 2px;
  display: flex;
  flex-direction: column;
`;

const Empty = styled.div<{ isWin?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background-color: ${({ isWin }) => (isWin ? '#7aa5c3' : '#cb9e9a')};
`;

const Ward = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  img {
    width: 16px;
  }
  span {
    margin-left: 4px;
    font-size: 11px;
    color: #000;
  }
`;
