import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
const {white, black, darkgray, lightgray, silver, gray, yellow} = theme.colors;
const tabletL = theme.deviceSizes.tabletL;
const mibileS = theme.deviceSizes.mobileS;
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
  width: 16px;
  height: 16px;
  border-radius: 3px;
  margin-right: 20px;
  border: solid 1px ${silver};
  ${CheckDot}:checked + & {
    background: url('/asset/Check.svg');
    background-position: center;
  }
  @media screen and (max-width: ${tabletL}) {
    margin-right: 8px;
  }
`;

const HistoryCheckBox = ({ checked, ...props }) => (
  <CheckDotLabel>
    <CheckDot type="checkbox" checked={checked} {...props} />
    <CustomCheckDot checked={checked}></CustomCheckDot>
  </CheckDotLabel>
);

export default HistoryCheckBox;
