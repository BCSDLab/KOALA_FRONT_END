import styled from 'styled-components';
import theme from '../../../theme';
const {mobileL, mobileS} = theme.deviceSizes;

export const Menu = styled.nav`
  min-width: 1323px;
  height: 24px;
  padding-bottom: 15.3px;
  justify-content: space-between;
  position: absolute;
  border-bottom: 1.5px solid #eeeeee;
  top: 180px;
  left: ${(props) => (props.toggle ? '488px' : '353px')};
  @media screen and (max-width: ${mobileL}){
    display: block;
    position: static;
    padding: 0;
    margin: 0 0 0 5%;
    width: 100%;
    min-width: ${mobileS};
    overflow-x: scroll;
    border: none;
    height: 100%;
    &:after{
      display: block;
      content: '';
      border-bottom: 1px solid #eee;
      width: 130%;
    };
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  width: 140%;
  min-width: ${mobileS};
  justify-content: space-between;

`


export const Item = styled.span`
  font-size: 16px;
  margin-right: 40px;
  cursor: pointer;
  @media screen and (max-width: ${mobileL}){
    display: block;
    font-size: 14px;
    max-width: 200px;
    &:after{
      display: block;
      content: '';
      width: 32px;
      margin: 0 auto;
      margin-top: 14px;
      border-bottom: ${props => props.isToggle?'2px solid #222':''};
    }
  }
`;

export const ItemUnderBar = styled.div`
  width: 32px;
  height: 8px;
  background-color: #222222;
  position: absolute;
  top: 216px;
  left: ${(props) => {
    if (props.toggle) {
      switch (props.menu) {
        case '전체':
          return '488px';
        case '아우누리':
          return '568px';
        case '아우미르':
          return '670px';
        default:
          return '830px';
      }
    } else {
      switch (props.menu) {
        case '전체':
          return '353px';
        case '아우누리':
          return '435px';
        case '아우미르':
          return '533px';
        default:
          return '695px';
      }
    }
  }};
`;
