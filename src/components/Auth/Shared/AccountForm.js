import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { NOT_EXIST_ACCOUNT } from 'constant';
import IdInput from 'components/Auth/Shared/IdInput';

const AccountForm = React.forwardRef((props, ref) => {
  const [accountMessage, setAccountMessage] = useState('');
  const [isAccountError, setIsAccountError] = useState(false);
  const errorCode = useSelector((state) => state.auth.errorCode);
  const inputRef = useRef();
  const errorAccount = (change, errorText) => {
    setIsAccountError(change);
    setAccountMessage(errorText);
  };
  const validate = () => {
    const currentAccount = inputRef.current.value;
    let isError;
    if (currentAccount) {
      isError = false;
    } else {
      isError = true;
      setAccountMessage('계정을 입력해주세요');
    }
    setIsAccountError(isError);
    return { value: currentAccount, isError };
  };
  const onChange = (e) => {
    props.onChange(validate());
  };
  useEffect(() => {
    if (errorCode == NOT_EXIST_ACCOUNT) {
      errorAccount(true, '존재하지 않는 계정입니다.');
    }
  }, [errorCode]);

  useImperativeHandle(
    ref,
    () => ({
      validate,
    }),
    []
  );

  return (
    <IdInput
      name="account"
      onChange={onChange}
      ref={inputRef}
      errorMessage={accountMessage}
      isError={isAccountError}
      placeholder="아이디 입력"
    />
  );
});

export default AccountForm;
