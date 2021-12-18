import React, { useState, useCallback } from 'react';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import PwdInput from 'components/Auth/PwdInput';
import IdInput from 'components/Auth/IdInput';
import styled from 'styled-components';
import axios from 'axios';

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

  const [accountMessage, setAccountMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [nickNameMessage, setNickNameMessage] = useState('');

  const [isAccount, setIsAccount] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);
  const [isNickName, setIsNickName] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ account, password, passwordConfirm, email, nickName });
    const params = { nickname: nickName };
    axios
      .get('/user/nickname-check', { params })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          setNickNameMessage('이미 존재하는 닉네임입니다.');
          setIsNickName(false);
        }
      });
    axios.post('/user/sing-in', { account, password, nickName, email }).then(
      function (response) {
        console.log(response);
      }.catch(function (error) {
        console.log(error);
      })
    );
  };

  const onChangeAccount = (e) => {
    const accountRegex = /^(?=.*[a-z])(?=.*[!@#$%^&*+=-_])(?=.*[0-9]).{5,20}$/;
    const accountCurrent = e.target.value;
    setAccount(accountCurrent);
    if (!accountRegex.test(accountCurrent)) {
      setAccountMessage('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용가능합니다');
      setIsAccount(false);
    } else {
      setAccountMessage('');
      setIsAccount(true);
    }
  };
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력바랍니다');
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('');
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
      setEmailMessage('');
      setIsEmail(true);
    }
  }, []);
  const onChangeNickName = useCallback((e) => {
    setNickName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNickNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
      setIsNickName(false);
    } else {
      setNickNameMessage('');
      setIsNickName(true);
    }
  }, []);

  const errorStyle = { border: '1px solid #ffd25d' };
  return (
    <form onSubmit={onSubmit}>
      <S.Title>회원가입</S.Title>
      <IdInput
        name="account"
        value={account}
        onChange={onChangeAccount}
        style={isAccount ? null : errorStyle}
        placeholder="아이디"
        error={accountMessage}
      />
      <ErrorAlert>{accountMessage}</ErrorAlert>
      <PwdInput
        name="password"
        value={password}
        onChange={onChangePassword}
        style={isPassword ? null : errorStyle}
        placeholder="비밀번호 입력"
        error={passwordMessage}
      />
      <ErrorAlert>{passwordMessage}</ErrorAlert>
      <PwdInput
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
        style={isPasswordConfirm ? null : errorStyle}
        placeholder="비밀번호 확인"
        error={passwordConfirmMessage}
      />
      <ErrorAlert>{passwordConfirmMessage}</ErrorAlert>
      <IdInput
        name="email"
        value={email}
        onChange={onChangeEmail}
        style={isEmail ? null : errorStyle}
        placeholder="이메일"
        error={emailMessage}
      />
      <ErrorAlert>{emailMessage}</ErrorAlert>
      <IdInput
        name="nickName"
        value={nickName}
        onChange={onChangeNickName}
        style={isNickName ? null : errorStyle}
        placeholder="닉네임"
        error={nickNameMessage}
      />
      <ErrorAlert>{nickNameMessage}</ErrorAlert>
      <Button>다음</Button>
    </form>
  );
};

export default RegisterForm;
