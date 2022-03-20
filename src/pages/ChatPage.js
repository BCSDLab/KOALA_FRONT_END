import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import Header from 'components/Chat/Header';
import { Outlet } from 'react-router';

import styled from 'styled-components';

const ChatPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen);

  return (
    <ChatPageContainer>
      <SideNavbar></SideNavbar>
      <LoginButton />
      <ChatMainPageContainer isToggle={toggle}>
        <ChatHeader>
          <Header />
        </ChatHeader>
        <ChatContent />
      </ChatMainPageContainer>
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ChatMainPageContainer = styled.div`
  width: ${({ isToggle }) => (isToggle ? `calc(100% - 350px);` : `calc(100% - 80px);`)};
  display: flex;
  left: ${({ isToggle }) => (isToggle ? `0px;` : `-270px;`)};
  flex-direction: column;
  position: relative;
`;
const ChatHeader = styled.div`
  width: 100%;
  height: 248px;
  display: flex;
  z-index: 0;
  background-color: #eee;
`;

const ChatContent = styled(Outlet)``;
export default ChatPage;
