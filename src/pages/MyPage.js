import React, { useCallback, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeCookie } from '../components/Shared/Cookies';
import { changeProfile } from '../store/myPage';
import { LOGIN, REFRESH_TOKEN } from '../constant';
import useMatchMedia from 'hooks/useMatchMedia';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import EditNickname from 'components/Mypage/EditNickname';
import SchoolAuth from 'components/Mypage/SchoolAuth';
import AutoLogin from 'components/Mypage/AutoLogin';
import Dialog from 'components/Shared/Dialog';
import styled from 'styled-components';

/* 
  마이페이지에 현재 user/my에서 유저 이미지에 대한 설계가 아직 진행되지 않았습니다. 
  서버 설계가 완료되면 아래 작성해둔 함수를 활용해주세요
*/
const queries = ['(max-width: 375px)'];
const MyPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen);
  const userInfo = useSelector((state) => state.myPage);
  const loginInfo = useSelector((state) => state.auth);
  const photoInput = useRef();
  const [isShown, setIsShown] = useState(false);
  const [dialog, setDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobile] = useMatchMedia(queries);

  //이미지 파일 업로드 기능 함수
  const setFile = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      const file = photoInput.current.files[0];
      img.append('file', file);
      dispatch(changeProfile(img));
    }
  };

  const photoPatch = () => {
    photoInput.current.click();
  };

  const onConfirm = () => {
    setDialog(false);
    removeCookie(REFRESH_TOKEN);
    loginInfo.isLoggedIn = false;
    navigate(LOGIN);
  };
  const onCancel = () => {
    setDialog(false);
  };
  //클릭 시 로그아웃
  const logout = () => {
    setDialog(true);
  };

  //클릭 시 계정 삭제
  const resign = () => {
    API.deleteUser();
    navigate(LOGIN);
    location.reload();
  };

  return (
    <MyPageContainer>
      <SideNavbar></SideNavbar>
      <MyPageContent>
        {!mobile && <LoginButton />}
        <UserInfo isToggle={toggle}>
          <MainText>설정</MainText>
          <MyInfo>내 정보</MyInfo>
          <UserImage
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            src={userInfo.userImg}
            alt="userImage"
          ></UserImage>
          {isShown && (
            <OverLay onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <PatchText onClick={photoPatch}>편집</PatchText>
              <PatchImg ref={photoInput} type="file" accept="image/*" onChange={(e) => setFile(e)} />
            </OverLay>
          )}
          <UserNickname>{userInfo.userNickname}</UserNickname>
          <NicknameTitle>닉네임</NicknameTitle>
          <EditNickname userNickname={userInfo.userNickname} change={userInfo.changeSuccess} />
          <SchoolAuthTitle>학교인증</SchoolAuthTitle>
          <SchoolAuth isAuth={userInfo.isAuth} />
          <EtcTitle>기타</EtcTitle>
          <AutoLogin />
          <Contact>문의하기</Contact>
          <LogOut onClick={logout}>로그아웃</LogOut>
          <Dialog
            title="로그아웃"
            children="로그아웃하시겠습니까? 로그아웃하면 내 디바이스의 코알라데이터가 삭제됩니다."
            confirmText="확인"
            cancelText="취소"
            onConfirm={onConfirm}
            onCancel={onCancel}
            type="confirm"
            visible={dialog}
          ></Dialog>
          <Resign onClick={resign}>탈퇴하기</Resign>
        </UserInfo>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    padding: 0 0 100px 0;
  }
`;

const MyPageContent = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 100%;
    hegith: ca1c(100%-300px);
  }
`;

const UserInfo = styled.div`
  margin: ${({ isToggle }) =>
    isToggle
      ? `121px 664px 181px 522px;`
      : `121px 664px 181px 426px;
  `};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 100%;
    margin: 0;
  }
`;

const MainText = styled.div`
  width: 34px;
  height: 27px;
  font-family: NotoSansCJKKR;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 100%;
    height: 61px;
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    justify-content: center;
    align-items: center;
    font-family: NotoSansCJKKR;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;

const MyInfo = styled.div`
  width: 48px;
  height: 24px;
  margin: 33px 67px 32px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 118px;
    height: 21px;
    margin: 24px 0 0 16px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #222;
  }
`;

const UserImage = styled.img`
  width: 72px;
  height: 72px;
  margin: 0px 98px 16px 195px;
  border-radius: 50%;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 56px;
    height: 56px;
    margin: 5px 152px 0 152px;
    border-radius: 50%;
    object-fit: contain;
  }
`;
const OverLay = styled.div`
  position: absolute;
  height: 72px;
  width: 72px;
  border-radius: 50%;
  margin: -88px 98px 16px 195px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(34, 34, 34, 0.3);
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    position: absolute;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -56px 152px 0 152px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    border-radius: 50%;
    object-fit: contain;
  }
`;

const PatchText = styled.div`
  padding: 26px 23px 25px;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 26px;
    height: 21px;
    padding: 0;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }
`;

const PatchImg = styled.input`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
  }
`;

const UserNickname = styled.div`
  width: 304px;
  height: 24px;
  margin: 0px 0px 32px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 360px;
    height: 27px;
    display: flex;
    margin: 19px 0 0 0;
    justify-content: center;
    font-family: NotoSansCJKKR;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #222;
  }
`;

const Title = styled.div`
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 118px;
    height: 21px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #999;
  }
`;

const NicknameTitle = styled(Title)`
  width: 39px;
  margin: 0px 76px 24px 80px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    margin: 26px 226px 16px 16px;
  }
`;

const SchoolAuthTitle = styled(Title)`
  width: 52px;
  margin: 71.3px 50px 16px 80px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    margin: 46px 226px 16px 16px;
  }
`;
const EtcTitle = styled.div`
  width: 32px;
  height: 24px;
  margin: 80px 83px 41px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 118px;
    height: 21px;
    margin: 38px 3px 16px 16px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #999;
  }
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
  color: ${(props) => props.theme.colors.gray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 68px;
    height: 21px;
    margin: 16px 53px 16px 16px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #222;
  }
`;

const Contact = styled(Element)``;
const LogOut = styled(Element)``;
const Resign = styled(Element)``;
