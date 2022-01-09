import React from 'react';
import styled from 'styled-components';

const CheckBoxLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 22px;
  height: 12px;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.gray};
  background-color: ${({ checked, ...props }) => (checked ? props.theme.colors.yellow : props.theme.colors.lightgray)};
  font-size: 12px;
  cursor: pointer;

  vertical-align: middle;
  align-items: center;
`;
const CheckBoxInput = styled.input`
  display: none;
`;
const CheckBoxBall = styled.i`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${({ isChecked, ...props }) =>
    isChecked ? props.theme.colors.lightgray : props.theme.colors.yellow};
  margin: 1px;
  position: absolute;

  transition: transform 0.2s;
  transform: ${({ isChecked }) => (isChecked ? 'translateX(10px)' : 'none')};
`;

const Switch = ({ autoLogin, setAutoLogin, ...props }) => {
  return (
    <CheckBoxLabel checked={autoLogin}>
      <CheckBoxInput type="checkbox" isChecked={autoLogin} onClick={() => setAutoLogin(!autoLogin)} />
      <CheckBoxBall isChecked={autoLogin} />
    </CheckBoxLabel>
  );
};

export default Switch;
