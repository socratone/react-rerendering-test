import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  font-size: 1.5em;
  text-align: center;
  margin: 20px;
`;

const Main = ({ children }) => {
  console.log('Main 컴포넌트 호출');

  return <Container>{children}</Container>;
};

export default Main;
