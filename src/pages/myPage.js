import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import styled from 'styled-components';

const MyPageContainer = styled.div`
  display: flex;
`;

const MyPageContent = styled.div``;

const UserInfo = styled.div`
  margin: ${({ isToggle }) =>
    isToggle
      ? ` 121px 664px 181px 522px;`
      : `121px 664px 181px 426px;
  `};
`;
//  121px 664px 181px 522px sideNav 열릴때

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
  font-family: NotoSansCJKKR;
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
  margin: 0px 98px 16px 195px;
`;

const UserName = styled.div`
  width: 304px;
  height: 24px;
  margin: 0px 0px 32px 80px;
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

const Wrapper = styled.div`
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

const NickNameTitle = styled(Wrapper)`
  width: 39px;
  margin: 0px 76px 24px 80px;
`;

const StyledEditNickName = styled.div`
  display: flex;
  position: relative;
  width: 304px;
  height: 28.3px;
  margin: 2.8px 0px 24px 80px;
`;

const EditNickName = styled.input`
  background-image: url('/asset/pencil.svg');
  background-position-y: center;
  background-position-x: 280px;
  background-repeat: no-repeat;
  width: 304px;
  padding-bottom: 7.3px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4; ;
`;

const SchoolAuth = styled.div`
  width: 52px;
  height: 21px;
  margin: 71.3px 50px 16px 80px;
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
const SchoolAuthContent = styled.div`
  display: flex;
`;
const SchoolAuthState = styled.div`
  width: 39px;
  height: 21px;
  flex-grow: 0;
  margin: 10px 165px 9px 80px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222;
`;
const SchoolAuthButton = styled.button`
  width: 100px;
  height: 40px;
  flex-grow: 0;
  background-color: #222;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const EtcTitle = styled.div`
  width: 32px;
  height: 24px;
  margin: 80px 83px 41px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222;
`;
const AutoLoginContent = styled.div`
  display: flex;
  width: 304px;
  height: 21px;
  margin: 0px 0px 32px 80px;
`;
const AutoLogin = styled.div`
  width: 65px;
  height: 21px;
  margin: 0px 0px 32px 0px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #999;
`;
const AutoLoginCheck = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 223px;
  padding-top: 2px;
  padding-bottom: 3px;
  object-fit: contain;
`;
const Contact = styled.div`
  width: 52px;
  height: 21px;
  margin: 0px 50px 32px 80px;
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
const LogOut = styled.div`
  width: 52px;
  height: 21px;
  margin: 0px 50px 32px 80px;
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
const Resign = styled.div`
  width: 52px;
  height: 21px;
  margin: 0px 50px 32px 80px;
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

const MyPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);
  return (
    <MyPageContainer>
      <SideNavbar></SideNavbar>

      <MyPageContent>
        <LoginButton />
        <UserInfo isToggle={toggle}>
          <MainText>설정</MainText>
          <MyInfo>내 정보</MyInfo>
          <UserImg src="/asset/BaseUserPNG.svg"></UserImg>
          <UserName>uko05068</UserName>
          <NickNameTitle>닉네임</NickNameTitle>
          <StyledEditNickName>
            <EditNickName placeholder="코알라" />
          </StyledEditNickName>
          <SchoolAuth>학교인증</SchoolAuth>
          <SchoolAuthContent>
            <SchoolAuthState>미인증</SchoolAuthState>
            <SchoolAuthButton>인증하기</SchoolAuthButton>
          </SchoolAuthContent>
          <EtcTitle>기타</EtcTitle>
          <AutoLoginContent>
            <AutoLogin>자동로그인 </AutoLogin>
            <AutoLoginCheck src="/asset/CheckCircle.svg" />
          </AutoLoginContent>
          <Contact>문의하기</Contact>
          <LogOut>로그아웃</LogOut>
          <Resign>탈퇴하기</Resign>
        </UserInfo>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
