import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SideNavbar from 'components/SideNavbar';
import styled from 'styled-components';
import { removeCookie } from 'components/Shared/Cookies';
import { useNavigate } from 'react-router';

const LoginButton = styled.button`
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

const mainPage = () => {
  const loginInfo = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const loginClick = () => {
    navigate(`/auth`);
  };

  const logoutClick = () => {
    removeCookie('refresh_token');
    loginInfo.isLoggedIn = false;
    location.reload();
  };

  return (
    <div>
      {loginInfo.isLoggedIn ? (
        <LoginButton onClick={logoutClick}>로그아웃</LoginButton>
      ) : (
        <LoginButton onClick={loginClick}>로그인</LoginButton>
      )}
      <SideNavbar></SideNavbar>
    </div>
  );
};

export default mainPage;
