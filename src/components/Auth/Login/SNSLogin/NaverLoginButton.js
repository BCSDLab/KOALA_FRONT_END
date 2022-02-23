import React from 'react';
import styled from 'styled-components';
import { LoginButtonAttributes } from './SocialLogin.style';
import NaverLogin from 'react-naver-login';
import { NAVER_AUTH_URL, NAVER_CLIENT_ID, NAVER_REDIRECT_URI } from './OAuth/';

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
  const onClick = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  const onSuccess = (e) => {
    alert();
    let naverid = e.id; // 네이버에서 제공한 ID
  };

  return (
    <>
      <NaverLogin
        clientId={NAVER_CLIENT_ID}
        callbackUrl={NAVER_REDIRECT_URI}
        render={(renderProps) => (
          <StyledNaverLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
        )}
        onSuccess={(e) => onSuccess(e)}
        onFailure={(result) => console.error(result)}
      />
      {/* <StyledNaverLoginButton onClick={onClick} /> */}
    </>
  );
};

export default NaverLoginButton;
