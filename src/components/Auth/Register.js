import React, { useState, useCallback, useEffect } from 'react';
import * as API from 'api';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import PwdInput from 'components/Auth/PwdInput';
import IdInput from 'components/Auth/IdInput';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { signUp } from 'store/auth';

const ErrorAlert = styled.span`
  font-size: 11px;
  color: #ffd25d;
  display: inline;
`;

const RegisterForm = () => {
  const dispatch = useDispatch();
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

  const [isAccount, setIsAccount] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isNickName, setIsNickName] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ account, password, passwordConfirm, email, nickName });
    API.checkNickname(nickName)
      .then(function () {
        API.checkAccount(account)
          .then(function () {
            API.checkEmail(email)
              .then(function () {
                dispatch(signUp({ account, password, passwordConfirm, email, nickName }));
              })
              .catch(function () {
                setEmailMessage('이메일 형식이 일치하지 않습니다.');
                setIsEmail(false);
              });
          })
          .catch(function () {
            setAccountMessage('이미 존재하는 계정입니다.');
            setIsAccount(false);
          });
      })
      .catch(function () {
        setNickNameMessage('이미 존재하는 닉네임 입니다.');
        setIsNickName(false);
      });
  };

  const onChangeAccount = (e) => {
    const accountRegex = /^(?=.*[a-z,-_, 0-9]).{4,20}$/;
    const accountCurrent = e.target.value;
    setAccount(accountCurrent);
    if (!accountRegex.test(accountCurrent)) {
      setAccountMessage('4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용가능합니다');
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

  useEffect(() => {
    if (isAccount && isPassword && isPasswordConfirm && isEmail && isNickName) {
      setIsDisabled(true);
    }
  }, [isAccount, isPassword, isPasswordConfirm, isEmail, isNickName]);

  return (
    <form onSubmit={onSubmit}>
      <S.Title>회원가입</S.Title>
      <IdInput
        name="account"
        value={account}
        onChange={onChangeAccount}
        style={accountMessage ? errorStyle : null}
        placeholder="아이디"
        error={accountMessage}
      />
      {accountMessage ? <ErrorAlert>{accountMessage}</ErrorAlert> : <br></br>}
      <PwdInput
        name="password"
        value={password}
        onChange={onChangePassword}
        style={passwordMessage ? errorStyle : null}
        placeholder="비밀번호 입력"
        error={passwordMessage}
      />
      {passwordMessage ? <ErrorAlert>{passwordMessage}</ErrorAlert> : <br></br>}
      <PwdInput
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
        style={passwordConfirmMessage ? errorStyle : null}
        placeholder="비밀번호 확인"
        error={passwordConfirmMessage}
      />
      {passwordConfirmMessage ? <ErrorAlert>{passwordConfirmMessage}</ErrorAlert> : <br></br>}
      <IdInput
        name="email"
        value={email}
        onChange={onChangeEmail}
        style={emailMessage ? errorStyle : null}
        placeholder="이메일"
        error={emailMessage}
      />
      {emailMessage ? <ErrorAlert>{emailMessage}</ErrorAlert> : <br></br>}
      <IdInput
        name="nickName"
        value={nickName}
        onChange={onChangeNickName}
        style={nickNameMessage ? errorStyle : null}
        placeholder="닉네임"
        error={nickNameMessage}
      />
      {nickNameMessage ? <ErrorAlert>{nickNameMessage}</ErrorAlert> : <br></br>}
      {isDisabled ? (
        <Button type="submit">다음</Button>
      ) : (
        <Button style={{ background: 'gray' }} disabled={true} type="button">
          다음
        </Button>
      )}
    </form>
  );
};

export default RegisterForm;
