import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const SchoolAuth = ({ isAuth }) => {
  return (
    <S.SchoolAuthContent>
      {isAuth == false ? (
        <>
          <S.SchoolAuthState>미인증</S.SchoolAuthState>
          <Link to="/chat/auth">
            <S.SchoolAuthButton>인증하기</S.SchoolAuthButton>
          </Link>
        </>
      ) : (
        <S.SchoolAuthState>한국기술교육대학교</S.SchoolAuthState>
      )}
    </S.SchoolAuthContent>
  );
};

export default SchoolAuth;
