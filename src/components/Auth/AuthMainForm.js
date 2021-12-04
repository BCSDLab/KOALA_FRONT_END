import React from 'react';
import styled from 'styled-components';
import StyledButton from 'components/Shared/Button';
import * as S from 'components/Auth/styles';

const AuthForm = styled.div``;

const AuthMainForm = () => (
  <AuthForm>
    <S.StyledInput autocomplete="username" name="username" placeholder="아이디 입력" />
    <S.StyledInput autoComplete="new-password" name="password" placeholder="비밀번호 입력" type="password" />
    <S.AutoLogin>
      <S.AutoLoginCheck>준비</S.AutoLoginCheck> <S.AutoLoginText>자동 로그인</S.AutoLoginText>
    </S.AutoLogin>
    <StyledButton>로그인</StyledButton>
    <S.OtherOption>
      <div>아이디 찾기</div>
      <div>| </div>
      <div>비밀번호 찾기</div>
      <div>|</div>
      <div>회원가입</div>
    </S.OtherOption>
    <S.SnsLoginText>SNS로 간편 로그인하기</S.SnsLoginText>
    <S.OauthLogin>
      <img src="/asset/kakaoLogo.webp" alt="kakao" />
      <img src="/asset/naverLogo.webp" alt="kakao" />
      <img src="/asset/googleLogo.webp" alt="kakao" />
    </S.OauthLogin>
    <S.NoneUser>비회원으로 이용하기</S.NoneUser>
    <S.CopyRight>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</S.CopyRight>
  </AuthForm>
);

export default AuthMainForm;
