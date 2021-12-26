import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 368px;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  flex-grow: 0;
  color: white;
  margin-top: 32px;
  ouline: none;
  border: 0;
  background: #222;

  &:hover {
    background: #c4c4c4;
  }

  :disabled,
  [disabled] {
    background: #c4c4c4;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
