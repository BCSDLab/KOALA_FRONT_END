import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authFindPassword } from 'store/auth';
import { NOT_EXIST_ACCOUNT, NOT_MATCH_EMAIL, NOT_SEND_EMAIL, NOT_MATCH_SECRET } from 'constant';
import * as S from 'components/Auth/styles';
import AuthNumber from 'components/Shared/AuthNumber';
import Button from 'components/Shared/Button';
import IdInput from 'components/Auth/Shared/IdInput';

const FindPw = () => {
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [secret, setSecret] = useState('');
  const [accountMessage, setAccountMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [secretMessage, setSecretMessage] = useState('');

  const [isAccount, setIsAccount] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isAccountError, setIsAccountError] = useState(false);
  const [isSecretError, setIsSecretError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeAccount = (e) => {
    const currentAccount = e.target.value;
    setAccount(currentAccount);
    if (currentAccount) {
      setIsAccount(true);
      setIsAccountError(false);
    } else {
      setIsAccount(false);
    }
  };

  const onChangeEmail = useCallback((e) => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,4}$/i;

    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 일치하지 않습니다.');
      setIsEmail(false);
      setIsEmailError(true);
      console.log('dif');
    } else {
      setEmailMessage('');
      setIsEmail(true);
      setIsEmailError(false);
      console.log('suc');
    }
  }, []);

  const errorAccount = (change, errorText) => {
    setIsAccountError(change);
    setAccountMessage(errorText);
  };
  const errorEmail = (change, errorText) => {
    setIsEmailError(change);
    setEmailMessage(errorText);
  };

  const errorSecret = (change, errorText) => {
    setIsSecretError(change);
    setSecretMessage(errorText);
  };
  const nextClick = () => {
    dispatch(authFindPassword(account, email, secret));
  };

  useEffect(() => {
    if (isEmail && isAccount) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isEmail, isAccount]);
  useEffect(() => {
    if (auth.errorCode == NOT_EXIST_ACCOUNT) {
      errorAccount(true, '존재하지 않는 계정입니다.');
    } else if (auth.errorCode == NOT_MATCH_EMAIL) {
      errorEmail(true, '가입할 때 설정한 찾기용 이메일과 일치하지 않습니다.');
    } else if (auth.errorCode == NOT_SEND_EMAIL) {
      errorEmail(true, '먼저 이메일을 전송해주세요');
    } else if (auth.errorCode == NOT_MATCH_SECRET) {
      setSecretMessage('인증번호가 틀렸습니다.');
    } else if (auth.authSuccess) {
      navigate('/auth/changePw');
      auth.errorCode = null;
      auth.authSuccess = false;
    }
  }, [auth.errorCode, auth.authSuccess]);
  return (
    <div>
      <S.Title>비밀번호</S.Title>
      <IdInput
        name="account"
        value={account}
        errorMessage={accountMessage}
        isError={isAccountError}
        onChange={onChangeAccount}
        placeholder="아이디 입력"
      />
      <IdInput
        name="email"
        value={email}
        onChange={onChangeEmail}
        isError={isEmailError}
        errorMessage={emailMessage}
        placeholder="이메일 입력"
      />

      <AuthNumber
        type="PASSWORD"
        account={account}
        errorAccount={errorAccount}
        email={email}
        errorEmail={errorEmail}
        isEmail={isEmail}
        secret={secret}
        errorSecret={errorSecret}
        setSecret={setSecret}
        isSecretError={isSecretError}
        secretMessage={secretMessage}
        setSecretMessage={setSecretMessage}
      />
      {isDisabled ? (
        <Button style={{ background: 'gray' }} disabled={true} type="button">
          다음
        </Button>
      ) : (
        <Button onClick={nextClick}>다음</Button>
      )}
    </div>
  );
};

export default FindPw;
