import React from 'react';
import styled from 'styled-components';
import Switch from 'components/Shared/Switch';
import StyledButton from 'components/Shared/Button';
import PwdInput from 'components/Auth/PwdInput';
import * as S from 'components/Auth/styles';

const AuthMainForm = () => (
  <div>
    <S.StyledInput autocomplete="username" name="username" placeholder="아이디 입력" />
    <PwdInput placeholder="비밀번호 입력" />
    <S.AutoLogin>
      <S.AutoLoginCheck>
        <Switch />
      </S.AutoLoginCheck>
      <S.AutoLoginText>자동 로그인</S.AutoLoginText>
    </S.AutoLogin>
    <StyledButton>로그인</StyledButton>
    <S.OtherOption>
      <S.StyledLink to="idfind">아이디 찾기</S.StyledLink>

      <S.StyledLink to="pwdfind">비밀번호 찾기</S.StyledLink>

      <S.StyledLink to="register">회원가입</S.StyledLink>
    </S.OtherOption>
    <S.SNSLoginText>SNS로 간편 로그인하기</S.SNSLoginText>
    <S.OauthLogin>
      <img src="/asset/kakaoLogo.webp" alt="kakao" />
      <img src="/asset/naverLogo.webp" alt="naver" />
      <img src="/asset/googleLogo.webp" alt="google" />
    </S.OauthLogin>
    <S.NoneUser>비회원으로 이용하기</S.NoneUser>
    <S.CopyRight>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</S.CopyRight>
  </div>
);

export default AuthMainForm;
