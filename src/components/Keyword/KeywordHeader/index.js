import React from 'react';
import * as S from './styles';
import useMatchMedia from 'hooks/useMatchMedia';
import MobileTopBar from 'components/Shared/MobileTopBar';
import { useSelector } from 'react-redux';

const queries = ['(max-width: 1024px)'];
const KeywordHeader = ({ title }) => {
  const user = useSelector((state) => state.auth);
  const { isOpen } = useSelector((state) => state.toggle);
  const [desktop] = useMatchMedia(queries);

  return (
    <S.HeaderContainer>
      {desktop ? (
        <MobileTopBar content={title}></MobileTopBar>
      ) : (
        <>
          <S.Title toggle={isOpen}>{title}</S.Title>
        </>
      )}
    </S.HeaderContainer>
  );
};

export default KeywordHeader;
