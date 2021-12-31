import React from 'react';
import { useSelector } from 'react-redux';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import EditNickName from 'components/Mypage/EditNickName';
import AutoLogin from 'components/Mypage/AutoLogin';
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

const MainText = styled.div`
  width: 34px;
  height: 27px;
  font-family: NotoSansCJKKR;
  font-size: 18px;
  font-weight: 500;
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
  text-align: center;
  color: #222;
`;

const Wrapper = styled.div`
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #999;
`;

const NickNameTitle = styled(Wrapper)`
  width: 39px;
  margin: 0px 76px 24px 80px;
`;

const SchoolAuth = styled.div`
  width: 52px;
  height: 21px;
  margin: 71.3px 50px 16px 80px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #999;
`;
const EtcTitle = styled.div`
  width: 32px;
  height: 24px;
  margin: 80px 83px 41px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #222;
`;

const Element = styled.div`
  width: 52px;
  height: 21px;
  margin: 0px 50px 32px 80px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #999;
`;

const Contact = styled(Element)``;
const LogOut = styled(Element)``;
const Resign = styled(Element)``;

const MyPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen);

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
          <EditNickName />
          <SchoolAuth>학교인증</SchoolAuth>
          <AutoLogin />
          <EtcTitle>기타</EtcTitle>
          <AutoLogin />
          <Contact>문의하기</Contact>
          <LogOut>로그아웃</LogOut>
          <Resign>탈퇴하기</Resign>
        </UserInfo>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
