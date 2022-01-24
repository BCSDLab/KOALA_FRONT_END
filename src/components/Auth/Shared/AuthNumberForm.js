import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NOT_MATCH_SECRET } from 'constant';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';
import { sendFindPassword, sendFindId, resetAuthState } from 'store/auth';

const AuthNumberForm = React.forwardRef((props, ref) => {
  const [secretMessage, setSecretMessage] = useState('');
  const [isSecretError, setIsSecretError] = useState(false);
  const dispatch = useDispatch();
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [minutes, setMinutes] = useState(parseInt('00'));
  const [seconds, setSeconds] = useState(parseInt('00'));
  const inputRef = useRef();
  const auth = useSelector((state) => state.auth);

  const sendAuthCode = () => {
    if (props.type === 'PASSWORD') return dispatch(sendFindPassword(props.account, props.email));

    dispatch(sendFindId(props.email));
  };
  const errorSecret = (change, errorText) => {
    setIsSecretError(change);
    setSecretMessage(errorText);
  };
  const validate = () => {
    const currentSecret = inputRef.current.value;
    let isError;
    if (currentSecret) {
      isError = false;
    } else {
      isError = true;
      setSecretMessage('인증번호를 입력해주세요');
    }
    setIsSecretError(isError);
    return { value: currentSecret, isError };
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
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          errorSecret(isEmailSend, '요청시간이 만료되었습니다.');
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  useEffect(() => {
    if (auth.sendSuccess) {
      errorSecret(false, '');
      setIsEmailSend(true);
      setMinutes(parseInt('05'));
      setSeconds(parseInt('00'));
      dispatch(resetAuthState());
    }
  }, [auth.sendSuccess]);

  useEffect(() => {
    if (auth.errorCode == NOT_MATCH_SECRET) {
      errorSecret(true, '인증번호가 틀렸습니다.');
    }
  }, [auth.errorCode]);
  return (
    <>
      <AuthForm>
        <AuthNumInput
          name="secret"
          ref={inputRef}
          isError={isSecretError}
          onChange={onChange}
          placeholder="인증번호 입력"
        />
        <AuthButton onClick={sendAuthCode} type="button" isDisabled={!(props.isAccountError || props.isEmailError)}>
          {isEmailSend ? '재전송' : '인증번호 전송'}
        </AuthButton>
        {isEmailSend && (
          <AuthNumTime>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </AuthNumTime>
        )}
      </AuthForm>
      <S.InputErrorText>{isSecretError ? secretMessage : ''}</S.InputErrorText>
    </>
  );
});

export default AuthNumberForm;

const AuthNumInput = styled.input`
  width: 218px;
  height: 44px;
  border: solid 1px ${({ isError, ...props }) => (isError ? props.theme.colors.yellow : props.theme.colors.silver)};
  outline: none;
  padding-left: 16px;
  flex-grow: 0;

  &:focus {
    border: solid 1px ${(props) => props.theme.colors.darkgray};
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    text-align: left;
    color: ${(props) => props.theme.colors.gray};
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AuthNumTime = styled.label`
  position: absolute;
  bottom: 15px;
  left: 175px;
  font-size: 12px;
  font-weight: normal;
  color: ${(props) => props.theme.colors.gray};
`;

const AuthForm = styled.div`
  display: flex;
  position: relative;
`;

const AuthButton = styled.button`
  width: 125px;
  height: 48px;
  margin: 0 0 0 25px;
  background: ${({ isDisabled, ...props }) => (isDisabled ? props.theme.colors.darkgray : props.theme.colors.silver)};
  font-size: 14px;
  border: 0;
  color: white;
  outline: none;
  font-weight: 500;

  :hover {
    background: ${(props) => props.theme.colors.silver};
  }
`;
