import React from 'react';
import styled from 'styled-components';

interface IBodyLayout {
  children?: React.ReactNode;
}

export default function BodyLayout({ children }: IBodyLayout) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
`;
