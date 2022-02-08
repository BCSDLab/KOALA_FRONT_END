import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMatchMedia from 'hooks/useMatchMedia';
import { Link, useLocation } from 'react-router-dom';
import { opened } from '../../store/toggle';
import styled from 'styled-components';
import SideNavMenu from './SideNavMenu';

const Nav = styled.div`
  width: 80px;
  height: 100%;
  margin-right: ${({ isSideMenu }) => !isSideMenu && '696px'};
  padding: ${({ isSideMenu }) => (isSideMenu ? ` 40px 17px 0px;` : `40px 17px 91px;`)};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 100%;
    height: 74px;
    margin: 0 0 0 0;
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
    width: 0;
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
    display: none;
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
  color: ${(props) => (props.current ? `#222` : `#999`)};
  font-family: NotoSansCJKKR;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  display: flex;
`;

const Icon = styled(Link)`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 25%;
    height: 74px;
    display: flex;
    border-top: ${(props) => props.current && `2px solid #222`};
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const KeywordIcon = styled(Icon)``;
const HistoryIcon = styled(Icon)``;
const ChattingIcon = styled(Icon)``;
const SettingIcon = styled(Icon)``;

const queries = ['(max-width: 375px)'];
const SideNavbar = () => {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const dispatch = useDispatch();
  const location = useLocation();
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
        <KeywordIcon to="#" current={location.pathname.includes('/keyword') ? 1 : 0}>
          <HashTagImg
            src={location.pathname.includes('/keyword') ? '/asset/Hashtagblack.svg' : '/asset/Hashtag.svg'}
            alt="keyword"
          />
          {mobile && <MenuItemText current={location.pathname.includes('/keyword') ? 1 : 0}>키워드</MenuItemText>}
        </KeywordIcon>
        <HistoryIcon to="#" current={location.pathname.includes('/history') ? 1 : 0}>
          <HistoryImg
            isSideMenu={isOpen}
            src={location.pathname.includes('/history') ? '/asset/HistoryBlack.svg' : '/asset/History.svg'}
            to="#"
            alt="history"
          />
          {mobile && <MenuItemText current={location.pathname.includes('/history') ? 1 : 0}>히스토리</MenuItemText>}
        </HistoryIcon>
        <ChattingIcon to="#" current={location.pathname.includes('/chat') ? 1 : 0}>
          <ChatImg
            isSideMenu={isOpen}
            src={location.pathname.includes('/chat') ? '/asset/Chatblack.svg' : '/asset/Chat.svg'}
            alt="chat"
          />
          {mobile && <MenuItemText current={location.pathname.includes('/chat') ? 1 : 0}>채팅방</MenuItemText>}
        </ChattingIcon>
        <SettingIcon to="/mypage" current={location.pathname === '/mypage' ? 1 : 0}>
          <SettingImg
            isSideMenu={isOpen}
            src={location.pathname === '/mypage' ? '/asset/Settingblack.svg' : '/asset/Setting.svg'}
            alt="mypage"
          />
          {mobile && <MenuItemText current={location.pathname === '/mypage' ? 1 : 0}>설정</MenuItemText>}
        </SettingIcon>
      </Nav>
      {isOpen && <SideNavMenu />}
    </NavContainer>
  );
};

export default SideNavbar;
