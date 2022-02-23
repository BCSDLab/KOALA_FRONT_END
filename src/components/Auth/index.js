import React from 'react';
import styled from 'styled-components';
import * as S from './styles';
import theme from 'theme';

const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  alignitems: center;

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

const queries = ['(max-width: ' + theme.deviceSizes.mobileL + ')'];

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <Box>
        <S.MainLogo>
          <S.MainLogoImg />
        </S.MainLogo>

        {children}
      </Box>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
