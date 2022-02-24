import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMatchMedia from 'hooks/useMatchMedia';
import styled from 'styled-components';
import LoginForm from 'components/Auth/Login/LoginForm';
import * as S from 'components/Auth/styles';
import { useNavigate } from 'react-router';
import { nonMemberLogin } from 'store/auth';
import { uuid } from 'api/logined';
import GoogleLoginButton from './SNSLogin/GoogleLoginButton';
import KakaoLoginButton from './SNSLogin/KakaoLoginButton';
import NaverLoginButton from './SNSLogin/NaverLoginButton';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LoginOptionContainer = styled.div`
  width: 343px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
  margin-bottom: 40px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 328px;
    margin-bottom: 32px;
  }
`;

const LoginOptionButton = styled.button`
  border: none;
  min-width: 167px;
  max-width: 176px;
  padding: 12px 40.5px;
  background: none;
  font-size: 16px;
  font-weight: ${({ isClicked }) => (isClicked ? 'bold' : 'normal')};
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    min-width: 164px;
    max-width: 164px;
    font-size: 14px;
  }
`;

const LoginOptionMenuBar = styled.div`
  display: block;
  position: absolute;
  width: ${({ isNormalLogin }) => (isNormalLogin ? 167 : 176)}px;
  height: 1px;
  background-color: ${(props) => props.theme.colors.darkgray};
  transition: transform 0.2s ease;
  transform: translateX(${({ isNormalLogin }) => (isNormalLogin ? 0 : 167)}px);
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 164px;
    transform: translateX(${({ isNormalLogin }) => (isNormalLogin ? 0 : 164)}px);
  }
`;

const SNSLoginOptionSection = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const MainLogo = styled.div`
  margin-bottom: 48px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: flex;
    justify-content: center;
  }
`;

const MainLogoImg = styled.img`
  width: 125px;
  height: 34px;
  left: 125.2px;
  position: relative;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 158px;
    height: 43px;
    left: 0;
  }
`;
const queries = ['(max-width: 400px)', '(min-width: 800px)'];

const AuthMainForm = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.myPage);
  const [isNormalLogin, setIsNormalLogin] = useState(true);
  const dispatch = useDispatch();
  const [mobile, desktop] = useMatchMedia(queries);

  /*
   * - guid 함수를 통해 고유값을 device_token과 같이 활용한다.
   * - 비회원이든, 회원이든 첫 로그인 시에는 고윳값을 로컬스토리지에 저장한다.
   * - 비회원 로그인의 경우에는 비회원 로그인 API를 통해 로그인한다.
   */
  const nonMemberService = () => {
    let deviceToken;
    if (!localStorage.getItem('user_token')) {
      deviceToken = uuid();
      localStorage.setItem('user_token', `webuser+${deviceToken}`);
    } else {
      deviceToken = localStorage.getItem('user_token');
    }
    dispatch(nonMemberLogin(deviceToken));
  };

  //회원이 로그인페이지에 접속하게 되면 메인 페이지로 돌려보낸다.
  useEffect(() => {
    if (userInfo.userType === 'NORMAL') {
      navigate('/');
    }
  }, [userInfo.userType]);

  return (
    <>
      {/* {!desktop && (
        <MainLogo>
          <MainLogoImg src="/asset/mainLogo.svg" alt="logo" />
        </MainLogo>
      )} */}

      <LoginContainer>
        <LoginOptionContainer>
          <LoginOptionButton onClick={() => setIsNormalLogin(true)} isClicked={isNormalLogin}>
            일반 로그인
          </LoginOptionButton>
          <LoginOptionButton onClick={() => setIsNormalLogin(false)} isClicked={!isNormalLogin}>
            SNS로 로그인
          </LoginOptionButton>
          <LoginOptionMenuBar isNormalLogin={isNormalLogin} />
        </LoginOptionContainer>

        {isNormalLogin ? (
          <LoginForm />
        ) : (
          <SNSLoginOptionSection>
            <GoogleLoginButton />
            <NaverLoginButton />
            <KakaoLoginButton />
          </SNSLoginOptionSection>
        )}

        <S.NoneUserLinkSection isNormalLogin={isNormalLogin}>
          <S.NoneUserLink onClick={nonMemberService} to="/">
            비회원으로 이용하기
          </S.NoneUserLink>
        </S.NoneUserLinkSection>

        <S.CopyRight>COPYRIGHT © {new Date().getFullYear()} BCSD LAB ALL RIGHTS RESERVED.</S.CopyRight>
      </LoginContainer>
    </>
  );
};

export default AuthMainForm;
