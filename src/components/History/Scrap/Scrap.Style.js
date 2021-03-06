import styled from 'styled-components';
import theme from '../../../theme';
const {white, black, darkgray, lightgray, silver, gray, yellow} = theme.colors;

const tabletL = theme.deviceSizes.tabletL;
export const MemoBlock = styled.div`
  width: 65.6440281030445%;
  border: none;
  resize: none;
  font-family: 'NotoSansCJKKR';
  font-size: 12px;
`;
export const WriteBlock = styled.textarea`
  width: 100%;
  max-width: 1077px;
  height: 70px;
  border: none;
  resize: none;
  outline: none;
  background-color: ${lightgray};
  font-family: 'NotoSansCJKKR';
  font-size: 12px;
  @media screen and (max-width: ${tabletL}){
    width: 98%;
    height: 32px;
    font-size: 11px;
  }

`;
export const Content = styled.div`
  margin: 0 0 0 13px;
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    margin: 0px;
  }
`;
export const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuList = styled.div`
  display: flex;
  margin: 31px 0 17px 0;
  width: ${props => props.isToggleOpen?'calc((100vw - 354px) * 0.818007662835249);':'calc((100vw - 144px) * 0.7597864768683274 + 40px);'}
  max-width: 1281px;
  justify-content: space-between;
  @media screen and (max-width: ${tabletL}){
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 17px;
  }
`;
export const Menu = styled.div`
  display: flex;
  width: 43px;
  align-items: center;
  padding: 8px;
  border: solid 1px ${lightgray};
  color: ${gray};
  cursor: pointer;
  @media screen and (max-width: ${tabletL}){
    margin: 0;
  }
`;
export const MenuLogo = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
export const MenuName = styled.div`
  width: 25px;
`;
export const Wrapper = styled.div`
  display: block;
  font-size: 12px;
  @media screen and (max-width: ${tabletL}){
    width: 100vw;
  }
`;
export const SelectAll = styled.div`
  width: 45px;
  display: flex;
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
position: absolute;
right: 0px;
`;
export const StorageAlert = styled.li`
  display: flex;
  width: ${props => props.isToggleOpen?'calc((100vw - 354px) * 0.818007662835249);':'calc((100vw - 144px) * 0.7597864768683274 + 40px);'}
  max-width: 1281px;
  color: ${darkgray};
  padding: 0 0 15px 0;
  margin: 15px 0 0 0;
  border-bottom: 1px solid ${lightgray};
  position: relative;
  @media screen and (max-width:${tabletL}){
    width: 100%;
  }
`;
export const MemoAlertWrapper = styled.div`
  display: block;
  width: 100%;
`;
export const AlertContent = styled.div`
  display: flex;
  width: ${props => props.isToggleOpen?'calc((100vw - 384px) * 0.4552864583333333);':'calc((100vw - 114px) * 0.4977851605758583 + 40px);'}
  `;
export const AlertTitle = styled.a`
width: 70.7017954722872756%;
max-width: 899px;
  height: 18px;
  word-wrap : brek-word; 
  max-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  @media screen and (max-width: ${tabletL}){
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
  width: 100%;
`;
export const MemoPanel = styled.div`
  position: relative;
`
export const LetterCounter = styled.div`
  position: absolute;
  width: 38px;
  bottom: 23px;
  right: 16px;
  text-align: right;
  height: 20px;
  font-size: 12px;
`;

export const LettterLength = styled.span``;

export const KeyWordAlertList = styled.ol`
  height: calc(100vh - 337px);
  overflow-y: ${(props) => (props.scrollOption ? 'scroll' : 'none')};
  &::-webkit-scrollbar { 
    display: none;
    width: 0px;
  }
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    height: calc(100vh - 200px);
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar { 
      display: none;
      width: 0
  }
  }
`;

