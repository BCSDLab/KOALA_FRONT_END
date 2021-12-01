/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';
import SideNavMenu from './SideNavMenu';

const Nav = styled.div`
  width: 80px;
  height: 1110px;
  padding: 40px 24px 91px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBlock = styled.div`
  width: 32px;
  height: 32px;
  margin: 20px 0;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenMenu = styled.div`
  width: 26px;
  height: 20px;
  margin: 0 3px 80px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 26px;
  height: 20px;
  cursor: pointer;
  object-fit: contain;
  border: 0;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 395px;
  height: 1110px;
  display: flex;
`;

const SideNavbar = () => {
  const [sideMenu, setsideMenu] = useState(false);

  const showSideMenu = () => {
    setsideMenu((current) => !current);
  };

  return (
    <NavContainer>
      <Nav>
        <OpenMenu>
          <MenuButton type="button" onClick={() => showSideMenu()}>
            <img src="/asset/Vector.png" alt="Vector" />
          </MenuButton>
        </OpenMenu>
        <ImgBlock>
          <img src="/asset/hashtag.png" alt="keyword" />
        </ImgBlock>
        <ImgBlock>
          <img src="/asset/archive.png" alt="history" />
        </ImgBlock>
        <ImgBlock>
          <img src="/asset/chat.png" alt="chat" />
        </ImgBlock>
        <ImgBlock>
          <img src="/asset/cog.png" alt="mypage" />
        </ImgBlock>
      </Nav>
      {sideMenu ? <SideNavMenu /> : null}
    </NavContainer>
  );
};

export default SideNavbar;
