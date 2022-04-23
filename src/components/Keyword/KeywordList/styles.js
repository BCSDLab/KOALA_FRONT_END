import styled from 'styled-components';
import theme from '../../../theme';

const tabletL = theme.deviceSizes.tabletL;
const mobileS = theme.deviceSizes.mobileS;

export const CheckBox = styled.div`
  min-width: 16px;
  min-height: 16px;
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
  @media screen and (max-width: ${tabletL}) {
    margin: 0 8px 0 0;
  }
`;

export const CheckBoxTitle = styled.span`
  font-size: 12px;
  margin-right: 40px;
  cursor: pointer;
`;

export const MainList = styled.div`
  width: 100%;
  min-width: 800px;
  height: calc(100vh - 286px);
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 10px;
  margin-top: 32px;
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    height: calc(100vh - 225px);
    min-width: ${mobileS};
    overflow-x: none;
    position: static;
    padding: 0px;
    margin-top: 0;
  }
`;

export const MainItem = styled.div`
  width: 100%;
  display: flex;
  white-space: nowrap;
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
  @media screen and (max-width: ${tabletL}) {
    width: 16px;
    height: 16px;
  }
`;
export const MainCheckBoxTitle = styled(CheckBoxTitle)`
  width: 60px;
  margin-right: 125px;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
`;
export const MainContentLink = styled.a`
  width: calc(100% - 204px - 138px);
`;

export const MainContent = styled.div`
  width: 100%;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 18px;
  cursor: pointer;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
`;

export const MainReadState = styled(MainContent)`
  width: 50px;
  color: #999999;
  text-align: center;
  margin-right: 24px;
`;

export const MainPeriod = styled(MainContent)`
  width: 62px;
  margin-right: 0px;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
`;
