import React from 'react';
import styled from 'styled-components';

const CheckDotLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckDot = styled.input`
  display: none;
`;

const CustomCheckDot = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-right: 20px;
  border: 1px solid black;
`;

const CircleCheckBox = (props) => (
  <CheckDotLabel>
    <CheckDot type="checkbox" {...props} />
    <CustomCheckDot />
  </CheckDotLabel>
);

export default CircleCheckBox;
