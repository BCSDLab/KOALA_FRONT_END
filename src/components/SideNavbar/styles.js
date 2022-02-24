import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenuBackground = styled.div`
  width: 270px;
  height: 100%;
  flex-grow: 0;
  padding: 40px 0 0;
  background-color: #f6f7f8;
`;

export const SideMenuContainer = styled.div``;

export const Logo = styled.img`
  width: 80px;
  height: 21.8px;
  flex-grow: 0;
  margin: 0 116px 84.2px 24px;
  object-fit: contain;
`;

const List = styled.div`
  width: 270px;
  height: 76px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-align: left;
`;

const StyledLinkDiv = styled(Link)`
  width: 270px;
  height: 44px;
  display: flex;
  align-items: center;
  text-align: left;
`;

export const KeywordDropdown = styled.div`
  position: relative;
  width: 270px;
`;

const MenuTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.darkgray};
`;

export const KeywordMain = styled(MenuTitle)`
  margin: 0px 0px 27px 24px;
`;

export const KeywordSetting = styled(Link)`
  right: 17px;
  position: absolute;
  font-size: 14px;
  text-align: right;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
`;

export const KeywordDropdownButton = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 14px;
  cursor: pointer;
`;

export const KeywordList = styled.ul`
  width: 270px;
  padding: 0 0;
  height: 225px;
  margin: 16px 0 0 0;
  ${(props) => {
    if (props.dropdownToggle) {
      return `
        display:none;
      `;
    } else {
      return `
        display:block;
      `;
    }
  }};
`;

export const KeywordSection = styled.li`
  display: flex;
  border: none;
  padding: 11px 17px 12px 32px;
  cursor: pointer;
  font-size: 14px;
  background-color: ${(props) => (props.selectItemId ? '#222' : '#f6f7f8')};
`;

export const KeywordName = styled.span`
  font-size: 14px;
  color: ${(props) => (props.selectItemId ? '#fff' : '#222')};
  font-weight: normal;
`;

export const KeywordCount = styled.span`
  width: 24px;
  height: 18px;
  background-color: ${(props) => (props.selectItemId ? '#222' : '#ffd25d')};
  position: absolute;
  right: 24px;
  font-size: 12px;
  text-align: center;
  color: ${(props) => (props.selectItemId ? '#ffd25d' : '#fff')};
`;

export const AddKeywordSection = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  margin: 11px 0 2.5px 0;
  padding: 0 17px 0 32px;
  background-color: ${(props) => (props.selectAddKeyword ? '#222' : '#f6f7f8')};
  cursor: pointer;
`;

export const AddImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const AddText = styled.div`
  margin-left: 8px;
  position: relative;
  top: 1px;
  font-size: 14px;
  line-height: 43px;
  color: ${(props) => (props.selectAddKeyword ? props.theme.colors.white : props.theme.colors.darkgray)};
`;

export const HistoryList = styled(List)`
  height: 75px;
  border-top: 1px solid ${(props) => props.theme.colors.lightgray};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

export const HistoryLink = styled(StyledLinkDiv)`
  margin: 27.5px 0px 26.5px 0;
  font-size: 14px;
  background-color: ${(props) => props.current && props.theme.colors.darkgray};
`;
export const HistoryText = styled(MenuTitle)`
  margin: 27.5px 194px 27.5px 24px;
  color: ${(props) => (props.current ? props.theme.colors.white : props.theme.colors.darkgray)};
`;

export const ChatList = styled(List)`
  display: flex;
  align-items: center;
`;

export const ChatLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 15.5px;
  width: 270px;
  height: 44px;
  background-color: ${(props) => props.current && props.theme.colors.darkgray};
`;

export const ChatText = styled(MenuTitle)`
  font-size: 14px;
  margin-left: 24px;
  color: ${(props) => (props.current ? props.theme.colors.white : props.theme.colors.darkgray)};
`;

export const SetList = styled.div`
  width: 270px;
  height: 92px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
  position: absolute;
  bottom: 41px;
`;

export const Set = styled(StyledLinkDiv)`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.current && props.theme.colors.darkgray};
`;

export const SetText = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin-left: 32px;
  color: ${(props) => (props.current ? props.theme.colors.white : props.theme.colors.darkgray)};
`;

export const Contact = styled(StyledLinkDiv)`
  font-size: 14px;
`;

export const ContactText = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin: 10px 0 14px 32px;
`;

export const MobileKeyWordHeader = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 25px);
  height: 24px;
  justify-content: space-between;
  margin: 12.6px 16px 0px 9px;
`;

export const MobileKeyWordName = styled.span`
  font-size: 16px;
`;

export const FixKeyWordBtn = styled(Link)`
  font-size: 14px;
  display: block;
  // width: 24px;
  color: #999;
  cursor: pointer;
`;

export const BackBtn = styled.img`
  width: 24px;
  height: 24px;
`;
