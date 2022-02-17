import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledInput = styled.input`
  width: 348px;
  height: 44px;
  border: solid 1px ${(props) => props.theme.colors.silver};
  flex-grow: 0;
  padding-left: 16px;
  margin: 2px 0;
  position: relative;
  outline: none;
  &:focus {
    border: solid 1px ${(props) => props.theme.colors.darkgray};
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.theme.colors.gray};
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: ${(props) => props.theme.colors.gray};
    text-decoration: none;
  }
  ::after {
    top: 4px;
    background-color: ${(props) => props.theme.colors.silver};
    margin: 0 15px;
    width: 1px;
    height: 12px;
    float: right;
    position: relative;
    content: '';
  }
  :last-child::after {
    content: '';
    float: right;
    margin: 0;
    width: 0;
    height: 0;
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    color: #a8a8a8;
    font-weight: normal;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      color: #a8a8a8;
    }
    ::after {
      top: 4px;
      background-color: ${(props) => props.theme.colors.lightgray};
      margin: 0 15px;
      width: 1px;
      height: 12px;
      float: right;
      position: relative;
      content: '';
    }
  }
`;

export const AutoLogin = styled.div`
  display: flex;
  width: 84px;
  top: 8px;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 113px;
  }
`;

export const AutoLoginCheck = styled.div`
  width: 22px;
  height: 12px;
  margin-right: 4px;
  font-size: 10px;
`;

export const AutoLoginText = styled.label`
  color: ${(props) => props.theme.colors.gray};
  margin-left: 4px;
  font-size: 12px;
  :after {
    content: '자동 로그인';
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    :after {
      content: '로그인 상태 유지';
    }
  }
`;

export const OtherOption = styled.div`
  display: flex;
  width: 380px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    margin-top: 16.6px;
    a:nth-child(2) {
      right: -75px;
      position: relative;
      ::after {
        display: none;
      }
    }
    a:nth-child(3) {
      left: -68px;
      position: relative;
      ::after {
        top: 4px;
        background-color: ${(props) => props.theme.colors.lightgray};
        margin: 0 15px;
        width: 1px;
        height: 12px;
        float: right;
        position: relative;
        content: '';
      }
    }
  }
`;

export const SNSLoginText = styled.div`
  width: 152px;
  height: 18px;
  font-size: 10px;
  margin: 28px 108px 16px 108px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OauthLogin = styled.div`
  width: 155px;
  margin: 0 108px 0 108px;
  display: flex;
  justify-content: space-between;
`;

export const NoneUserLinkSection = styled.section`
  height: ${({ isNormalLogin }) => (isNormalLogin ? '383px' : '471px')};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    height: 163px;
    display: ${({ isNormalLogin }) => (isNormalLogin ? 'block' : 'none')};
  }
`;

export const NoneUserLink = styled(Link)`
  display: inline-block;
  width: 100%;
  margin: ${({ isNormalLogin }) => (isNormalLogin ? '164px 0 198px 0' : '252px 0 198px 0')};
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  font-family: NotoSansCJKKR;
  text-decoration: underline;
  :hover {
    text-decoration: underline;
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    margin: 72px 0 70px 0;
  }
}
`;

export const CopyRight = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.colors.silver};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: none;
  }
`;

export const Title = styled.div`
  height: 24px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;
`;

export const Agree = styled.div`
  font-size: 14px;
  padding-left: 20px;
  padding-bottom: 24px;
  display: flex;
  text-align: left;
`;

export const AllAgree = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

export const AgreeText = styled.div`
  width: 350px;
`;

export const InputErrorText = styled.span`
  display: flex;
  height: 16px;
  position: absolute;
  margin: 4px 0;
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.yellow};
  justify-content: flex-start;
`;

export const Drop = styled.img`
  width: 20px;
  height: 20px;
`;

export const AuthDoc = styled.div`
  font-size: 12px;
  height: 166px;
  border: 1px solid ${(props) => props.theme.colors.silver};
  padding: 16px;
`;

export const CheckDotLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
`;

export const CheckDot = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

export const CustomCheckDot = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-right: 20px;
  border: solid 1px ${(props) => props.theme.colors.silver};
  transition: all 150ms;
  ${CheckDot}:checked + & {
    border: solid 1px ${(props) => props.theme.colors.yellow};
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;
