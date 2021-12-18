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
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');

  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ account, pwd, checkPwd, email, nickName });
  };

  const insertAccount = (e) => {
    setAccount(e.target.value);
  };
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력바랍니다');
      setIsPassword(false);
    } else {
      setPasswordMessage('비밀번호 확인');
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호 일치');
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage('비밀번호가 다릅니다');
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 일치하지 않습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('이메일 형식이 일치합니다.');
      setIsEmail(true);
    }
  }, []);
  const insertNickName = (e) => {
    setNickName(e.target.value);
  };
  const errorStyle = { border: '1px solid #ffd25d' };
  return (
    <form onSubmit={onSubmit}>
      <S.Title>회원가입</S.Title>
      <S.StyledInput name="account" value={account} onChange={insertAccount} placeholder="아이디" />
      <PwdInput
        name="password"
        value={password}
        onChange={onChangePassword}
        style={isPassword ? null : errorStyle}
        placeholder="비밀번호 입력"
      />
      <ErrorAlert>{passwordMessage}</ErrorAlert>
      <PwdInput
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
        style={isPasswordConfirm ? null : errorStyle}
        placeholder="비밀번호 확인"
      />
      <ErrorAlert>{passwordConfirmMessage}</ErrorAlert>
      <S.StyledInput
        name="email"
        value={email}
        onChange={onChangeEmail}
        style={isEmail ? null : errorStyle}
        placeholder="이메일"
      />
      <ErrorAlert>{emailMessage}</ErrorAlert>
      <S.StyledInput name="nickName" value={nickName} onChange={insertNickName} placeholder="닉네임" />
      <Button>다음</Button>
    </form>
  );
};

export default RegisterForm;
