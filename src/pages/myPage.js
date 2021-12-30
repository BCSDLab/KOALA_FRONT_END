import React from 'react';
import SideNavbar from 'components/SideNavbar';
import styled from 'styled-components';

const MyPageContainer = styled.div`
  display: flex;
`;

const MyPageContent = styled.div`
  width: 1570px;
`;

const UserInfo = styled.div`
  margin: 121px 664px 181px 522px;
`;

const MainText = styled.div`
  width: 34px;
  height: 27px;
  font-family: NotoSansCJKKR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;

const MyInfo = styled.div`
  width: 48px;
  height: 24px;
  margin: 33px 67px 32px 80px;
  ont-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222;
`;

const UserImg = styled.img`
  width: 72px;
  height: 72px;
  margin: 32px 98px 16px 181px;
`;

const UserName = styled.div`
  width: 304px;
  height: 24px;
  margin: 16px 96px 32px 65px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222;
`;

const UserWrapper = styled.div`
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #999;
`;

const NickNameTitle = styled(UserWrapper)`
  width: 39px;
  margin: 0px 76px 24px 80px;
`;

const StyledEditNickName = styled.div`
  display: flex;
  position: relative;
  width: 304px;
  margin: 0px 76px 24px 80px;
`;
const EditButton = styled.div``;
const EditImg = styled.img``;
const EditNickName = styled.input``;

const MyPage = () => {
  return (
    <MyPageContainer>
      <SideNavbar></SideNavbar>
      <MyPageContent>
        <UserInfo>
          <MainText>설정</MainText>
          <MyInfo>내 정보</MyInfo>
          <UserImg src="/asset/BaseUserPNG.svg"></UserImg>
          <UserName>uko05068</UserName>
          <NickNameTitle>닉네임</NickNameTitle>
          <StyledEditNickName>
            <EditNickName placeholder="코알라" />
            <EditButton>
              <EditImg src="/asset/pencil.svg" />
            </EditButton>
          </StyledEditNickName>
          <SchoolAuth>학교인증</SchoolAuth>
          <SchoolAuthContent>
            <SchoolAuthState>미인증</SchoolAuthState>
            <SchoolAuthButton>인증하기</SchoolAuthButton>
          </SchoolAuthContent>
          <EtcTitle>기타</EtcTitle>
          <AutoLogin>자동로그인</AutoLogin>
          <Contact>문의하기</Contact>
          <LogOut>로그아웃</LogOut>
          <Resign>탈퇴하기</Resign>
        </UserInfo>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
