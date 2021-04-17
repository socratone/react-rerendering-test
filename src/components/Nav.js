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
  console.log('Nav 컴포넌트 호출');
  
  return (
    <Container>
      <List>{children}</List>
    </Container>
  );
};

export default Nav;
