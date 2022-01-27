import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMatchMedia from 'hooks/useMatchMedia';
import { useLocation } from 'react-router-dom';
import { opened } from '../../store/toggle';
import styled from 'styled-components';
import SideNavMenu from './SideNavMenu';

const Nav = styled.div`
  width: 80px;
  height: 1110px;
  margin-right: ${({ isSideMenu }) => !isSideMenu && '696px'};
  padding: ${({ isSideMenu }) => (isSideMenu ? ` 40px 17px 0px;` : `40px 17px 91px;`)};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 360px;
    height: 74px;
    margin: 645px 0 0 0;
    padding: 0;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
  }
`;

const NavContainer = styled.div`
  width: 350px;
  height: 1110px;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: flex;
    width: 360px;
    height: 74px;
  }
`;

const MenuButton = styled.button`
  width: 26px;
  height: 20px;
  margin: 0 10px 80px;
  padding: 3px 0;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: none;
  }
`;

const MenuImg = styled.img`
  width: 26px;
  height: 20px;
  object-fit: contain;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
  }
`;

const HashTagImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 0;
  object-fit: contain;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 23px;
    height: 23.3px;
    margin-left: 5px;
    object-fit: contain;
  }
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 23px;
    height: 23.3px;
    margin: 0;
    margin-left: 9px;
    margin-right: 11px;
    object-fit: contain;
  }
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 23px;
    height: 23.3px;
    margin: 0;
    margin-left: 5px;
    margin-right: 6px;
    object-fit: contain;
  }
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 23px;
    height: 23.3px;
    margin: 0;
    object-fit: contain;
  }
`;

const MenuItemText = styled.span`
  width: 45px;
  height: 18px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  display: flex;
  color: #999;
`;
const SettingText = styled(MenuItemText)`
  color: ${(props) => (props.current ? `#222` : `#999`)};
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  margin-left: 51px;
  width: 45px;
`;

const KeywordIcon = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 90px;
    height: 74px;
    padding: 15.2px 0 15.5px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
  }
`;

const HistoryIcon = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 90px;
    height: 74px;
    display: flex;
    padding: 15.2px 0 15.5px 21px;
    flex-direction: column;
    justify-content: center;
    align-item: center;
  }
`;
const ChattingIcon = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 90px;
    height: 74px;
    display: flex;
    padding: 15.2px 0 15.5px 26px;
    flex-direction: column;
    justify-content: center;
    align-item: center;
  }
`;
const SettingIcon = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 90px;
    height: 74px;
    display: flex;
    padding: 15.2px 0 15.5px 21px;
    flex-direction: column;
    justify-content: center;
    align-item: center;
  }
`;
const queries = ['(max-width: 375px)'];
const SideNavbar = () => {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const toggleSideMenu = () => {
    dispatch(opened());
  };

  const [mobile] = useMatchMedia(queries);

  return (
    <NavContainer>
      <Nav isSideMenu={isOpen}>
        <MenuButton onClick={toggleSideMenu}>
          <MenuImg src="/asset/MenuBtn.svg" alt="Vector" />
        </MenuButton>
        <KeywordIcon>
          <HashTagImg src="/asset/Hashtag.svg" alt="keyword" />
          {mobile && <MenuItemText>키워드</MenuItemText>}
        </KeywordIcon>
        <HistoryIcon>
          <HistoryImg isSideMenu={isOpen} src="/asset/History.svg" alt="history" />
          {mobile && <MenuItemText>히스토리</MenuItemText>}
        </HistoryIcon>
        <ChattingIcon>
          <ChatImg isSideMenu={isOpen} src="/asset/Chat.svg" alt="chat" />
          {mobile && <MenuItemText>채팅방</MenuItemText>}
        </ChattingIcon>
        <SettingIcon>
          <SettingImg isSideMenu={isOpen} src="/asset/Setting.svg" alt="mypage" />
          {mobile && <SettingText current={location.pathname === '/mypage'}>설정</SettingText>}
        </SettingIcon>
      </Nav>
      {isOpen && <SideNavMenu />}
    </NavContainer>
  );
};

export default SideNavbar;
