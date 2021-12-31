import React from 'react';
import styled from 'styled-components';

const SchoolAuthContent = styled.div`
  display: flex;
`;
const SchoolAuthState = styled.div`
  width: 39px;
  height: 21px;
  flex-grow: 0;
  margin: 10px 165px 9px 80px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  text-align: center;
  color: #222;
`;
const SchoolAuthButton = styled.button`
  width: 100px;
  height: 40px;
  flex-grow: 0;
  background-color: #222;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #fff;
`;

const SchoolAuth = () => {
  return (
    <SchoolAuthContent>
      <SchoolAuthState>미인증</SchoolAuthState>
      <SchoolAuthButton>인증하기</SchoolAuthButton>
    </SchoolAuthContent>
  );
};

export default SchoolAuth;
