import React, { useState, useRef, useImperativeHandle } from 'react';
import PwdInput from './PwdInput';

const PasswordForm = React.forwardRef((props, ref) => {
  const [isErrorPassword, setIsErrorPassowrd] = useState(false);
  const [errorPassswordMessage, setErrorPasswordMessage] = useState('');
  const inputRef = useRef();

  const validate = () => {
    const currentPassword = inputRef.current.value;
    let isError;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,18}$/;

    if (!passwordRegex.test(currentPassword)) {
      isError = true;
      setErrorPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요');
    } else {
      isError = false;
      setErrorPasswordMessage('');
    }
    setIsErrorPassowrd(isError);
    return { value: currentPassword, isError };
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

  return (
    <>
      <PwdInput
        ref={inputRef}
        name="password"
        isError={isErrorPassword}
        errorMessage={errorPassswordMessage}
        onChange={onChange}
        placeholder="새 비밀번호"
      />
    </>
  );
});

export default PasswordForm;
