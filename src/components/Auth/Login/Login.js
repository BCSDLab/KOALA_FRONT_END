import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMatchMedia from 'hooks/useMatchMedia';
import styled, { css } from 'styled-components';
import LoginForm from 'components/Auth/Login/LoginForm';
import * as S from 'components/Auth/styles';
import { useNavigate } from 'react-router';
import { nonMemberLogin } from 'store/auth';
import { uuid } from 'api/logined';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    padding: 0 16px;
  }
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

const LoginButtonAttributes = css`
  border: none;
  width: 343px;
  height: 44px;
  margin-bottom: 16px;
  padding: 0 10px;

  font-size: 16px;
  font-weight: normal;
  text-align: center;

  :after {
    content: '로그인';
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 328px;
    height: 48px;
    font-size: 14px;
  }
`;

const GoogleLoginButton = styled.button`
  ${LoginButtonAttributes}
  border: solid 1px ${(props) => props.theme.colors.lightgray};
  color: ${(props) => props.theme.colors.black};

  background: 12px center no-repeat ${(props) => props.theme.colors.white} url('/asset/google-logo.svg');
  background-size: 18px;

  :after {
    content: '구글 로그인';
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    background: 13px center no-repeat ${(props) => props.theme.colors.white} url('/asset/google-logo.svg');
    background-size: 18px 18.8px;
  }
`;

const NaverLoginButton = styled.button`
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

const KakaoLoginButton = styled.button`
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
const MainLogo = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: flex;
    justify-content: center;
  }
`;
const MainLogoImg = styled.img`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 158px;
    height: 43px;
    left: 0;
    margin-bottom: 56px;
  }
`;
const Box = styled.div`
  width: 368px;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    padding-top: 54px;
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
  }
`;
/**
 * TODO:
 * - [] 비회원으로 이용하기 클릭시, keyword리스트 페이지로 이동
 * - [] 구글 로그인
 * - [] 네이버 로그인
 * - [] 카카오 로그인
 */

const queries = ['(max-width: 375px)'];

const AuthMainForm = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.myPage);
  const [isNormalLogin, setIsNormalLogin] = useState(true);
  const dispatch = useDispatch();
  const [mobile] = useMatchMedia(queries);

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
    <Box>
      {mobile && (
        <MainLogo>
          <MainLogoImg src="/asset/mainLogo.svg" alt="logo" />
        </MainLogo>
      )}
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
          <S.NoneUserLink isNormalLogin={isNormalLogin} onClick={nonMemberService} to="/">
            비회원으로 이용하기
          </S.NoneUserLink>
        </S.NoneUserLinkSection>

        <S.CopyRight>COPYRIGHT © {new Date().getFullYear()} BCSD LAB ALL RIGHTS RESERVED.</S.CopyRight>
      </LoginContainer>
    </Box>
  );
};

export default AuthMainForm;
