import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../store/myPage';

import styled from 'styled-components';

import AuthUniversity from './AuthUniversity';

const ChatAuth = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.myPage);
  const loginInfo = useSelector((state) => state.auth);

  useEffect(() => {
    if (loginInfo.isLoggedIn) {
      dispatch(getUserInfo());
    }
  }, [loginInfo.isLoggedIn]);
  return (
    <ChatAuthStyle>
      <ChatAuthTitle>아우누리 본인인증 단계</ChatAuthTitle>
      <UserImage src="/asset/BaseUser.svg" alt="BaseUser"></UserImage>
      <UserNickname>{userInfo.userAccount}</UserNickname>
      <AuthUniversity />
      <KoreatechLink>아우누리 바로가기</KoreatechLink>
      <SchoolCopyRight>COPYRIGHT © {new Date().getFullYear()} BCSD LAB ALL RIGHTS RESERVED.</SchoolCopyRight>
    </ChatAuthStyle>
  );
};

const ChatAuthStyle = styled.div`
  width: 1570px;
  height: 872px;
  position: relative;
`;
const ChatAuthTitle = styled.div`
  width: 174px;
  height: 27px;
  margin: 70px 284px 55px 150px;
  font-family: NotoSansCJKKR;
  font-size: 18px;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const UserImage = styled.img`
  width: 72px;
  height: 72px;
  margin: 0px 742px 16px 756px;
  object-fit: contain;
`;
const UserNickname = styled.div`
  width: 77px;
  height: 24px;
  margin: 0px 740px 72px 753px;
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
const KoreatechLink = styled.div`
  width: 91px;
  height: 18px;
  margin: 0px 732px 126px 747px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #999;
`;
const SchoolCopyRight = styled.div`
  width: 298px;
  height: 18px;
  margin: 126px 622px 29px 650px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #c4c4c4;
`;

export default ChatAuth;
