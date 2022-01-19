import React from 'react';
import * as S from './styles';

const SchoolAuth = ({ isAuth }) => {
  return (
    <S.SchoolAuthContent>
      {isAuth == false ? (
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
