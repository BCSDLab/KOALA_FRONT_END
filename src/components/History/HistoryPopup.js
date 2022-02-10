import React, { useState } from 'react';
import styled from 'styled-components';

const PopUpWindow = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: relative;
  top: -143px;
  left: 325px;
  width: 265px;
  height: 110px;
  padding: 37px 0 0 30px;
  border: 1px solid #999;
  background: #fff;
  font-size: 14px;
`;
const TextArea = styled.span`
  display: block;
  margin: 16px 0 0 0;
  font-size: 12px;
`;

const CheckButton = styled.div`
  font-size: 12px;
  margin: 2px 0 0 218px;
  cursor: pointer;
`;

const PopUp = ({ isOpen, closePopUp }) => {
  return (
    <PopUpWindow isOpen={isOpen}>
      보관함 이동 완료
      <TextArea>
        선택한 알림이
        <br />
        보관함으로 이동 완료 되었습니다.
      </TextArea>
      <CheckButton onClick={closePopUp}>확인</CheckButton>
    </PopUpWindow>
  );
};

export default PopUp;