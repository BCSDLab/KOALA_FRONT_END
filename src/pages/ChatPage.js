import React from 'react';
import { useSelector } from 'react-redux';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const ChatPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen);
  return (
    <ChatPageContainer>
      <SideNavbar></SideNavbar>
      <LoginButton />
      <ChatMainPageContainer isToggle={toggle}>
        <ChatHeader />
        <ChatContent />
      </ChatMainPageContainer>
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ChatMainPageContainer = styled.div`
  width: 1570px;
  display: flex;
  left: ${({ isToggle }) => (isToggle ? `0px;` : `-270px;`)};
  flex-direction: column;
  position: relative;
`;
const ChatHeader = styled.div`
  width: ${({ isToggle }) => (isToggle ? `1570px;` : `1840px;`)};
  height: 248px;
  display: flex;
  z-index: 0;
  background-color: #eee;
`;

const ChatContent = styled(Outlet)``;
export default ChatPage;
