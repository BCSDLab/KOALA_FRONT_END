import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 368px;
  height: 48px;
  flex-grow: 0;
  color: white;
  margin-top: 32px;
  ouline: none;
  border: 0;
  background: black;
  &:hover {
    background: gray;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
