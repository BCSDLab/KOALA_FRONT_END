import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledButton from 'components/Shared/Button';

const AuthForm = styled.div``;

const StyledInput = styled.input`
  width: 348px;
  height: 48px;
  border: none;
  flex-grow: 0;
  padding-left: 16px;
  margin-top: 16px;
  border: solid 1px #c4c4c4;
  &:focus {
    border: solid 1px #222;
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #222;
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AutoLogin = styled.div`
  width: 368px;
  display: flex;
  margin-top: 8px;
`;

const AutoLoginCheck = styled.div`
  width: 22px;
  height: 12px;
  margin-right: 4px;
  font-size: 10px;
`;

const AutoLoginText = styled.div`
  width: 58px;
  height: 18px;
  font-size: 9px;
`;

const OtherOption = styled.div`
  width: 368px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-top: 16px;
`;

const SnsLoginText = styled.div`
  width: 152px;
  height: 18px;
  font-size: 10px;
  margin: 28px 108px 16px 108px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OauthLogin = styled.div`
  width: 155px;
  margin: 0 108px 0 108px;
  display: flex;
  justify-content: space-between;
`;

const NoneUser = styled.div`
  width: 120px;
  height: 21px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 56px 123px 221px 125px;
`;

const CopyRight = styled.div`
  width: 298px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px 0 30px;
`;

const AuthMainForm = () => (
  <AuthForm>
    <StyledInput autocomplete="username" name="username" placeholder="아이디 입력" />
    <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호 입력" type="password" />
    <AutoLogin>
      <AutoLoginCheck>준비</AutoLoginCheck> <AutoLoginText>자동 로그인</AutoLoginText>
    </AutoLogin>
    <StyledButton>로그인</StyledButton>
    <OtherOption>
      <div>아이디 찾기</div>
      <div>| </div>
      <div>비밀번호 찾기</div>
      <div>|</div>
      <div>회원가입</div>
    </OtherOption>
    <SnsLoginText>SNS로 간편 로그인하기</SnsLoginText>
    <OauthLogin>
      <img src="/asset/kakaoLogo.webp" alt="kakao" />
      <img src="/asset/naverLogo.webp" alt="kakao" />
      <img src="/asset/googleLogo.webp" alt="kakao" />
    </OauthLogin>
    <NoneUser>비회원으로 이용하기</NoneUser>
    <CopyRight>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</CopyRight>
  </AuthForm>
);

export default AuthMainForm;
