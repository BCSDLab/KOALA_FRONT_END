import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { NOT_MATCH_EMAIL, NOT_SEND_EMAIL } from 'constant';
import CommonInput from './CommonInput';

const EmailForm = React.forwardRef((props, ref) => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const errorCode = useSelector((state) => state.auth.errorCode);
  const inputRef = useRef();

  const errorEmail = (change, errorText) => {
    setIsEmailError(change);
    setEmailMessage(errorText);
  };
  const validate = (value) => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,4}$/i;
    let isError;
    if (!emailRegex.test(value)) {
      setEmailMessage('이메일 형식이 일치하지 않습니다.');
      isError = true;
    } else {
      setEmailMessage('');
      isError = false;
    }

    setIsEmailError(isError);
    return { value, isError };
  };
  const onChange = (e) => {
    const { value } = e.target;
    props.onChange(validate(value));
  };
  useImperativeHandle(
    ref,
    () => ({
      validate,
    }),
    []
  );
  useEffect(() => {
    if (errorCode == NOT_MATCH_EMAIL) {
      errorEmail(true, '가입할 때 설정한 찾기용 이메일과 일치하지 않습니다.');
    } else if (errorCode == NOT_SEND_EMAIL) {
      errorEmail(true, '먼저 이메일을 전송해주세요');
    }
  }, [errorCode]);
  return (
    <CommonInput
      ref={inputRef}
      name="email"
      onChange={onChange}
      isError={isEmailError}
      errorMessage={emailMessage}
      placeholder="이메일 입력"
    />
  );
});

export default EmailForm;
