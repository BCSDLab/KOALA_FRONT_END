import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authFindPassword, changingPassword, resetAuthState } from 'store/auth';
import AccountForm from './Shared/AccountForm';
import EmailForm from './Shared/EmailForm';
import AuthNumberForm from './Shared/AuthNumberForm';
import PasswordForm from './Shared/PasswordForm';
import ConfiremdPasswordForm from './Shared/ConfiremdPasswordForm';
import { LOGIN } from 'constant';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';
import Button from 'components/Shared/Button';

const FindPw = () => {
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [secret, setSecret] = useState('');
  const [password, setPassword] = useState('');

  const [isAccountError, setIsAccountError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [isAuthNumError, setIsAuthNumError] = useState(true);
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [isConfirmedPasswordError, setIsConfirmedPasswordError] = useState(true);

  const changeComplete = useSelector((state) => state.auth.changeComplete);

  const onChangeAccount = (validatedData) => {
    setIsAccountError(validatedData.isError);
    setAccount(validatedData.value);
  };
  const onChangeEmail = (validatedData) => {
    setIsEmailError(validatedData.isError);
    setEmail(validatedData.value);
  };
  const onChangeAuth = (validatedData) => {
    setIsAuthNumError(validatedData.isError);
    setSecret(validatedData.value);
  };
  const onChangePassword = (validatedData) => {
    setIsPasswordError(validatedData.isError);
    setPassword(validatedData.value);
  };
  const onChangeConfirmed = (validatedData) => {
    setIsConfirmedPasswordError(validatedData.isError);
  };

  const authSuccess = useSelector((state) => state.auth.authSuccess);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accountRef = useRef();
  const emailRef = useRef();
  const authRef = useRef();
  const passwordRef = useRef();
  const confirmedRef = useRef();

  const nextClick = () => {
    dispatch(authFindPassword(account, email, secret));
  };
  const changePasswordClick = () => {
    dispatch(changingPassword(account, password));
  };

  useEffect(() => {
    if (changeComplete) {
      navigate(LOGIN);
      dispatch(resetAuthState());
    }
  }, [changeComplete]);

  return (
    <div>
      {!authSuccess ? (
        <>
          <S.Title>비밀번호 찾기</S.Title>
          <AccountForm ref={accountRef} onChange={onChangeAccount} />
          <EmailForm ref={emailRef} onChange={onChangeEmail} />
          <AuthNumberForm
            type="PASSWORD"
            ref={authRef}
            account={account}
            email={email}
            isAccountError={isAccountError}
            isEmailError={isEmailError}
            onChange={onChangeAuth}
          ></AuthNumberForm>
          {isAccountError || isEmailError || isAuthNumError ? (
            <Button style={{ background: 'gray' }} disabled={true} type="button">
              다음
            </Button>
          ) : (
            <Button onClick={nextClick}>다음</Button>
          )}
        </>
      ) : (
        <>
          <S.Title>비밀번호 변경하기</S.Title>
          <ChangePasswordForm>
            <PasswordForm ref={passwordRef} onChange={onChangePassword} />
            <ConfiremdPasswordForm ref={confirmedRef} password={password} onChange={onChangeConfirmed} />
          </ChangePasswordForm>
          {isPasswordError || isConfirmedPasswordError ? (
            <Button style={{ background: 'gray' }} disabled={true} type="button">
              완료
            </Button>
          ) : (
            <Button onClick={changePasswordClick}>완료</Button>
          )}
        </>
      )}
    </div>
  );
};

export default FindPw;

const ChangePasswordForm = styled.form`
  margin-bottom: 88px;
`;
