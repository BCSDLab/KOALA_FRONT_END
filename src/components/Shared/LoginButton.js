import React, { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { resetAuthState } from 'store/auth';
import { resetMypageInfo } from 'store/myPage';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickLogin = useCallback(() => {
    navigate(LOGIN);
  });

  const clickLogout = useCallback(() => {
    removeCookie(REFRESH_TOKEN);
    dispatch(resetAuthState());
    dispatch(resetMypageInfo());
    navigate(LOGIN);
  });

  return (
    <div>
      {memberCheck == undefined ? (
        <LoginButtonStyle onClick={clickLogout}>로그아웃</LoginButtonStyle>
      ) : (
        <LoginButtonStyle onClick={clickLogin}>로그인</LoginButtonStyle>
      )}
    </div>
  );
};

export default LoginButton;
