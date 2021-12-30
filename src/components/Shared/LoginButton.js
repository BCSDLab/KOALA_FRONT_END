import React, { useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeCookie } from 'components/Shared/Cookies';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const LoginButtonStyle = styled.button`
  width: 80px;
  height: 32px;
  background: #222;
  position: absolute;
  top: 40px;
  right: 80px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

const LoginButton = () => {
  const loginInfo = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const loginClick = useCallback(() => {
    navigate(`/auth`);
  });

  const logoutClick = useCallback(() => {
    removeCookie('refresh_token');
    loginInfo.isLoggedIn = false;
    location.reload();
  });

  return (
    <div>
      {loginInfo.isLoggedIn ? (
        <LoginButtonStyle onClick={logoutClick}>로그아웃</LoginButtonStyle>
      ) : (
        <LoginButtonStyle onClick={loginClick}>로그인</LoginButtonStyle>
      )}
    </div>
  );
};

export default LoginButton;
