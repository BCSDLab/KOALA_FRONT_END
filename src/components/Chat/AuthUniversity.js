import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { sendUniversity, authUniversity } from '../../store/chat';
import styled from 'styled-components';

const AuthUniversity = () => {
  const [email, setEmail] = useState('');
  const [authNumber, setAuthNumber] = useState('');
  const [isAuthNumeber, setIsAuthNumber] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const chat = useSelector((state) => state.chat);
  const [minutes, setMinutes] = useState(parseInt('00'));
  const [seconds, setSeconds] = useState(parseInt('00'));
  const dispatch = useDispatch();

  const sendEmail = () => {
    if (isEmail) {
      const mail = `${email}@koreatech.ac.kr`;
      dispatch(sendUniversity(mail));
      setIsEmailSend(true);
      if (isEmailSend) {
        setIsError(false);
      }
      setMinutes(parseInt('05'));
      setSeconds(parseInt('00'));
    } else {
      alert('이메일을 입력해주세요');
    }
  };
  const authEmail = () => {
    const secret = authNumber;
    dispatch(authUniversity({ secret, email }));
  };

  const onChangeEmail = useCallback((e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    if (currentEmail) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  }, []);
  const onChangeAuthNumber = useCallback((e) => {
    const currentAuthNumber = e.target.value;
    setAuthNumber(currentAuthNumber);
    if (currentAuthNumber) {
      setIsAuthNumber(true);
    } else {
      setIsAuthNumber(false);
    }
  }, []);

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
    if (minutes == 0 && seconds == 0) {
      chat.authNumberErrorMessage = '인증시간이 만료되었습니다.';
    } else {
      chat.authNumberErrorMessage = '';
    }
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  useEffect(() => {
    setIsDisabled(!isEmail || !isAuthNumeber);
  }, [isEmail, isAuthNumeber]);

  return (
    <>
      <SchoolAuthTitle>학교 이메일</SchoolAuthTitle>
      <SchoolAuthInput
        value={email}
        onChange={onChangeEmail}
        placeholder="학교 이메일을 입력해주세요"
      ></SchoolAuthInput>
      <SchoolAuthText>@koreatech.ac.kr</SchoolAuthText>
      <AuthNumberTitle>인증번호</AuthNumberTitle>
      <AuthNumberForm>
        <AuthNumberInput
          value={authNumber}
          onChange={onChangeAuthNumber}
          isError={isError}
          isEmailSend={isEmailSend}
          placeholder="학교 이메일로 인증번호가 전송됩니다."
        ></AuthNumberInput>
        <AuthNumberButton onClick={sendEmail} isEmail={isEmail} type="button">
          {' '}
          {isEmailSend ? '재전송' : '인증번호 전송'}
        </AuthNumberButton>
        {isEmailSend && (
          <AuthNumTime>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </AuthNumTime>
        )}
      </AuthNumberForm>
      <AuthNumberErrorText>{isError ? `${chat.authNumberErrorMessage}` : ''}</AuthNumberErrorText>
      <AuthButton onClick={authEmail} disabled={isDisabled}>
        인증하기
      </AuthButton>
    </>
  );
};

const SchoolAuthTitle = styled.div`
  width: 68px;
  height: 21px;
  margin: 0px 894px 16px 608px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const SchoolAuthInput = styled.input`
  width: 368px;
  margin: 0px 594px 4px 608px;
  padding-bottom: 2px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4;
`;
const SchoolAuthText = styled.div`
  width: 115px;
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  top: 375px;
  left: 861px;
  text-align: right;
  color: #222;
`;
const AuthNumberTitle = styled.div`
  width: 52px;
  height: 21px;
  margin: 48px 910px 16px 608px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
const AuthNumberForm = styled.form`
  display: flex;
  margin: 0px 594px 4px 608px;
  width: 368px;
`;

const AuthNumberInput = styled.input`
  width: 260px;
  padding-bottom: 2px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4;
`;
const AuthNumberButton = styled.button`
  width: 113px;
  height: 37px;
  flex-grow: 0;
  color: #fff;
  background: #222;
  :hover {
    background: #c4c4c4;
  }
`;
const AuthNumTime = styled.label`
  position: absolute;
  bottom: 359px;
  left: 830px;
  font-size: 12px;
  font-weight: normal;
  color: #999;
`;

const AuthNumberErrorText = styled.span`
  display: flex;
  height: 16px;
  left: 610px;
  position: absolute;
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  color: #ffd25d;
  justify-content: flex-start;
`;
const AuthButton = styled(Button)`
  width: 368px;
  height: 48px;
  flex-grow: 0;
  margin: 96px 594px 16px 608px;
  background-color: #222;
`;
export default AuthUniversity;
