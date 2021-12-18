import React, { useState, useCallback } from 'react';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import PwdInput from 'components/Auth/PwdInput';
import styled from 'styled-components';

const ErrorAlert = styled.span`
  font-size: 11px;
  color: #ffd25d;
  display: inline;
`;

const RegisterForm = () => {
  const [account, setAccount] = useState('');
  const [password, setpassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');

  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ account, pwd, checkPwd, email, nickName });
  };

  const insertAccount = (e) => {
    setAccount(e.target.value);
  };
  const insertPwd = (e) => {
    setpassword(e.target.value);
  };
  const insertPwdCheck = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 일치하지 않습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식입니다.');
      setIsEmail(true);
    }
  }, []);
  const insertNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <S.Title>회원가입</S.Title>
      <S.StyledInput name="account" value={account} onChange={insertAccount} placeholder="아이디" />
      <PwdInput name="password" value={password} onChange={insertPwd} placeholder="비밀번호 입력" />
      <PwdInput name="passwordConfirm" value={passwordConfirm} onChange={insertPwdCheck} placeholder="비밀번호 확인" />
      <S.StyledInput name="email" value={email} onChange={onChangeEmail} placeholder="이메일" />
      <ErrorAlert>{emailMessage}</ErrorAlert>
      <S.StyledInput name="nickName" value={nickName} onChange={insertNickName} placeholder="닉네임" />
      <Button>다음</Button>
    </form>
  );
};

export default RegisterForm;
