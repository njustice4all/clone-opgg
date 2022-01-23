import React from 'react';
import styled from 'styled-components';

interface ITierTag {
  season: number;
  tierDivision: string;
}

export default function TierTag({ season, tierDivision }: ITierTag) {
  return (
    <Tag>
      <Season>S{season}</Season> {tierDivision}
    </Tag>
  );
}

const Tag = styled.div`
  display: inline-block;
  height: 20px;
  margin: 0 7px 0 0;
  padding: 4px 5px 3px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  font-family: Helvetica, 'Malgun Gothic', 'Apple SD Gothic Neo', AppleGothic, Dotum, Arial, Tahoma;
  font-size: 11px;
  color: #657070;
  margin-right: 12px;
`;

const Season = styled.span`
  font-weight: bold;
`;
