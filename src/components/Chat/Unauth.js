import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UNIVERSITY_AUTH } from '../../constant';
import styled from 'styled-components';

const Unauth = () => {
  const navigate = useNavigate();
  const auth = () => {
    navigate(UNIVERSITY_AUTH);
  };
  return (
    <UnauthContent>
      <KoreatechImage src="/asset/KUTLogo.webp" alt="kut" />
      <UnauthTitle>앗, 아직 아우누리 인증을 하지 않으셨나요?</UnauthTitle>
      <UnauthText>
        코리아텍 학생만 이용할 수 있는 서비스입니다.
        <br />
        아래에 버튼을 눌러서 아우누리 메일 인증이 필요합니다.
      </UnauthText>
      <AuthButton onClick={auth}>인증하기</AuthButton>
    </UnauthContent>
  );
};

export default Unauth;

const UnauthContent = styled.div`
  width: 316px;
  height: 862px;
  left: 626px;
  right: 628px;
  position: relative;
`;
const KoreatechImage = styled.img`
  width: 93px;
  height: 116px;
  position: relative;
  left: 113px;
  right: 110px;
  margin-top: 224px;
`;
const UnauthTitle = styled.div`
  width: 316px;
  height: 27px;
  margin-top: 48px;
  position: relative;
  font-family: NotoSansCJKKR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222;
`;
const UnauthText = styled.div`
  margin-top: 24px;
  font-size: 14px;
  font-family: NotoSansCJKKR;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222;
`;
const AuthButton = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  background-color: #222;
  margin-top: 48px;
  left: 109px;
  right: 110px;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;
