import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  padding: 0 776px 0 776px;
  display: flex;
  justify-content: center;
  alignitems: center;
  width: 368px;
`;

const Box = styled.div`
  width: 368px;
  padding-top: 280px;
`;

const MainLogo = styled.img`
  width: 125px;
  height: 34px;
  padding: 0 125px 0 125.2px;
  margin-bottom: 40px;
`;

// eslint-disable-next-line react/prop-types
const AuthTemplate = ({ children }) => (
  <AuthTemplateBlock>
    <Box>
      <MainLogo src="/asset/Logo.png" alt="logo" />
      {children}
    </Box>
  </AuthTemplateBlock>
);

export default AuthTemplate;
