import Header from 'components/molecules/Header';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function SummonerTemplate() {
  const { userName } = useParams();

  return (
    <div>
      <Header />
      <h1>this is it - {userName}</h1>
    </div>
  );
}
