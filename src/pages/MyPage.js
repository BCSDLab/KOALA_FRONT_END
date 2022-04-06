import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetAuthState } from 'store/auth';
import { removeCookie } from '../components/Shared/Cookies';
import { changeProfile, resetMypageInfo } from '../store/myPage';
import { LOGIN, REFRESH_TOKEN } from '../constant';
import useMatchMedia from 'hooks/useMatchMedia';
import LoginButton from 'components/Shared/LoginButton';
import EditNickname from 'components/Mypage/EditNickname';
import SchoolAuth from 'components/Mypage/SchoolAuth';
import AutoLogin from 'components/Mypage/AutoLogin';
import Dialog from 'components/Shared/Dialog';
import styled from 'styled-components';
import * as API from 'api';

/* 
  마이페이지에 현재 user/my에서 유저 이미지에 대한 설계가 아직 진행되지 않았습니다. 
  서버 설계가 완료되면 아래 작성해둔 함수를 활용해주세요
*/
const queries = ['(max-width: 1024px)'];
const MyPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen);
  const userInfo = useSelector((state) => state.myPage);
  const photoInput = useRef();
  const [isShown, setIsShown] = useState(false);
  const [dialog, setDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [desktop] = useMatchMedia(queries);

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
    removeCookie(REFRESH_TOKEN);
    setDialog(false);
    dispatch(resetAuthState());
    dispatch(resetMypageInfo());
    navigate(LOGIN);
  };

  const onCancel = () => {
    setDialog(false);
  };

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
      {!desktop && <LoginButton />}
      <MyPageContent isToggle={toggle}>
        <UserInfo isToggle={toggle}>
          <MainText>설정</MainText>
          <UserInfoContainer>
            <UserInfoContent>
              <MyInfo>내 정보</MyInfo>
              <UserInfoHeader>
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
              </UserInfoHeader>
              <NicknameTitle>닉네임</NicknameTitle>
              <EditNickname userNickname={userInfo.userNickname} change={userInfo.changeSuccess} />
              <SchoolAuthTitle>학교인증</SchoolAuthTitle>
              <SchoolAuth isAuth={userInfo.isAuth} />
              <EtcTitle>기타</EtcTitle>
              <AutoLogin />
              <Contact>문의하기</Contact>
              <LogOut onClick={logout}>로그아웃</LogOut>
              <Dialog
                type="confirm"
                title="로그아웃"
                children="로그아웃하시겠습니까? 로그아웃하면 내 디바이스의 코알라데이터가 삭제됩니다."
                confirmText="확인"
                cancelText="취소"
                onConfirm={onConfirm}
                onCancel={onCancel}
                visible={dialog}
              ></Dialog>
              <Resign onClick={resign}>탈퇴하기</Resign>
            </UserInfoContent>
          </UserInfoContainer>
        </UserInfo>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const MyPageContent = styled.div`
  width: 100vw;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    display: block;
    height: auto;
  }
`;

const UserInfoContainer = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
`;
const UserInfoContent = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 328px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const UserInfo = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    height: calc(100% + 100px);
    margin: 0;
  }
`;

const MainText = styled.div`
  max-width: 384px;
  height: 27px;
  font-family: NotoSansCJKKR;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    max-width: 100%;
    height: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
    font-family: NotoSansCJKKR;
    font-size: 18px;
    text-align: center;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;

const MyInfo = styled.div`
  width: 100%;
  height: 24px;
  margin: 0px 67px 32px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 118px;
    height: 21px;
    margin: 24px 0 0 0;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    text-align: left;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
const UserInfoHeader = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 328px;
    height: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const UserImage = styled.img`
  width: 72px;
  height: 72px;
  margin: 0px 98px 16px 195px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 56px;
    height: 56px;
    margin: 5px 0 0 0;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const OverLay = styled.div`
  position: absolute;
  max-height: 72px;
  max-width: 72px;
  border-radius: 50%;
  margin: -88px 98px 16px 195px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(34, 34, 34, 0.3);
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    position: absolute;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    top: 110px;
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 26px;
    height: 21px;
    padding: 0;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: ${(props) => props.theme.colors.white};
  }
`;

const PatchImg = styled.input`
  display: none;
`;

const UserNickname = styled.div`
  max-width: 100%;
  max-height: 24px;
  margin: 0px 0px 32px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 360px;
    height: 27px;
    display: flex;
    margin: 19px 0 0 0;
    justify-content: center;
    font-family: NotoSansCJKKR;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;

const Title = styled.div`
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 118px;
    height: 21px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    text-align: left;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const NicknameTitle = styled(Title)`
  max-width: 39px;
  margin: 0px 76px 24px 80px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    margin: 26px 226px 16px 0px;
  }
`;

const SchoolAuthTitle = styled(Title)`
  max-width: 52px;
  margin: 71.3px 50px 16px 80px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    margin: 46px 226px 7px 0px;
  }
`;
const EtcTitle = styled.div`
  max-width: 32px;
  height: 24px;
  margin: 80px 83px 41px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 118px;
    height: 21px;
    margin: 38px 3px 16px 0px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    text-align: left;
    color: ${(props) => props.theme.colors.gray};
  }
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    margin: 10px 83px 20px 80px;
  }
`;

const Element = styled.div`
  max-width: 52px;
  height: 21px;
  cursor: pointer;
  margin: 0px 50px 32px 80px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 68px;
    height: 21px;
    margin: 0 53px 16px 0;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    text-align: left;
    color: ${(props) => props.theme.colors.darkgray};
  }
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    margin: 0px 50px 16px 80px;
  }
`;

const Contact = styled(Element)``;
const LogOut = styled(Element)``;
const Resign = styled(Element)``;
