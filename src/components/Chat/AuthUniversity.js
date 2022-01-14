import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import UniversityAuth from './UniversityAuth';

const AuthUniversity = () => {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailError, setEmailError] = useState('');

  const onChangeEmail = useCallback((e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    if (currentEmail) {
      setIsEmail(true);
      setEmailError('');
    } else {
      setIsEmail(false);
    }
  }, []);
  return (
    <>
      <UniversityEmailTitle>학교 이메일</UniversityEmailTitle>
      <UniversityEmailInput value={email} onChange={onChangeEmail} placeholder="학교 이메일을 입력해주세요" />
      <UniversityEmail>@koreatech.ac.kr</UniversityEmail>
      <UniversityEmailError>{emailError}</UniversityEmailError>
      <AuthNumberTitle>인증번호</AuthNumberTitle>
      <UniversityAuth email={email} isEmail={isEmail} setEmailError={setEmailError} />
    </>
  );
};

const UniversityEmailTitle = styled.div`
  width: 68px;
  height: 21px;
  margin: 0px 894px 16px 608px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  text-align: left;
  color: #222;
`;
const UniversityEmailInput = styled.input`
  width: 368px;
  margin: 0px 594px 4px 608px;
  padding-bottom: 2px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4;
`;
const UniversityEmail = styled.div`
  width: 115px;
  height: 21px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  position: absolute;
  top: 375px;
  left: 861px;
  text-align: right;
  color: #222;
`;
const UniversityEmailError = styled.div`
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
const AuthNumberTitle = styled.div`
  width: 52px;
  height: 21px;
  margin: 48px 910px 16px 608px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  text-align: left;
  color: #222;
`;

export default AuthUniversity;
