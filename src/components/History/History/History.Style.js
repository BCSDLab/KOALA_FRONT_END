import styled from 'styled-components';
import theme from '../../../theme';
import HistoryCheckBox from './HisoryCheckBox';
const { white, black, darkgray, lightgray, silver, gray, yellow } = theme.colors;
const tabletL = theme.deviceSizes.tabletL;
const mibileS = theme.deviceSizes.mobileS;


export const SelectAll = styled.div`
  margin: 0 40px 6px 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${tabletL}) {
    margin: 0 0 5px 0;
  }
`;
export const KeyWordAlert = styled.li`
  display: flex;
  position: relative;
  width: calc(100vw * 0.6671875 + 40px);
  max-width: 1281px;
  color: ${(props) => (props.isRead ? gray : darkgray)};
  padding: 15px 0 15px 0;
  border-bottom: 1px solid ${lightgray};
  @media screen and (max-width: ${tabletL}) {
    position: relative;
    width: 100%;
    justify-content: start;
    border: none;
  }
`;
export const KeyWordAlertList = styled.ol`
  height: calc(100vh - 337px);
  overflow-y: scroll;
  padding-right: 40px;
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    height: calc(100vh - 200px);
    margin: 0 0 0 5%;
  }
`;
export const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;
export const AlertBorderBox = styled.div`
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    &:after {
      display: block;
      content: '';
      margin-left: 3%;
      width: 88%;
      border-bottom: 1px solid ${lightgray};
    }
  }
`;
export const Sender = styled.div`
  font-size: 12px;
  white-space: nowrap;
  width: 45px;
  margin-right: 119px;
  @media screen and (max-width: ${tabletL}) {
    font-size: 14px;
    width: 52px;
    margin: 0;
  }
`;
export const AlertInfo = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
`
export const AlertTitle = styled.a`
  width: 70.17954722872756%;
  max-width: 899px;
  height: 18px;
  word-wrap : brek-word; 
  max-height: 18px;
  white-space: nowrap;
  margin-right: 178px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;

  color: ${(props) => (props.isRead ? gray : darkgray)};
  cursor: pointer;
  
  @media screen and (max-width: ${tabletL}) {
    display: block;
    max-width: 90%;
  }
`;
export const AlertContent = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: ${tabletL}) {
    display: block;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const AlertDetail = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
  }
`;
export const MailBrowse = styled.div`
  width: 47px;
  min-width: 47px;
  margin-right: 24px;
  text-align: center;
  font-size: 11px;
  color: ${gray};
`;
export const ReceiveDate = styled.div`
  width: 67px;
  min-width: 67px;
  font-size: 11px;
  @media screen and (max-width: ${tabletL}) {
    position: relative;
    right: 2%;
  }
`;
export const MenuList = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 31px 0 17px 0;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: ${tabletL}) {
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 17px;
  }
`;
export const Menues = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border: solid 1px ${(props) => (props.isClicked ? darkgray : lightgray)};
  margin-right: 15px;
  color: ${(props) => (props.isClicked ? darkgray : gray)};
  cursor: pointer;
  @media screen and (max-width: ${tabletL}) {
    width: 59px;
    height: 34px;
    padding: 0px;
    margin: 0 0 0 4px;
  }
`;
export const MenuLogo = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const MenuName = styled.div``;

export const PageWrapper = styled.div`
  display: block;
  font-size: 12px;
  @media screen and (max-width: ${tabletL}) {
    width: 100vw;
    margin: 0 0 74px 0;
  }
`;
export const Content = styled.div`
  position: relative;
  margin: 0 0 0 13px;
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    margin: 0 auto;
    top: 0;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
`;
export const MobileMenu = styled.img`
  @media screen and (max-width: ${tabletL}) {
    width: 24px;
    height: 24px;
    margin: 6px 0 0 0;
  }
`;
