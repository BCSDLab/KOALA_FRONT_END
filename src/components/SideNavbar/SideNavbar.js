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

const KeywordBlock = styled.div`
  width: 32px;
  height: 32px;
  margin: 20px 0;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HistoryBlock = styled.div`
  width: 32px;
  height: 32px;
  ${({ sideMenu }) => {
    return sideMenu ? `margin :   289px 0 0 0 ` : `margin: 20px 0`;
  }};
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatBlock = styled.div`
  width: 32px;
  height: 32px;
  ${({ sideMenu }) => {
    return sideMenu ? `margin :   45px 0 0 0 ` : `margin: 20px 0`;
  }};
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetBlock = styled.div`
  width: 32px;
  height: 32px;
  ${({ sideMenu }) => {
    return sideMenu ? `margin :   397px 0 0 0 ` : `margin: 20px 0`;
  }};
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenMenu = styled.div`
  width: 26px;
  height: 20px;
  margin: 0 3px 60px;
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
            <img src="/asset/MenuBtn.svg" alt="Vector" />
          </MenuButton>
        </OpenMenu>
        <KeywordBlock>
          <img src="/asset/Hashtag.svg" alt="keyword" />
        </KeywordBlock>
        <HistoryBlock sideMenu={sideMenu}>
          <img src="/asset/History.svg" alt="history" />
        </HistoryBlock>
        <ChatBlock sideMenu={sideMenu}>
          <img src="/asset/Chat.svg" alt="chat" />
        </ChatBlock>
        <SetBlock sideMenu={sideMenu}>
          <img src="/asset/Setting.svg" alt="mypage" />
        </SetBlock>
      </Nav>
      {sideMenu ? <SideNavMenu /> : null}
    </NavContainer>
  );
};

export default SideNavbar;
