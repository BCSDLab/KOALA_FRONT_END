import React from 'react';
import Notifications from './Notifications';
import styled from 'styled-components';

const Header = () => {
  return (
    <ChatRoomContent>
      <ChatRoomTitle>지난달 가장 많이 검색한 키워드는?</ChatRoomTitle>
      <ChatRoom>키워드 채팅방 “수강신청”</ChatRoom>
      <ChatRoomNotification>
        {Notifications.map((Notification) => (
          <NotificationList key={Notification.id}>{Notification.text}</NotificationList>
        ))}
      </ChatRoomNotification>
    </ChatRoomContent>
  );
};

export default Header;
const ChatRoomContent = styled.div`
  position: absolute;
  left: 60px;
  top: 60px;
`;

const ChatRoomTitle = styled.div`
  margin-bottom: 8px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const ChatRoom = styled.div`
  margin-bottom: 16px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const ChatRoomNotification = styled.ol`
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #999;
`;

const NotificationList = styled.li``;
