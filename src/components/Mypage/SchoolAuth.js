import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

/*
  {
    TODO:
    학교인증에 대한 결과로 400일 경우 미인증으로 SchoolAuthState에 표시
    200 학교명을 띄운고 인증하기 버튼 제거
  }
*/
const SchoolAuth = () => {
  const AuthState = useSelector((state) => state.myPage.schoolAuth);

  return (
    <S.SchoolAuthContent>
      {AuthState ? (
        <>
          <S.SchoolAuthState>미인증</S.SchoolAuthState>
          <S.SchoolAuthButton>인증하기</S.SchoolAuthButton>
        </>
      ) : (
        <S.SchoolAuthState>한국기술교육대학교</S.SchoolAuthState>
      )}
    </S.SchoolAuthContent>
  );
};

export default SchoolAuth;
