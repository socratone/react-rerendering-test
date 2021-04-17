import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  font-size: 1.2rem;
  background: palevioletred;
  padding: 12px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
