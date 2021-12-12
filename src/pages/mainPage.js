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
  const isLogined = useSelector((state) => state.auth.isLogined);
  const navigate = useNavigate();
  const loginToken = useSelector((state) => state.auth.token);
  const [isTrued, setIsTrued] = useState(isLogined);
  const loginClick = () => {
    navigate(`/auth`);
  };

  const logoutClick = () => {
    removeCookie('refresh_token');
    loginToken.access_token = '';
    loginToken.refresh_token = '';
    setIsTrued((prev) => !prev);
  };

  return (
    <div>
      <SideNavbar></SideNavbar>
      {isTrued ? <LoginBtn onClick={logoutClick}>로그아웃</LoginBtn> : <LoginBtn onClick={loginClick}>로그인</LoginBtn>}
    </div>
  );
};

export default mainPage;
