import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from 'components/Shared/Switch';
import StyledButton from 'components/Shared/Button';
import PwdInput from 'components/Auth/PwdInput';
import * as S from 'components/Auth/styles';
import IdInput from './IdInput';
import { login } from '../../store/auth';
import { setCookie, getCookie } from 'components/Shared/Cookies';

const AuthMainForm = ({ history }) => {
  const dispatch = useDispatch();

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const userToken = useSelector((state) => state.auth.token);
  const accountHandler = (e) => {
    e.preventDefault();
    setAccount(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ account, password }));
  };
  useEffect(() => {
    if (userToken.access_token) {
      console.log(userToken.access_token);
      setCookie('refresh_token', `${userToken.refresh_token}`, {
        path: '/',
        httpOnly: true,
      });
      const check = getCookie('refresh_token');
      console.log(check);
      try {
      } catch (e) {}
    }
  }, [userToken]);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <IdInput value={account} onChange={accountHandler} name="account" />
        <PwdInput value={password} onChange={passwordHandler} name="password" placeholder="비밀번호 입력" />
        <S.AutoLogin>
          <S.AutoLoginCheck>
            <Switch />
          </S.AutoLoginCheck>
          <S.AutoLoginText>자동 로그인</S.AutoLoginText>
        </S.AutoLogin>
        <StyledButton>로그인</StyledButton>
      </form>
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
      <S.CopyRight>COPYRIGHT © {new Date().getFullYear()} BCSD LAB ALL RIGHTS RESERVED.</S.CopyRight>
    </div>
  );
};
export default AuthMainForm;
