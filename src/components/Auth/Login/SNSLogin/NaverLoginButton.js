import React from 'react';
import styled from 'styled-components';
import { LoginButtonAttributes } from './SocialLogin.style';
import { NAVER } from './OAuth/';

import NaverLogin from './ReactLogin/ReactNaverLogin';

const StyledNaverLoginButton = styled.button`
  ${LoginButtonAttributes}
  color: ${(props) => props.theme.colors.white};
  background: 14px center no-repeat #03c75a url('/asset/naver-logo.svg');
  background-size: 12.1px 12px;
  :after {
    content: '네이버 로그인';
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    background: 15px center no-repeat #03c75a url('/asset/naver-logo.svg');
    background-size: 14.1px 14.6px;
  }
`;

const NaverLoginButton = () => {
  return (
    <>
      <NaverLogin
        clientId={NAVER.CLIENT_ID}
        callbackUrl={NAVER.REDIRECT_URI}
        isPopup={false}
        render={(props) => <StyledNaverLoginButton onClick={props.onClick} />}
      />
    </>
  );
};

export default NaverLoginButton;
