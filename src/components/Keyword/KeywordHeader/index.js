import React from 'react';
import * as S from './styles';
import LoginButton from 'components/Shared/LoginButton';
import { useSelector } from 'react-redux';

const KeywordHeader = ({ title, toggle }) => {
  const user = useSelector((state) => state.auth);

  return (
    <>
      <S.UserContainer toggle={toggle}>
        {user.isLoggedIn && <S.Username>test</S.Username>}
        <S.LoginButton>{user.isLoggedIn ? '로그아웃' : '로그인'}</S.LoginButton>
      </S.UserContainer>
      <S.Title toggle={toggle}>{title}</S.Title>
    </>
  );
};

export default KeywordHeader;
