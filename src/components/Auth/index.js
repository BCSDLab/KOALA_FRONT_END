import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 368px;
  padding-top: 200px;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 100%;
    padding: 0;
  }
`;

const MainLogo = styled.div`
  margin-bottom: 48px;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: none;
  }
`;

const MainLogoImg = styled.img`
  width: 125px;
  height: 34px;
  left: 125.2px;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 158px;
    height: 43px;
    left: 0;
  }
`;

const AuthTemplate = ({ children }) => (
  <AuthTemplateBlock>
    <Box>
      <MainLogo>
        <MainLogoImg src="/asset/mainLogo.svg" alt="logo" />
      </MainLogo>
      {children}
    </Box>
  </AuthTemplateBlock>
);

export default AuthTemplate;
