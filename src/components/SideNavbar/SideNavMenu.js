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

const KeywordText = styled.div`
  height: 21px;
  padding: 12px 0 11.5px 32px; ;
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
  margin: 22px 112px 15.5px 8px;
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
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
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
  height: 76px;
  margin: 27.5px 0;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;
const HistoryText = styled.span`
  width: 52px;
  height: 21px;
  margin: 27.5px 194px 27.5px 24px;

  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;

const ChatList = styled.div`
  width: 270px;
  height: 76px;
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
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const ChatText = styled.div`
  width: 39px;
  height: 21px;
  padding: 12px 207px 11px 24px;
`;

const SetList = styled.div`
  width: 270px;
  height: 92px;
  padding: 365px 0 0 0;
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

const SetText = styled.div`
  width: 30px;
  height: 24px;
  padding: 12px 208px 8px 12px;
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

const ContactText = styled.div`
  width: 59px;
  height: 24px;
  padding: 32px 179px 12px 12px;
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
        <KeywordDropmenu>
          <KeywordText>김이정</KeywordText>
        </KeywordDropmenu>
        <KeywordDropmenu>
          <KeywordText>이유정</KeywordText>
        </KeywordDropmenu>
        <KeywordDropmenu>
          <KeywordText>국가장학금</KeywordText>
        </KeywordDropmenu>
        <KeywordDropmenu>
          <KeywordText>근로장학생</KeywordText>
        </KeywordDropmenu>
        <KeywordDropmenu>
          <KeywordText>성적</KeywordText>
        </KeywordDropmenu>
      </KeywordElement>
      <AddKeyword>
        <AddImg src="/asset/plus.png" alt="plus" />
        <AddText>키워드 추가하기</AddText>
      </AddKeyword>
      <HistoryList>
        <HistoryLink>
          <HistoryText>히스토리</HistoryText>
        </HistoryLink>
      </HistoryList>
      <ChatList>
        <ChatLink>
          <ChatText>채팅방</ChatText>
        </ChatLink>
      </ChatList>
      <SetList>
        <Set>
          <SetText>설정</SetText>
        </Set>
        <Contact>
          <ContactText>문의하기</ContactText>
        </Contact>
      </SetList>
    </SideMenuBackground>
  );
};

export default Extension;
