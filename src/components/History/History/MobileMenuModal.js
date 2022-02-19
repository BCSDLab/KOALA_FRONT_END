import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
const {white, black, darkgray, lightgray, silver, gray, yellow} = theme.colors.white;

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
  color: ${gray};
  background-color: white;
`;
const ModalMenu = styled.div`
  display: flex;
  width: 98px;
  color: ${(props) => (props.isToggle ? darkgray : gray)};
  svg {
    width: 16px;
    height: 16px;
    margin: 0 8px 0 0;
  }
  path {
    stroke: ${(props) => (props.isToggle ? darkgray : gray)};
  }
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
const NotReadMail = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 5.333 7.26 8.84a1.333 1.333 0 0 0 1.48 0L14 5.333M3.333 12.666h9.334A1.333 1.333 0 0 0 14 11.333V4.666a1.334 1.334 0 0 0-1.333-1.333H3.333A1.333 1.333 0 0 0 2 4.666v6.667a1.333 1.333 0 0 0 1.333 1.333z"
        stroke="#999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const ReadMail = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 12.667V6.714a1.333 1.333 0 0 1 .593-1.11l4.667-3.11a1.333 1.333 0 0 1 1.48 0l4.667 3.11A1.334 1.334 0 0 1 14 6.714v5.953m-12 0A1.333 1.333 0 0 0 3.333 14h9.334A1.334 1.334 0 0 0 14 12.667m-12 0 4.5-3m7.5 3-4.5-3m-3 0-4.5-3m4.5 3 .76.507a1.333 1.333 0 0 0 1.48 0l.76-.507m0 0 4.5-3"
        stroke="#999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const MobileMenuModal = ({ isOpen, showRead, showNotRead, command }) => {
  return (
    <>
      {isOpen ? (
        <Modal>
          <ModalMenu onClick={showNotRead} isToggle={command === 'notRead' ? 1 : 0}>
            <NotReadMail />
            <ModalMenuName>읽지 않은 알림</ModalMenuName>
          </ModalMenu>
          <ModalMenu onClick={showRead} isToggle={command === 'read' ? 1 : 0}>
            <ReadMail />
            <ModalMenuName>읽은 알림</ModalMenuName>
          </ModalMenu>
        </Modal>
      ) : null}
    </>
  );
};

export default MobileMenuModal;
