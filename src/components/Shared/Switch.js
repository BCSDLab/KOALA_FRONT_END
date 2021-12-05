import React from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 22px;
  height: 12px;
  border-radius: 50px;
  background-color: #eee;
  cursor: pointer;
  vertical-align: middle;
  align-items: center;
`;

const SwitchCheckBox = styled.input`
  display: none;
`;
const Ball = styled.div`
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  top: 1px;
  left: 1px;
  transition: transform 0.2s linear;
  background-color: #ffd25d;
  ${SwitchCheckBox}:checked +& {
    transform: translateX(10px);
  }
`;

const Switch = ({ checked, ...props }) => {
  return (
    <SwitchLabel checked={checked}>
      <SwitchCheckBox type="checkbox" checked={checked} {...props} />
      <Ball />
    </SwitchLabel>
  );
};

export default Switch;
