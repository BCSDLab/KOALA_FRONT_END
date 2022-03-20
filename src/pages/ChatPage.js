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
        <Header />

        <ChatContent />
      </ChatMainPageContainer>
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ChatMainPageContainer = styled.div`
  width: ${({ isToggle }) => (isToggle ? `calc(100vw - 350px);` : `calc(100vw - 80px);`)};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ChatContent = styled(Outlet)``;

export default ChatPage;
