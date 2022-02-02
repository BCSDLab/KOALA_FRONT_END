import React, { useSelector } from 'react-redux';
import styled from 'styled-components';
import { LOGIN, REFRESH_TOKEN } from '../../constant';
import { getCookie, removeCookie } from 'components/Shared/Cookies';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const LoginButtonStyle = styled.button`
  width: 80px;
  height: 32px;
  background: ${(props) => props.theme.colors.darkgray};
  position: absolute;
  top: 40px;
  right: 80px;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  z-index: 1;
`;

const LoginButton = () => {
  const loginInfo = useSelector((state) => state.auth);
  const memberCheck = getCookie('device_token');
  const navigate = useNavigate();

  const loginClick = useCallback(() => {
    navigate(LOGIN);
  });

  const logoutClick = useCallback(() => {
    removeCookie(REFRESH_TOKEN);
    loginInfo.isLoggedIn = false;
    navigate(LOGIN);
    location.reload();
  });

  return (
    <div>
      {memberCheck == undefined ? (
        <LoginButtonStyle onClick={logoutClick}>로그아웃</LoginButtonStyle>
      ) : (
        <LoginButtonStyle onClick={loginClick}>로그인</LoginButtonStyle>
      )}
    </div>
  );
};

export default LoginButton;
