import React from 'react';
import styled from 'styled-components';
import { KAKAO } from './OAuth/';
import { LoginButtonAttributes } from './SocialLogin.style';

const StyledKakaoLoginButton = styled.button`
  ${LoginButtonAttributes}
  color: ${(props) => props.theme.colors.black};
  background: 14px center no-repeat #fee500 url('/asset/kakao-logo.svg');
  background-size: 18px 16.6px;
  :after {
    content: '카카오 로그인';
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    background-size: 18px 17.4px;
  }
`;

const { Kakao } = window;
const KakaoLoginButton = () => {
  const onClick = () => {
    window.location.href = KAKAO.getAuthUrl();
  };

  return (
    <>
      <StyledKakaoLoginButton onClick={onClick} />
    </>
  );
};

export default KakaoLoginButton;
