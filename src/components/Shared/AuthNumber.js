import React, { useEffect, useState } from 'react';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';

const AuthNuminput = styled.input`
  width: 218px;
  height: 44px;
  border: none;
  flex-grow: 0;
  padding-left: 16px;
  margin-top: 20px;
  border: solid 1px ${({ isError }) => (isError ? '#ffd25d' : '#c4c4c4')};

  &:focus {
    border: solid 1px #222;
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    text-align: left;
    color: #999;
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AuthNumTime = styled.label`
  position: absolute;
  bottom: 18px;
  left: 172px;
  font-size: 12px;
  font-weight: normal;
  color: #999;
`;

const AuthForm = styled.div`
  display: flex;
  position: relative;
  height: 68px;
`;

const AuthButton = styled.button`
  width: 125px;
  height: 48px;
  margin: 20px 0 0 25px;
  background: ${({ isEmail }) => (isEmail ? '#222' : '#c4c4c4')};
  font-size: 14px;
  border: 0;
  color: white;
  outline: none;
  font-weight: 500;

  :hover {
    background: #c4c4c4;
  }
`;

/**
 * TODO:
 * - [] 스타일: 인증번호 에러 스타일 (입력시간 초과, 인증번호 틀림)
 * - [] 스타일: 인증번호 시간
 * - [] 인증번호 전송 후 확인
 *  - 입력 시간 초과
 *  - 인증번호 틀림
 * @param {*} 이메일 확인 여부
 * @returns
 */
const AuthNumber = ({ isEmail = false }) => {
  const [isError, setIsError] = useState(false);
  const [isEmailSend, setIsEmailSend] = useState(false);

  const [minutes, setMinutes] = useState(parseInt('00'));
  const [seconds, setSeconds] = useState(parseInt('00'));

  const sendAuthCode = () => {
    // 메일 전송 로직 실행 후
    setIsEmailSend(true);
    setMinutes(parseInt('05'));
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          setIsError(isEmailSend ? true : false);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <>
      <AuthForm>
        <AuthNuminput isError={isError} isEmailSend={isEmailSend} placeholder="인증번호 입력" />
        <AuthButton onClick={sendAuthCode} isEmail={isEmail} disabled={!isEmail} type="button">
          {isEmailSend ? '재전송' : '인증번호 전송'}
        </AuthButton>
        {isEmailSend ? (
          <AuthNumTime>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </AuthNumTime>
        ) : null}
      </AuthForm>
      <S.InputErrorText>{isError ? '입력시간이 초과되었습니다.' : ''}</S.InputErrorText>
    </>
  );
};

export default AuthNumber;
