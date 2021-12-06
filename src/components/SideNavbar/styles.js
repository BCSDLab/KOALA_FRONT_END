import styled from 'styled-components';

export const SideMenuBackground = styled.div`
  width: 270px;
  height: 860px;
  padding: 36.5px 0 38px;
  background-color: #f6f7f8;
`;

export const SideMenuContainer = styled.div`
  margin: 0px 0px 69px 18px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 21.8px;
`;

const List = styled.div`
  width: 270px;
  height: 76px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-align: left;
`;

const Link = styled.div`
  width: 270px;
  height: 44px;
  display: flex;
  align-items: center;
  text-align: left;
`;

export const KeywordMain = styled.div`
  width: 44px;
  height: 21px;
  font-size: 14px;
  margin: 6px 1px 5px 24px;
  display: flex;
  text-align: left;
  color: #222;
`;

export const KeywordList = styled.div`
  width: 270px;
  height: 32px;
  display: flex;
`;
export const KeywordDropdown = styled.img`
  width: 24px;
  height: 24px;
  margin: 2.2px 169px 24px 6px;
`;

export const KeywordElement = styled.div`
  width: 270px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  text-align: left;
`;

export const KeywordDropmenu = styled(Link)`
  font-size: 14px;
`;

export const KeywordText = styled.div`
  width: 190px;
  height: 21px;
  padding: 12px 0 11.5px 32px;
`;

export const KeywordUpdate = styled.div`
  width: 24px;
  height: 18px;
  margin: 0 24px 0 0;
  background-color: #ffd25d;
  font-size: 12px;
  text-align: center;
  color: #fff;
`;

export const AddImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 18px 8px 15.5px 32px;
`;

export const AddKeyword = styled(List)``;

export const AddText = styled.div`
  width: 94px;
  height: 21px;
  margin: 22px 0 15.5px 8px;
  font-size: 12px;
  text-align: left;
  color: #222;
`;

export const HistoryList = styled(List)`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const HistoryLink = styled(Link)`
  margin: 27.5px 0;
  font-size: 14px;
`;
export const HistoryText = styled.span`
  width: 52px;
  height: 21px;
  margin: 27.5px 194px 27.5px 24px;
  font-size: 13px;
  text-align: left;
  color: #222;
`;

export const ChatList = styled(List)``;

export const ChatLink = styled.div`
  font-size: 12px;
`;

export const ChatText = styled.div`
  width: 39px;
  height: 21px;
  padding: 12px 207px 11px 24px;
`;

export const SetList = styled.div`
  width: 270px;
  height: 92px;
  padding: 220px 0 0 0;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
`;

export const Set = styled(Link)`
  padding: 0 0 4px 0;
  font-size: 14px;
`;

export const SetText = styled.div`
  height: 24px;
  padding: 12px 208px 8px 12px;
`;

export const Contact = styled(Link)`
  font-size: 14px;
`;

export const ContactText = styled.div`
  height: 24px;
  padding: 32px 179px 12px 12px;
`;