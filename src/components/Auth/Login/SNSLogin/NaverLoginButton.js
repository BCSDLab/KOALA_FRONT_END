import React from 'react';
import styled from 'styled-components';
import { LoginButtonAttributes } from './SocialLogin.style';
import { NAVER } from './OAuth/';

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
    window.location.href = NAVER.getAuthUrl();
  };

  return (
    <>
      <StyledNaverLoginButton onClick={onClick} />
    </>
  );
};

export default NaverLoginButton;
