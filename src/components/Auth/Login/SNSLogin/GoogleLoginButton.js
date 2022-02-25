import React from 'react';
import styled from 'styled-components';
import { LoginButtonAttributes } from './SocialLogin.style';
import { GOOGLE } from './OAuth/';
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
  const onClick = () => {
    window.location.href = 'https://api.stage.koala.im/user/GOOGLE';
  };

  const onSuccess = (e) => {
    let googleid = e.FT.NT; // 구글에서 제공한 ID
  };

  return (
    <>
      <GoogleLogin
        clientId={GOOGLE.CLIENT_ID}
        buttonText="Login"
        render={(renderProps) => (
          <StyledGoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
        )}
        onSuccess={(e) => onSuccess(e)}
        onFailure={console.log}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLoginButton;
