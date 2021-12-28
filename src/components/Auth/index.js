import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  alignitems: center;
`;

const Box = styled.div`
  width: 368px;
  padding-top: 200px;
`;

const MainLogo = styled.img`
  width: 125px;
  height: 34px;
  padding: 0 0px 0 125.2px;
  margin-bottom: 48px;
`;

const AuthTemplate = ({ children }) => (
  <AuthTemplateBlock>
    <Box>
      <MainLogo src="/asset/mainLogo.svg" alt="logo" />
      {children}
    </Box>
  </AuthTemplateBlock>
);

export default AuthTemplate;
