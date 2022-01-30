import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import MobileTopBar from 'components/Shared/MobileTopBar';
import useMatchMedia from 'hooks/useMatchMedia';
import { authFindPassword, changingPassword, resetAuthState } from 'store/auth';
import AccountForm from '../Shared/AccountForm';
import EmailForm from '../Shared/EmailForm';
import AuthNumberForm from '../Shared/AuthNumberForm';
import PasswordForm from '../Shared/PasswordForm';
import ConfiremdPasswordForm from '../Shared/ConfiremdPasswordForm';
import { LOGIN } from 'constant';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';
import Button from 'components/Shared/Button';
const queries = ['(max-width: 375px)'];

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
  const [mobile] = useMatchMedia(queries);

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
    }
  }, [changeComplete]);

  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, []);

  return (
    <div>
      {!authSuccess ? (
        <FindPasswordContainer>
          {mobile ? <MobileTopBar content="비밀번호찾기" /> : <S.Title>비밀번호 찾기</S.Title>}
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
          <AuthButton onClick={nextClick} disabled={isAccountError || isEmailError || isAuthNumError} type="button">
            인증하기
          </AuthButton>
        </FindPasswordContainer>
      ) : (
        <FindPasswordContainer>
          {mobile ? <MobileTopBar content="비밀번호찾기" /> : <S.Title>비밀번호 찾기</S.Title>}
          {mobile && (
            <ConfigContainer>
              <ConfigTitle>새 비밀번호 변경</ConfigTitle>{' '}
              <ConfigContent>비밀번호를 새로운 비밀번호로 변경해주세요!</ConfigContent>
            </ConfigContainer>
          )}
          <ChangePasswordForm>
            <PasswordForm ref={passwordRef} onChange={onChangePassword} />
            <ConfiremdPasswordForm ref={confirmedRef} password={password} onChange={onChangeConfirmed} />
          </ChangePasswordForm>
          <AuthButton
            onClick={changePasswordClick}
            disabled={isPasswordError || isConfirmedPasswordError}
            type="button"
          >
            완료
          </AuthButton>
        </FindPasswordContainer>
      )}
    </div>
  );
};

export default FindPw;

const ChangePasswordForm = styled.form`
  margin-bottom: 88px;
`;

const AuthButton = styled(Button)`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    position: absolute;
    bottom: 40px;
  }
`;

const FindPasswordContainer = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 328px;
    padding-top: 88px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;
const ConfigContainer = styled.div`
  height: 50px;
  margin-bottom: 24px;
`;
const ConfigTitle = styled.div`
  margin-bottom: 8px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const ConfigContent = styled.div`
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #999;
`;
