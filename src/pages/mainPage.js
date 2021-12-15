import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SideNavbar from 'components/SideNavbar';
import styled from 'styled-components';
import { removeCookie } from 'components/Shared/Cookies';
import { useNavigate } from 'react-router';

const LoginBtn = styled.button`
  background-color: black;
  display: flex;
  position: absoulte;
  justify-content: center;
  color: white;
  width: 80px;
  height: 32px;
  margin-left: 1700px;
  margin-top: -900px;
  padding-top: 5px;
`;

const mainPage = () => {
  const loginInfo = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isLogBtn, setIsLogBtn] = useState(loginInfo.isLoggedIn);

  const loginClick = () => {
    navigate(`/auth`);
  };

  useEffect(() => {
    setIsLogBtn(loginInfo.isLoggedIn);
  }, [loginInfo.isLoggedIn]);

  const logoutClick = () => {
    removeCookie('refresh_token');
    loginInfo.isLoggedIn = false;
    setIsLogBtn(false);
  };
  return (
    <div>
      <SideNavbar></SideNavbar>
      {isLogBtn ? (
        <LoginBtn onClick={logoutClick}>로그아웃</LoginBtn>
      ) : (
        <LoginBtn onClick={loginClick}>로그인</LoginBtn>
      )}
    </div>
  );
};

export default mainPage;
