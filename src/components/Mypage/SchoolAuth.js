import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SchoolAuthContent = styled.div`
  display: flex;
`;
const SchoolAuthState = styled.div`

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

/*
  {
    TODO:
    학교인증에 대한 결과로 400일 경우 미인증으로 SchoolAuthState에 표시
    200 학교명을 띄운고 인증하기 버튼 제거
  }
*/
const SchoolAuth = () => {
  const AuthState = useSelector((state)=>state.myPage.schoolAuth);

  return (
    <SchoolAuthContent>
      { AuthState ?
        <>
        <SchoolAuthState>미인증</SchoolAuthState>
        <SchoolAuthButton>인증하기</SchoolAuthButton>
        </>
        : <SchoolAuthState>한국기술교육대학교</SchoolAuthState>
      }
     
    </SchoolAuthContent>
  );
};

export default SchoolAuth;
