import React from 'react';
import * as S from './styles';
import LoginButton from 'components/Shared/LoginButton';
import { useSelector } from 'react-redux';

const KeywordHeader = ({ title }) => {
  const user = useSelector((state) => state.auth);
  const { isOpen } = useSelector((state) => state.toggle);

  return (
    <>
      {user.isLoggedIn && <S.Username>test</S.Username>}
      <LoginButton />
      <S.Title toggle={isOpen}>{title}</S.Title>
    </>
  );
};

export default KeywordHeader;
