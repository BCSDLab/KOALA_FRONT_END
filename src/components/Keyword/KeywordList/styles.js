import styled from 'styled-components';
import theme from '../../../theme';

const tabletL = theme.deviceSizes.tabletL;
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
  position: absolute;
  width: 1325px;
  height: 600px;
  overflow-y: scroll;
  left: ${(props) => (props.toggle ? '501px' : '366px')};
  top: 320px;
  padding-right: 10px;
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    min-width: ${mobileS};
    overflow-x: none;
    position: static;
    padding: 0px;
  }
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    height: 400px;
    width: 900px;
  }
`;

export const MainItem = styled.div`
  width: 1310px;
  display: flex;

  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1.5px solid #eeeeee;
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    width: 895px;
  }
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
  width: 60px;
  margin-right: 125px;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
`;
export const MainContent = styled.div`
  width: 899px;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 18px;
  cursor: pointer;
  margin-right: 45px;
  color: ${(props) => (props.readState ? '#999999' : '#222222')};
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    width: 400px;
  }
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
