import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Item = styled.li`
  color: grey;
  cursor: pointer;

  &:hover {
    color: black;
  }
`

const NavItem = ({ path, children }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return <Item onClick={handleClick}>{children}</Item>;
};

export default NavItem;
