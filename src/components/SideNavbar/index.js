import React, { useState } from 'react';
import styled from 'styled-components';
import SideNavMenu from './SideNavMenu';

const Nav = styled.div`
  width: 80px;
  height: 90%;
  padding: 40px 24px 91px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Block = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KeywordBlock = styled(Block)`
  margin: 20px 0;
`;

const HistoryBlock = styled(Block)`
  margin: ${({ isSideMenu }) => (isSideMenu ? `289px 0 0 0 ` : `20px 0`)}};
`;

const ChatBlock = styled(Block)`
  margin: ${({ isSideMenu }) => (isSideMenu ? `  45px 0 0 0 ` : ` 20px 0`)}};
`;

const SetBlock = styled(Block)`
  margin: ${({ isSideMenu }) => (isSideMenu ? ` 250px 0 0 0  ` : ` 20px 0`)}};
`;

const OpenMenu = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 26px;
  height: 20px;
  margin: 0 3px 60px;
  cursor: pointer;
  border: 0;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 395px;
  height: 100%;
  display: flex;
`;

const SideNavbar = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenu((prev) => !prev);
  };

  return (
    <NavContainer>
      <Nav>
        <MenuButton type="button" onClick={toggleSideMenu}>
          <img src="/asset/MenuBtn.svg" alt="Vector" />
        </MenuButton>

        <KeywordBlock>
          <img src="/asset/Hashtag.svg" alt="keyword" />
        </KeywordBlock>
        <HistoryBlock isSideMenu={isSideMenu}>
          <img src="/asset/History.svg" alt="history" />
        </HistoryBlock>
        <ChatBlock isSideMenu={isSideMenu}>
          <img src="/asset/Chat.svg" alt="chat" />
        </ChatBlock>
        <SetBlock isSideMenu={isSideMenu}>
          <img src="/asset/Setting.svg" alt="mypage" />
        </SetBlock>
      </Nav>
      {isSideMenu && <SideNavMenu />}
    </NavContainer>
  );
};

export default SideNavbar;
