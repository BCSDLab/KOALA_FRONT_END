import React, { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { resetAuthState } from 'store/auth';
import { resetMypageInfo } from 'store/myPage';
import { LOGIN, REFRESH_TOKEN } from '../../constant';
import { getCookie, removeCookie } from 'components/Shared/Cookies';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const UserLoggedInComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 80px;
`;

const LoginButtonStyle = styled.button`
  width: 80px;
  height: 32px;
  background: ${(props) => props.theme.colors.darkgray};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  z-index: 1;
`;
const UserNickName = styled.span`
  margin-right: 16px;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgray};
`;

const LoginButton = () => {
  const loginInfo = useSelector((state) => state.myPage);

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
    <UserLoggedInComponent>
      {loginInfo.userType === 'NORMAL' ? (
        <>
          <UserNickName>{loginInfo.userAccount} 님</UserNickName>
          <LoginButtonStyle onClick={clickLogout}>로그아웃</LoginButtonStyle>
        </>
      ) : (
        <LoginButtonStyle onClick={clickLogin}>로그인</LoginButtonStyle>
      )}
    </UserLoggedInComponent>
  );
};

export default LoginButton;
