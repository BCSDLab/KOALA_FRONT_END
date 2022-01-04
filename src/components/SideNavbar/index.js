import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { opened } from '../../store/toggle';
import styled from 'styled-components';
import SideNavMenu from './SideNavMenu';

const Nav = styled.div`
  width: 80px;
  height: 1110px;
  margin-right: ${({ isSideMenu }) => !isSideMenu && '696px'};
  padding: ${({ isSideMenu }) => (isSideMenu ? ` 40px 17px 0px;` : `40px 17px 91px;`)};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 350px;
  height: 1110px;
  display: flex;
`;

const MenuButton = styled.button`
  width: 26px;
  height: 20px;
  margin: 0 10px 80px;
  padding: 3px 0;
  cursor: pointer;
  border: 0;
  background-color: #fff;
`;

const MenuImg = styled.img`
  width: 26px;
  height: 20px;
  object-fit: contain;
`;

const HashTagImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 0;
  object-fit: contain;
`;

const HistoryImg = styled.img`
  width: 32px;
  height: 32px;
  margin: ${({ isSideMenu }) =>
    isSideMenu
      ? `309px 0 0;`
      : `40px 0;
  `};
  object-fit: contain;
`;
const ChatImg = styled.img`
  width: 32px;
  height: 32px;
  margin: ${({ isSideMenu }) =>
    isSideMenu
      ? `45px 0 0;`
      : `0 0;
`};
  object-fit: contain;
`;
const SettingImg = styled.img`
  width: 32px;
  height: 32px;
  margin: ${({ isSideMenu }) =>
    isSideMenu
      ? `397px 0 0;`
      : `40px 0;
`};
  object-fit: contain;
`;

const SideNavbar = () => {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const dispatch = useDispatch();

  const toggleSideMenu = () => {
    dispatch(opened());
    console.log(isOpen);
  };

  return (
    <NavContainer>
      <Nav isSideMenu={isOpen}>
        <MenuButton onClick={toggleSideMenu}>
          <MenuImg src="/asset/MenuBtn.svg" alt="Vector" />
        </MenuButton>

        <HashTagImg src="/asset/Hashtag.svg" alt="keyword" />

        <HistoryImg isSideMenu={isOpen} src="/asset/History.svg" alt="history" />

        <ChatImg isSideMenu={isOpen} src="/asset/Chat.svg" alt="chat" />

        <SettingImg isSideMenu={isOpen} src="/asset/Setting.svg" alt="mypage" />
      </Nav>
      {isOpen && <SideNavMenu />}
    </NavContainer>
  );
};

export default SideNavbar;
