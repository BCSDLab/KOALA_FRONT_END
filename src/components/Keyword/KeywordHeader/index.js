import React from 'react';
import * as S from './styles';
import LoginButton from 'components/Shared/LoginButton';
import { useSelector } from 'react-redux';

const KeywordHeader = ({ title, toggle }) => {
  const user = useSelector((state) => state.auth);

  return (
    <>
      {user.isLoggedIn && <S.Username>test</S.Username>}
      <LoginButton />
      <S.Title toggle={toggle}>{title}</S.Title>
    </>
  );
};

export default KeywordHeader;
