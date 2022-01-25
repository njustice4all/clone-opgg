import React from 'react';
import styled from 'styled-components';

interface IMatchSpell {
  imageUrl: string;
  spells: { imageUrl: string }[];
  peak: string[];
}

export default function MatchSpell({ imageUrl, spells, peak }: IMatchSpell) {
  const file = imageUrl.split('/')[imageUrl.split('/').length - 1];
  const name = file.split('.')[0] || '';

  return (
    <Container>
      <Wrap>
        <Image src={imageUrl} alt="챔피언" />
        <SpellWrap>
          {spells.map((spell, idx) => (
            <Spell key={idx} src={spell.imageUrl} alt="스펠" />
          ))}
        </SpellWrap>
        <PeakWrap>
          {peak.map((p, idx) => (
            <Peak key={idx} src={p} alt="소환사 주문" />
          ))}
        </PeakWrap>
      </Wrap>
      <Name>{name}</Name>
    </Container>
  );
}

const Container = styled.div`
  width: 100px;
`;

const Wrap = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 46px;
  border-radius: 25px;
`;

const SpellWrap = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;
`;

const Spell = styled.img`
  width: 22px;
  margin-bottom: 2px;
  &:last-child {
    margin: 0;
  }
`;

const PeakWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
`;

const Peak = styled.img`
  width: 22px;
  border-radius: 25px;
  margin-bottom: 2px;
  &:last-child {
    margin: 0;
  }
`;

const Name = styled.div`
  text-align: center;
  font-size: 11px;
  color: #555;
  margin-top: 9px;
`;
