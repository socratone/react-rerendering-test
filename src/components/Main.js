import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  padding: 20px;
`;

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
