import React from 'react';
import styled from 'styled-components';

const SideMenuBackground = styled.div`
  width: 270px;
  height: 1150px;
  padding: 40px 0 47px;
  background-color: #f6f7f8;
`;

const SideMenuContainer = styled.div`
  margin: 0px 0px 78.2px 24px;
`;

const Logo = styled.img`
  width: 80px;
  height: 21.8px;
  object-fit: contain;
`;

const KeywordMain = styled.span`
  width: 44px;
  height: 21px;
  margin: 6px 1px 5px 24px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;

const KeywordList = styled.div`
  width: 270px;
  height: 32px;
  display: flex;
`;
const KeywordDropdown = styled.img`
  width: 24px;
  height: 24px;
  margin: 2.2px 169px 24px 6px;
  object-fit: contain;
`;
const KeywordElement = styled.div`
  width: 270px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const KeywordDropmenu = styled.div`
  width: 270px;
  height: 44px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const AddKeyword = styled.div`
  width: 270px;
  height: 65.5px;
  display: flex;
`;

const AddImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin: 18px 8px 15.5px 32px;
`;

const AddText = styled.div`
  width: 94px;
  height: 21px;
  margin: 18px 112px 15.5px 0px;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
}
`;

const HistoryList = styled.div`
  width: 270px;
  height: 76px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const HistoryLink = styled.div`
  width: 270px;
  height: 44px;
  margin: 15.5px 0;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const ChatList = styled.div`
  width: 270px;
  height: 44px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const ChatLink = styled.div`
  width: 270px;
  height: 44px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const SetList = styled.div`
  width: 270px;
  height: 92px;
  padding: 392px 0 0 0;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;
const Set = styled.div`
  width: 270px;
  height: 44px;
  padding: 0 0 4px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const Contact = styled.div`
  width: 270px;
  height: 44px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;
const Extension = () => {
  return (
    <SideMenuBackground>
      <SideMenuContainer>
        <Logo src="/asset/Group 1583.png" alt="Logo" />
      </SideMenuContainer>

      <KeywordList>
        <KeywordMain>키워드</KeywordMain>
        <KeywordDropdown src="/asset/chevron-down.png" alt="drop" />
      </KeywordList>
      <KeywordElement>
        <KeywordDropmenu>김유정</KeywordDropmenu>
        <KeywordDropmenu>이유정</KeywordDropmenu>
        <KeywordDropmenu>국가장학금</KeywordDropmenu>
        <KeywordDropmenu>근로장학생</KeywordDropmenu>
        <KeywordDropmenu>성적</KeywordDropmenu>
      </KeywordElement>
      <AddKeyword>
        <AddImg src="/asset/plus.png" alt="plus" />
        <AddText>키워드 추가하기</AddText>
      </AddKeyword>
      <HistoryList>
        <HistoryLink>히스토리</HistoryLink>
      </HistoryList>
      <ChatList>
        <ChatLink>채팅방</ChatLink>
      </ChatList>
      <SetList>
        <Set>설정</Set>
        <Contact>문의하기</Contact>
      </SetList>
    </SideMenuBackground>
  );
};

export default Extension;
