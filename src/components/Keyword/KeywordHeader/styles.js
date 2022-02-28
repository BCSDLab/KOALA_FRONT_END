import styled from 'styled-components';

export const HeaderContainer = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 61px;
    margin-bottom: 24px;
  }
`;

export const Username = styled.span`
  position: absolute;
  right: 176px;
  top: 40px;
  line-height: 32px;
  margin-right: 16px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  width: 80px;
  height: 32px;
  background: #222;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: none;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  max-width: 120px;
  position: absolute;
  top: 121px;
  left: ${(props) => (props.toggle ? '488px' : '353px')};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
 
  }
`;
