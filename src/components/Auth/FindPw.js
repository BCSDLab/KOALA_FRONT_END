import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { authFindPassword } from 'store/auth';
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

  const [isAccount, setIsAccount] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeAccount = (e) => {
    const accountCurrent = e.target.value;
    setAccount(accountCurrent);
    setIsAccount(true);
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

  const nextClick = () => {
    console.log(account);
    console.log(email);
    console.log(secret);
    dispatch(authFindPassword(account, email, secret));
  };

  useEffect(() => {
    if (isEmail && isAccount) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isEmail, isAccount]);

  return (
    <div>
      <S.Title>비밀번호</S.Title>
      <IdInput
        name="account"
        value={account}
        errorMessage={accountMessage}
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

      <AuthNumber secret={secret} setSecret={setSecret} isEmail={isEmail} email={email} account={account} />
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
