import React from 'react';
import styled from 'styled-components';
import * as S from './styles';
import useMatchMedia from 'hooks/useMatchMedia';
import { useLocation } from 'react-router';

const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    padding: 0 16px;
  }
`;

const Box = styled.div`
  width: 368px;
  padding-top: 200px;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    padding-top: 54px;
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    padding-top: 48px;
    width: 328px;
  }
`;

const AuthTemplate = ({ children }) => {
  const location = useLocation();
  const queries = ['(max-width: 450px)'];
  const [mobile] = useMatchMedia(queries);
  return (
    <AuthTemplateBlock>
      <Box>
        {(location.pathname === '/auth' || !mobile) && (
          <S.MainLogo>
            <S.MainLogoImg />
          </S.MainLogo>
        )}
        {children}
      </Box>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
