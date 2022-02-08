import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: flex;
  z-index: 99;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 17%;
  right: 5%;
  width: 98px;
  height: 44px;
  padding: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  font-size: 12px;
  color: #999;
  background-color: white;
`;
const ModalMenu = styled.div`
  display: flex;
  width: 98px;
`;
const ModalMenuName = styled.span`
  display: flex;
  align-items: center;
`;
const ModalMenuImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
`;
const MobileModal = ({ isOpen, showRead, showNotRead }) => {
  return (
    <>
      {isOpen ? (
        <Modal>
          <ModalMenu onClick={showNotRead}>
            <ModalMenuImage src="/asset/NotReadMail.svg" />
            <ModalMenuName>읽지 않은 알림</ModalMenuName>
          </ModalMenu>
          <ModalMenu onClick={showRead}>
            <ModalMenuImage src="/asset/ReadMail.svg" />
            <ModalMenuName>읽은 알림</ModalMenuName>
          </ModalMenu>
        </Modal>
      ) : null}
    </>
  );
};

export default MobileModal;
