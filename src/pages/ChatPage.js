import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import Header from 'components/Chat/Header';
import { Outlet } from 'react-router';
import { getChatList } from 'store/socket';
import styled from 'styled-components';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { headers } from 'api/logined';
import useDidMountEffect from 'hooks/useDidMountEffect';
const ChatPage = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.isOpen);
  const [member, setMember] = useState('');
  const chat = useSelector((state) => state.socket);
  let sockJS = null;
  let stompClient = null;

  useDidMountEffect(() => {
    sockJS = new SockJS(`https://api.stage.koala.im/ws?token=${chat.webToken}`);
    stompClient = Stomp.over(sockJS);
    stompClient.connect(headers, function (tick) {
      console.log('connect');
      console.log(tick);
      stompClient.subscribe(`/sub/room`, (tick) => {
        console.log(tick);
        if (tick.body.type == 'ACCESS') {
          setMember(tick.body.message);
        } else {
          dispatch(getChatList());
        }
      });
      stompClient.send(
        `/pub/chat/member`,
        headers,
        JSON.stringify({
          message: 'test',
          type: 'ACCESS',
        })
      );
    });
  }, [chat.webToken]);
  return (
    <ChatPageContainer>
      <SideNavbar></SideNavbar>
      <LoginButton />
      <ChatMainPageContainer isToggle={toggle}>
        <ChatHeader>
          <Header member={member} />
        </ChatHeader>
        <ChatContent stompClient={stompClient} />
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
  width: ${({ isToggle }) => (isToggle ? `calc(100% - 350px);` : `calc(100% - 80px);`)};
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
