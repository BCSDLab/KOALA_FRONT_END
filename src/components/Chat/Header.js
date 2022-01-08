import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <ChatRoomContent>
      <ChatRoomTitle>지난달 가장 많이 검색한 키워드는?</ChatRoomTitle>
      <ChatRoom>키워드 채팅방 “수강신청”</ChatRoom>
      <ChatRoomNotification>
        <NotificationList>
          키워드 채팅방은 지난달 수집된 데이터상에서 가장 많이 등록된 키워드로 집계되어 매월 1일에 자동생성됩니다.
        </NotificationList>
        <NotificationList>
          가급적 키워드와 관련한 내용만 채팅해주세요. 관리자에 의해 불이익을 받을 수 있습니다.
        </NotificationList>
        <NotificationList>코리아텍 학생만 이용가능한 채팅방입니다.</NotificationList>
      </ChatRoomNotification>
    </ChatRoomContent>
  );
};

export default Header;
const ChatRoomContent = styled.div`
  position: relative;
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
