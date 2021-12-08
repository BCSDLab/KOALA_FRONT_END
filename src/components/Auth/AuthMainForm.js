import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from 'components/Shared/Switch';
import StyledButton from 'components/Shared/Button';
import PwdInput from 'components/Auth/PwdInput';
import * as S from 'components/Auth/styles';
import IdInput from './IdInput';
import axios from 'axios';
import { changeField } from 'store/auth';

const AuthMainForm = () => {
  const dispatch = useDispatch();

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

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
    console.log(account);
    console.log(password);
    let body = {
      account: account,
      password: password,
    };
    axios.post('https://api.stage.koala.im/user/login', body).then((res) => console.log(res));
  };

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
