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
  border-radius: 50%;
  margin-right: 20px;
  border: solid 1px ${(props) => props.theme.colors.silver};
  transition: all 150ms;
  ${CheckDot}:checked + & {
    border: solid 1px ${({ theme }) => theme.colors.yellow};
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

const CircleCheckBox = ({ checked, ...props }) => (
  <CheckDotLabel>
    <CheckDot type="checkbox" checked={checked} {...props} />
    <CustomCheckDot checked={checked}></CustomCheckDot>
  </CheckDotLabel>
);

export default CircleCheckBox;
