import styled from 'styled-components';
import theme from '../../../theme';

const mobileL = theme.deviceSizes.mobileL;
const mobileS = theme.deviceSizes.mobileS;

export const CheckBox = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 24px;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  cursor: pointer;

  ${(props) => {
    if (props.checkAll) {
      return `
            background-image:url('/asset/check.svg');
            background-position:center;
            `;
    }
  }}
  @media screen and (max-width: ${mobileL}){
    margin: 0 8px 0 0;
  }
`;

export const CheckBoxTitle = styled.span`
  font-size: 12px;
  margin-right: 40px;
  cursor: pointer;
`;

export const MainList = styled.div`
  position: absolute;
  max-height: 600px;
  overflow-y: scroll;
  left: ${(props) => (props.toggle ? '501px' : '366px')};
  top: 320px;
  padding-right: 10px;
  @media screen and (max-width:${mobileL}){
    width: 100%;
    min-width: ${mobileS};
    position: static;
  }
`;

export const MainItem = styled.div`
  min-width: 1310px;
  display: flex;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1.5px solid #eeeeee;
`;

export const MainCheckBox = styled(CheckBox)`
  ${(props) => {
    if (props.checkSome) {
      return `
           background-image:url('/asset/check.svg');
           background-position:center;
           `;
    }
  }}
`;
export const MainCheckBoxTitle = styled(CheckBoxTitle)`
  min-width: 45px;
  margin-right: 125px;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
`;
export const MainContent = styled.div`
  min-width: 899px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 65px;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
`;

export const MainReadState = styled(MainContent)`
  min-width: 47px;
  text-align: center;
  color: #999999;
  margin-right: 24px;
`;

export const MainPeriod = styled(MainContent)`
  min-width: 62px;
  margin-right: 0px;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
`;
