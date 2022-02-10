import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Shared/Button';
import { sendUniversity, authUniversity } from 'store/myPage';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const UniversityAuth = ({ ...props }) => {
  const [authNumber, setAuthNumber] = useState('');
  const [isAuthNumeber, setIsAuthNumber] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isError, setIsError] = useState(false);

  const [isEmailSend, setIsEmailSend] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);
  const [time, setTime] = useState({
    minutes: parseInt('00'),
    seconds: parseInt('00'),
  });

  const chat = useSelector((state) => state.myPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendEmail = () => {
    if (!props.isEmail) return props.setEmailError('이메일을 입력해주세요');

    if (isEmailSend) setIsError(true);

    const schoolEmail = `${props.email}@koreatech.ac.kr`;
    dispatch(sendUniversity(schoolEmail));
    setTime((prevState) => ({
      ...prevState,
      minutes: parseInt('05'),
      seconds: parseInt('00'),
    }));
    setIsEmailSend(true);
  };

  const onChangeAuthNumber = useCallback((e) => {
    const currentAuthNumber = e.target.value;
    setAuthNumber(currentAuthNumber);

    if (currentAuthNumber) {
      setIsAuthNumber(true);
      chat.authErrorMessage = '';
      setIsError(false);
    } else {
      setIsAuthNumber(false);
    }
  }, []);

  const authEmail = () => {
    const secret = authNumber;
    const schoolEmail = `${props.email}@koreatech.ac.kr`;
    setIsError(false);
    dispatch(authUniversity({ secret, schoolEmail }));
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(time.seconds) > 0) {
        setTime((prevState) => ({
          ...prevState,
          seconds: parseInt(time.seconds) - 1,
        }));
      }
      if (parseInt(time.seconds) === 0) {
        if (parseInt(time.minutes) === 0) {
          clearInterval(countdown);
          setIsError(isEmailSend);
        } else {
          setTime((prevState) => ({
            ...prevState,
            minutes: parseInt(time.minutes) - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    if (time.minutes == 0 && time.seconds == 0) {
      setAuthError('인증시간이 만료되었습니다.');
    } else {
      setAuthError('');
    }
    return () => clearInterval(countdown);
  }, [time.minutes, time.seconds]);

  useEffect(() => {
    setIsDisabled(!props.isEmail || !isAuthNumeber);
  }, [props.isEmail, isAuthNumeber]);
  useEffect(() => {
    if (chat.isAuth == true) return navigate('/chat/room');
  }, [chat.isAuth]);

  return (
    <>
      <AuthNumberForm>
        <AuthNumberInput
          value={authNumber}
          onChange={onChangeAuthNumber}
          disabled={!isEmailSend}
          placeholder="학교 이메일로 인증번호가 전송됩니다."
        />
        <AuthNumberButton onClick={sendEmail} type="button">
          {isEmailSend ? '재전송' : '인증번호 전송'}
        </AuthNumberButton>
        {isEmailSend && (
          <AuthNumTime>
            {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
          </AuthNumTime>
        )}
      </AuthNumberForm>
      <AuthNumberError>{isError ? authError : chat.authErrorMessage}</AuthNumberError>
      <AuthButton onClick={authEmail} disabled={isDisabled}>
        인증하기
      </AuthButton>
    </>
  );
};

export default UniversityAuth;

const AuthNumberForm = styled.form`
  display: flex;
  margin: 0px 594px 4px 608px;
  width: 368px;
`;

const AuthNumberInput = styled.input`
  width: 260px;
  padding-bottom: 2px;
  border: 0;
  background-color: #fff;
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

const AuthNumberError = styled.span`
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
