import React from 'react';
import styled from 'styled-components';
import { LoginButtonAttributes } from './SNSLoginButton.style';
import { GOOGLE } from '../OAuth';
import GoogleLogin from 'react-google-login';

const StyledGoogleLoginButton = styled.button`
  ${LoginButtonAttributes}
  border: solid 1px ${(props) => props.theme.colors.lightgray};
  color: ${(props) => props.theme.colors.black};
  background: 12px center no-repeat ${(props) => props.theme.colors.white} url('/asset/google-logo.svg');
  background-size: 18px;
  :after {
    content: '구글 로그인';
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    background: 13px center no-repeat ${(props) => props.theme.colors.white} url('/asset/google-logo.svg');
    background-size: 18px 18.8px;
  }
`;

const GoogleLoginButton = () => {
  return (
    <>
      <GoogleLogin
        clientId={GOOGLE.CLIENT_ID}
        uxMode="redirect"
        redirectUri={GOOGLE.REDIRECT_URI}
        render={(renderProps) => (
          <StyledGoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
        )}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLoginButton;
