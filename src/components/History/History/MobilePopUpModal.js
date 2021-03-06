import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
const {white, black, darkgray, lightgray, silver, gray, yellow} = theme.colors;


const Modal = styled.div`
  position: fixed;
  top: calc(100vh - 200px);
  left: 5%;
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  border-radius: 5px;
  background-color: rgba(34, 34, 34, 0.85);
  z-index: 99;
`;
const ModalText = styled.div`
  color: ${white};
`;
const UndoButton = styled.div`
  color: ${yellow};
`;

export const MobileDeleteModal = ({ undo }) => {
  return (
    <Modal>
      <ModalText>선택한 알람을 삭제하였습니다.</ModalText>
      <UndoButton onClick={undo}>실행취소</UndoButton>
    </Modal>
  );
};

export const MobileMoveScrapModal = ({ numberAlert, undo }) => {
  return (
    <Modal>
      <ModalText>{numberAlert}개의 알람을 이동하였습니다.</ModalText>
      <UndoButton onClick={undo}>실행취소</UndoButton>
    </Modal>
  );
};
