import React, { useState, useRef, useImperativeHandle } from 'react';
import PwdInput from './PwdInput';

const ConfiremdPasswordForm = React.forwardRef((props, ref) => {
  const [isErrorConfirmedPassword, setIsErrorConfirmedPassowrd] = useState(false);
  const [errorConfirmedPassswordMessage, setErrorConfirmedPasswordMessage] = useState('');
  const inputRef = useRef();

  const validate = () => {
    const currentConfirmedPassword = inputRef.current.value;
    let isError;
    if (props.password !== currentConfirmedPassword) {
      isError = true;
      setErrorConfirmedPasswordMessage('비밀번호가 다릅니다.');
    } else {
      isError = false;
      setErrorConfirmedPasswordMessage('');
    }

    setIsErrorConfirmedPassowrd(isError);
    return { value: currentConfirmedPassword, isError };
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
    <PwdInput
      ref={inputRef}
      name="confirmed-password"
      isError={isErrorConfirmedPassword}
      errorMessage={errorConfirmedPassswordMessage}
      onChange={onChange}
      placeholder="새 비밀번호 확인"
    />
  );
});

export default ConfiremdPasswordForm;
