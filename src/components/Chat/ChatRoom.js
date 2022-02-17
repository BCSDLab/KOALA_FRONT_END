import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWebToken } from 'store/socket';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { getChatList, getChatMember } from 'store/socket';
import { headers } from 'api/logined';
import useDidMountEffect from 'hooks/useDidMountEffect';
import styled from 'styled-components';

export const ChatRoom = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const messages = useSelector((state) => state.socket.messages);
  const [message, setMessage] = useState('');
  const messageInput = useRef();
  const chat = useSelector((state) => state.socket);
  const sockJS = useRef(null);
  const stompClient = useRef(null);
  let messageObject = null;
  const onChangeMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    stompClient.current.send(
      '/pub/chat/message',
      headers,
      JSON.stringify({
        message: message,
        type: 'CHAT',
      })
    );
    setMessage('');
  };

  useEffect(() => {
    dispatch(getWebToken());
  }, [user.isLoggedIn]);

  useDidMountEffect(() => {
    sockJS.current = new SockJS(`https://api.stage.koala.im/ws?token=${chat.webToken}`);
    stompClient.current = Stomp.over(sockJS.current);
    stompClient.current.connect(headers, function (tick) {
      console.log('connect');
      console.log(tick);
      stompClient.current.subscribe(`/sub/room`, (tick) => {
        messageObject = JSON.parse(tick.body);
        if (messageObject.type === 'ACCESS') {
          dispatch(getChatMember(messageObject.message));
        } else {
          dispatch(getChatList());
        }
        dispatch(getChatList());
      });
      stompClient.current.send(
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
    <ChatSection>
      <Conversation>
        {messages.map(function (obj) {
          return (
            <ChattingList key={obj.id}>
              <UserImg src={obj.profile} alt="프로필" />
              <ChatInfo>
                <User>
                  <UserNickName>{obj.nickname}</UserNickName>
                  <UserSetTime>{obj.sent_at}</UserSetTime>
                </User>
                <UserText>{obj.message}</UserText>
              </ChatInfo>
            </ChattingList>
          );
        })}
      </Conversation>
      <MessageContainer>
        <MessageForm onSubmit={sendMessage}>
          <MessageTextarea
            ref={messageInput}
            value={message}
            onChange={onChangeMessage}
            placeholder="메세지를 입력해주세요"
          />
          <MessageOption>
            <OptionWrapper>
              "이미지 전송하기"
              <OptionImage src="/asset/chat-img.svg"></OptionImage>
              <OptionButton type="file" multiple></OptionButton>
            </OptionWrapper>
            <OptionWrapper>
              "폰트스타일 변경"
              <OptionImage src="/asset/chat-textOption.svg"></OptionImage>
              <OptionButton type="button" />
            </OptionWrapper>
          </MessageOption>
          <SendButton>전송</SendButton>
        </MessageForm>
      </MessageContainer>
    </ChatSection>
  );
};
export default ChatRoom;
const ChatSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 248px);
`;

const Conversation = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const ChattingList = styled.div`
  width: calc(100% - 191px);
  display: flex;
  margin-bottom: 40px;
  justify-content: flex-start;
  align-items: center;
`;
const UserImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;
const UserText = styled.span`
  font-family: NotoSansCJKKR;
`;
const UserNickName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  height: 21px;
  font-weight: 500;
  margin-right: 4px;
`;
const UserSetTime = styled.span`
  display: flex;
  font-family: NotoSansCJKKR;
  font-size: 11px;
  height: 16px;
  color: #999;
`;

const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionButton = styled.input`
  display: none;
`;

const DateLine = styled.div``;
const DateContent = styled.div``;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 191px);
  padding: 0 60px 35px 131px;
`;
const MessageForm = styled.form`
  display: flex;
  position: relative;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  height: 151px;
  border: solid 1px #222;
  background-color: #fff;
`;

const MessageTextarea = styled.textarea`
  margin: 24px 24px 0px;
  width: calc(100% - 48px);
  height: 63px;
  line-height: 150%;
  padding: 0px;
  resize: none;
  font-size: 14px;
  border: none;
  outline: none;
`;
const MessageOption = styled.div`
  display: flex;
  position: absolute;
  right: 156px;
  top: 20px;
`;

const OptionImage = styled.img``;
const OptionWrapper = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 0px;
`;
const SendButton = styled.button`
  width: 132px;
  height: 151px;
  margin: 0 0 0 24px;
  background-color: #222;
  color: white;
`;
