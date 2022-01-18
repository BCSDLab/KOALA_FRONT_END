import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendFindPassword } from 'store/auth';
import { NOT_EXIST_ACCOUNT, NOT_MATCH_EMAIL } from 'constant';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';

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
  bottom: 18px;
  left: 172px;
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
  background: ${({ isEmail, ...props }) => (isEmail ? props.theme.colors.darkgray : props.theme.colors.silver)};
  font-size: 14px;
  border: 0;
  color: white;
  outline: none;
  font-weight: 500;

  :hover {
    background: ${(props) => props.theme.colors.silver};
  }
`;

/**
 * TODO:
 * - [x] 스타일: 인증번호 에러 스타일 (입력시간 초과, 인증번호 틀림)
 * - [x] 스타일: 인증번호 시간
 * - [] 인증번호 전송 후 알림
 *  - 입력 시간 초과
 *  - 인증번호 틀림
 * @param {*} 이메일 확인 여부
 * @returns
 */
const AuthNumber = (props) => {
  const [isError, setIsError] = useState(false);
  const [isEmailSend, setIsEmailSend] = useState(false);
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState(parseInt('00'));
  const [seconds, setSeconds] = useState(parseInt('00'));
  const auth = useSelector((state) => state.auth);
  const sendAuthCode = () => {
    dispatch(sendFindPassword(props.account, props.email));
  };
  const onChangeSecret = (e) => {
    const currentSecret = e.target.value;
    console.log(currentSecret);
    props.setSecret(currentSecret);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          setIsError(isEmailSend);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  useEffect(() => {
    if (auth.errorCode == '200') {
      props.errorAccount(false, '');
      props.errorEmail(false, '');
      setIsEmailSend(true);
      if (isEmailSend) {
        setIsError(false);
      }
      setMinutes(parseInt('05'));
      setSeconds(parseInt('00'));
    } else if (auth.errorCode == NOT_EXIST_ACCOUNT) {
      props.errorAccount(true, '존재하지 않는 계정입니다.');
    } else if (auth.errorCode == NOT_MATCH_EMAIL) {
      props.errorEmail(true, '가입할 때 설정한 찾기용 이메일과 일치하지 않습니다.');
    }
  }, [auth.errorCode]);
  return (
    <>
      <AuthForm>
        <AuthNumInput
          value={props.secret}
          onChange={onChangeSecret}
          isError={isError}
          isEmailSend={isEmailSend}
          placeholder="인증번호 입력"
        />
        <AuthButton onClick={sendAuthCode} isEmail={props.isEmail} disabled={!props.isEmail} type="button">
          {isEmailSend ? '재전송' : '인증번호 전송'}
        </AuthButton>
        {isEmailSend && (
          <AuthNumTime>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </AuthNumTime>
        )}
      </AuthForm>
      <S.InputErrorText>{isError ? '입력시간이 초과되었습니다.' : ''}</S.InputErrorText>
    </>
  );
};

export default AuthNumber;
