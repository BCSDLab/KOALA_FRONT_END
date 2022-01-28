import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenuBackground = styled.div`
  width: 270px;
  height: 1110px;
  flex-grow: 0;
  margin-right: 96px;
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
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
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
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: ${(props) => props.theme.colors.gray};
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
  margin: 16px 0 0 0;
`;

export const KeywordSection = styled.li`
  display: flex;
  border: none;
  padding: 11px 17px 12px 32px;
  cursor: pointer;
  font-size: 14px;
`;

export const KeywordName = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkgray};
  font-weight: normal;
`;

export const KeywordCount = styled.span`
  width: 24px;
  height: 18px;
  background: ${(props) => props.theme.colors.yellow};
  position: absolute;
  right: 24px;
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const AddKeywordSection = styled.div`
  display: flex;
  margin: 11px 0 15.5px 0;
  padding: 0 17px 0 32px;
`;

export const AddImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const AddText = styled(Link)`
  margin-left: 8px;
  position: relative;
  top: 1px;
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.colors.darkgray};
`;

export const HistoryList = styled(List)`
  height: 75px;
  border-top: 1px solid ${(props) => props.theme.colors.lightgray};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

export const HistoryLink = styled(StyledLinkDiv)`
  margin: 27.5px 0px 26.5px 0;
  font-size: 14px;
`;
export const HistoryText = styled(MenuTitle)`
  margin: 27.5px 194px 27.5px 24px;
`;

export const ChatList = styled(List)``;

export const ChatLink = styled(Link)``;

export const ChatText = styled(MenuTitle)`
  font-size: 14px;
  padding: 12px 207px 11px 24px;
`;

export const SetList = styled.div`
  width: 270px;
  height: 92px;
  padding: 370.5px 0 0 0;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
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
