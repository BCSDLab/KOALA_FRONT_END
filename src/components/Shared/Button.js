import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.darkgray};
  width: 368px;
  height: 48px;
  border: 0;
  margin-top: 32px;
  font-size: 16px;
  font-weight: 500;
  ouline: none;
  flex-grow: 0;
  color: white;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.silver};
  }
  :disabled,
  [disabled] {
    background: ${(props) => props.theme.colors.silver};
    cursor: default;
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 328px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
