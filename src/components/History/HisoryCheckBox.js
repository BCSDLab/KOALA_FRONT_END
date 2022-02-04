import React from 'react';
import styled from 'styled-components';
const CheckDotLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
`;

const CheckDot = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const CustomCheckDot = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 3px;
  margin-right: 20px;
  border: solid 1px #c4c4c4;
  ${CheckDot}:checked + & {
    background: url('/asset/Check.svg');
    background-position: center;
  }
`;

const HistoryCheckBox = ({ checked, ...props }) => (
  <CheckDotLabel>
    <CheckDot type="checkbox" checked={checked} {...props} />
    <CustomCheckDot checked={checked}></CustomCheckDot>
  </CheckDotLabel>
);

export default HistoryCheckBox;
