import styled from 'styled-components';
import theme from '../../../theme';
const { tabletL, mobileS } = theme.deviceSizes;

export const Menu = styled.nav`
  width: 100%;
  height: 24px;
  padding-bottom: 15.3px;
  justify-content: space-between;
  border-bottom: 1.5px solid #eeeeee;
  top: 180px;
  left: ${(props) => (props.toggle ? '488px' : '353px')};
  @media screen and (max-width: ${tabletL}) {
    display: block;
    position: static;
    padding: 0;
    margin: 75px 0 0 5%;
    width: 90%;
    white-space: nowrap;
    min-width: ${mobileS};
    overflow-x: scroll;
    border: none;
    height: 100%;
    &:after {
      display: block;
      content: '';
      border-bottom: 1px solid #eee;
      width: 130%;
    }
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  width: 140%;
  min-width: ${mobileS};
  justify-content: space-between;
`;

export const Item = styled.span`
  font-size: 16px;
  margin-right: 40px;
  cursor: pointer;
  @media screen and (max-width: ${tabletL}) {
    display: block;
    font-size: 14px;
    min-width: 52px;
    text-align: center;
    &:last-child {
      min-width: 200px;
    }
    &:after {
      display: block;
      content: '';
      width: 32px;
      margin: 0 auto;
      margin-top: 14px;
      border-bottom: ${(props) => (props.isToggle ? '2px solid #222' : '')};
    }
  }
`;

export const ItemUnderBar = styled.div`
  width: 32px;
  height: 8px;
  background-color: #222222;
  display: relative;
  position: relative;
  top: -4px;
  left: ${(props) => {
    switch (props.menu) {
      case '전체':
        return '0px';
      case '아우누리':
        return '82px';
      case '아우미르':
        return '180px';
      default:
        return '342px';
    }
  }}};
`;
