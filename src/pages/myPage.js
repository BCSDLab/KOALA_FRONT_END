import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeCookie } from '../components/Shared/Cookies';
import { getUserInfo } from '../store/myPage';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import EditNickName from 'components/Mypage/EditNickName';
import SchoolAuth from 'components/Mypage/SchoolAuth';
import AutoLogin from 'components/Mypage/AutoLogin';
import styled from 'styled-components';

const MyPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen); //사이드 네비게이션 상태 전역 상태 관리
  const userInformation = useSelector((state) => state.myPage); //저장된 유저 데이터
  const loginInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const naviagate = useNavigate();
  /*
    TODO:
    [] 유저정보 받아올 것: 이미지, 닉네임, 학교인증여부  
  */
  const logoutClick = useCallback(() => {
    removeCookie('refresh_token');
    loginInfo.isLoggedIn = false;
    naviagate('/auth');
    location.reload();
  }); //클릭 시 로그아웃

  const resignClick = () => {
    API.deleteUser();
    naviagate('/auth');
    location.reload();
  }; //클릭 시 계정 삭제

  useEffect(() => {
    dispatch(getUserInfo()); //1. 렌더링 시 유저정보를 받아온다. => redux-state에 유저정보를 저장
  });

  return (
    <MyPageContainer>
      <SideNavbar></SideNavbar>

      <MyPageContent>
        <LoginButton />
        <UserInfo isToggle={toggle}>
          <MainText>설정</MainText>
          <MyInfo>내 정보</MyInfo>
          <UserImg src="/asset/BaseUserPNG.svg"></UserImg>
          <UserName>{userInformation.userNickName}</UserName>
          <NickNameTitle>닉네임</NickNameTitle>
          <EditNickName userNickName={userInformation.userNickName} />
          <SchoolAuthTitle>학교인증</SchoolAuthTitle>
          <SchoolAuth />
          <EtcTitle>기타</EtcTitle>
          <AutoLogin />
          <Contact>문의하기</Contact>
          <LogOut onClick={logoutClick}>로그아웃</LogOut>
          <Resign onClick={resignClick}>탈퇴하기</Resign>
        </UserInfo>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;

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

const SchoolAuthTitle = styled(Wrapper)`
  width: 52px;
  margin: 71.3px 50px 16px 80px;
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
  cursor: pointer;
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
