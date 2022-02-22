import React from 'react';
import * as S from './styles';
import useMatchMedia from 'hooks/useMatchMedia';
import LoginButton from 'components/Shared/LoginButton';
import MobileTopBar from 'components/Shared/MobileTopBar';
import { useSelector } from 'react-redux';

const queries = ['(max-width: 400px)', '(min-width: 800px)'];
const KeywordHeader = ({ title }) => {
  const user = useSelector((state) => state.auth);
  const { isOpen } = useSelector((state) => state.toggle);
  const [mobile, desktop] = useMatchMedia(queries);

  return (
    <S.HeaderContainer>
      {mobile ? (
        <MobileTopBar content={title}></MobileTopBar>
      ) : (
        <>
          {user.isLoggedIn && <S.Username>test</S.Username>}
          <LoginButton />
          <S.Title toggle={isOpen}>{title}</S.Title>
        </>
      )}
    </S.HeaderContainer>
  );
};

export default KeywordHeader;
