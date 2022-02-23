import { css } from 'styled-components';

export const LoginButtonAttributes = css`
  border: none;
  width: 343px;
  height: 44px;
  margin-bottom: 16px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  :after {
    content: '로그인';
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 328px;
    height: 48px;
    font-size: 14px;
  }
`;
