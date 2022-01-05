import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeCookie } from '../components/Shared/Cookies';
import { getUserInfo } from '../store/myPage';
import { LOGIN, REFRESH_TOKEN } from '../constant';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import EditNickname from 'components/Mypage/EditNickname';
import SchoolAuth from 'components/Mypage/SchoolAuth';
import AutoLogin from 'components/Mypage/AutoLogin';
import styled from 'styled-components';

/* 
  마이페이지에 현재 user/my에서 유저 이미지에 대한 설계가 아직 진행되지 않았습니다. 
  서버 설계가 완료되면 아래 작성해둔 함수를 활용해주세요
*/

const MyPage = () => {
  const toggle = useSelector((state) => state.toggle.isOpen);
  const userInfo = useSelector((state) => state.myPage);
  const loginInfo = useSelector((state) => state.auth);
  const [userImgFile, setUserImgFile] = useState('/asset/BaseUserPNG.svg'); //유저 이미지 상태
  const photoInput = useRef();
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //이미지 파일 업로드 기능 함수
  const setFile = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append('file', e.target.files[0]);
      axios
        .post('', img)
        .then((res) => {
          setImageUrl(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const photoPatch = () => {
    photoInput.current.click();
  };

  //클릭 시 로그아웃
  const logout = useCallback(() => {
    removeCookie(REFRESH_TOKEN);
    loginInfo.isLoggedIn = false;
    navigate(LOGIN);
  });

  //클릭 시 계정 삭제
  const resign = () => {
    API.deleteUser();
    navigate(LOGIN);
    location.reload();
  };

  //새로고침 시 유저정보 다시 받아오기
  useEffect(() => {
    if (loginInfo.isLoggedIn == true) {
      dispatch(getUserInfo());
    }
  }, [loginInfo.isLoggedIn]);

  return (
    <MyPageContainer>
      <SideNavbar></SideNavbar>
      <MyPageContent>
        <LoginButton />
        <UserInfo isToggle={toggle}>
          <MainText>설정</MainText>
          <MyInfo>내 정보</MyInfo>
          <UserImg
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            src={userImgFile}
            alt="userImage"
          ></UserImg>
          {isShown && (
            <OverLay onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <PatchText onClick={photoPatch}>편집</PatchText>
              <PatchImg ref={photoInput} type="file" accept="image/*" onChange={(e) => setFile(e)} />
            </OverLay>
          )}
          <UserNickName>{userInfo.userNickname}</UserNickName>
          <NicknameTitle>닉네임</NicknameTitle>
          <EditNickname userNickName={userInfo.userNickname} />
          <SchoolAuthTitle>학교인증</SchoolAuthTitle>
          <SchoolAuth />
          <EtcTitle>기타</EtcTitle>
          <AutoLogin />
          <Contact>문의하기</Contact>
          <LogOut onClick={logout}>로그아웃</LogOut>
          <Resign onClick={resign}>탈퇴하기</Resign>
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
      ? `121px 664px 181px 522px;`
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
  color: #fff;
  background-color: rgba(34, 34, 34, 0.3);
`;

const PatchText = styled.div`
  padding: 26px 23px 25px;
  cursor: pointer;
`;

const PatchImg = styled.input`
  display: none;
`;

const UserNickname = styled.div`
  width: 304px;
  height: 24px;
  margin: 0px 0px 32px 80px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #222;
`;

const Title = styled.div`
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #999;
`;

const NicknameTitle = styled(Title)`
  width: 39px;
  margin: 0px 76px 24px 80px;
`;

const SchoolAuthTitle = styled(Title)`
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
