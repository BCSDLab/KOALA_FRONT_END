import styled from 'styled-components';
import theme from '../../../theme';
const {white, black, darkgray, lightgray, silver, gray, yellow} = theme.colors;

const mobileL = theme.deviceSizes.mobileL;
export const MemoBlock = styled.div`
  width: 1033px;
  border: none;
  resize: none;
  font-family: 'NotoSansCJKKR';
  font-size: 12px;
`;
export const WriteBlock = styled.textarea`
  width: 1058px;
  height: 70px;
  border: none;
  resize: none;
  outline: none;
  background-color: ${lightgray};
  font-family: 'NotoSansCJKKR';
  font-size: 12px;
  @media screen and (max-width: ${mobileL}){
    width: 98%;
    height: 32px;
    font-size: 11px;
  }

`;
export const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuList = styled.div`
  display: flex;
  margin: 31px 0 32px 0;
  @media screen and (max-width: ${mobileL}){
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 17px;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1137px;
  padding: 8px;
  border: solid 1px ${lightgray};
  color: ${gray};
  cursor: pointer;
  @media screen and (max-width: ${mobileL}){
    margin: 0;
  }
`;
export const MenuLogo = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0px;
`;
export const MenuName = styled.div`
  width: 25px;
`;
export const Wrapper = styled.div`
  display: block;
  font-size: 12px;
  @media screen and (max-width: ${mobileL}){
    width: 100vw;
  }
`;
export const SelectAll = styled.div`
  width: 45px;
  margin-bottom: 6px;
`;
export const MemoOption = styled.div`
  font-size: 12px;
  width: 23px;
  color: ${gray};
  cursor: pointer;
`;
export const ReceiveDate = styled.div`
  font-size: 12px;
  color: ${gray};
`;
export const DivideLine = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 9px;
`;
export const AlertProp = styled.div`
  display: flex;
  margin-left: 19px;
`;
export const StorageAlert = styled.li`
  display: flex;
  width: 1294px;
  color: ${darkgray};
  padding: 0 0 15px 0;
  margin: 15px 0 0 0;
  border-bottom: 1px solid ${lightgray};
  @media screen and (max-width:${mobileL}){
    width: 100%;
  }
`;
export const MemoAlertWrapper = styled.div`
  display: block;
`;
export const AlertContent = styled.div`
  display: flex;

`;
export const AlertTitle = styled.a`
  width: 899px;
  max-width: 899px;
  max-height: 18px;
  margin-right: 45px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: ${mobileL}){
    width: 100%;
    max-width: 100%;
  }
`;

export const MemoCircle = styled.div`
  width: 8px;
  height: 8px;
  margin: 5px 8px 0px 8px;
  background-color: ${yellow};
  border-radius: 50%;
`;
export const MemoWrapper = styled.div`
  display: flex;
`;
export const memoContent = styled.div`
  display: block;
  height: 73px;
`;

export const LetterCounter = styled.div`
  position: relative;
  text-align: right;
  left: 990px;
  bottom: 30px;
  width: 52px;
  height: 20px;
  font-size: 12px;
`;

export const LettterLength = styled.span``;

export const KeyWordAlertList = styled.ol`
  height: 600px;
  overflow-y: ${(props) => (props.scrollOption ? 'scroll' : 'none')};
  @media screen and (max-width: ${mobileL}) {
    width: 100%;
    height: 71vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

