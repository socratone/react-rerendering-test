import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  padding: 20px;
  border-bottom: solid 1px gainsboro;
`;

const List = styled.ul`
  display: flex;

  & li {
    margin-right: 20px;
  }

  & li:last-child {
    margin-right: 0;
  }
`;

const Nav = ({ children }) => {
  return (
    <Container>
      <List>{children}</List>
    </Container>
  );
};

export default Nav;
