import React from 'react';
import styled from 'styled-components';
import Button from '../Shared/Button';

const ChatAuth = () => {
  return (
    <ChatAuthStyle>
      <ChatAuthTitle>아우누리 본인인증 단계</ChatAuthTitle>
      <UserImage src="/asset/BaseUser.svg" alt="BaseUser"></UserImage>
      <UserNickname>uko012345</UserNickname>
      <SchoolAuthTitle>학교 이메일</SchoolAuthTitle>
      <SchoolAuthInput placeholder="학교 이메일을 입력해주세요"></SchoolAuthInput>
      <SchoolAuthText>@koreatech.ac.kr</SchoolAuthText>
      <AuthNumberTitle>인증번호</AuthNumberTitle>
      <AuthNumberForm>
        <AuthNumberInput placeholder="학교 이메일로 인증번호가 전송됩니다."></AuthNumberInput>
        <AuthNumberButton>인증번호 전송</AuthNumberButton>
      </AuthNumberForm>
      <AuthButton>인증하기</AuthButton>
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
const SchoolAuthTitle = styled.div`
  width: 68px;
  height: 21px;
  margin: 0px 894px 16px 608px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const SchoolAuthInput = styled.input`
  width: 368px;
  margin: 0px 594px 4px 608px;
  padding-bottom: 2px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4;
`;
const SchoolAuthText = styled.div`
  width: 115px;
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  top: 375px;
  left: 861px;
  text-align: right;
  color: #222;
`;
const AuthNumberTitle = styled.div`
  width: 52px;
  height: 21px;
  margin: 48px 910px 16px 608px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const AuthNumberForm = styled.form`
  display: flex;
  margin: 0px 594px 4px 608px;
  width: 368px;
`;

const AuthNumberInput = styled.input`
  width: 260px;
  padding-bottom: 2px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4;
`;
const AuthNumberButton = styled.button`
  width: 113px;
  height: 37px;
  flex-grow: 0;
  color: #fff;
  background-color: #222;
`;
const AuthButton = styled(Button)`
  width: 368px;
  height: 48px;
  flex-grow: 0;
  margin: 96px 594px 16px 608px;
  background-color: #222;
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
