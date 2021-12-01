import React from 'react';
import styled from 'styled-components';

const SideMenuBackground = styled.div`
  width: 270px;
  height: 1110px;
  padding: 40px 0 47px;
  background-color: #f6f7f8;
`;

const SideMenuContainer = styled.div``;

const Logo = styled.img`
  width: 80px;
  height: 21.8px;
  margin: 0 116px 84.2px 24px;
  object-fit: contain;
`;

const Extension = () => {
  return (
    <SideMenuBackground>
      <SideMenuContainer>
        <Logo src="/asset/Group 1583.png" alt="Logo" />
      </SideMenuContainer>
    </SideMenuBackground>
  );
};

export default Extension;
