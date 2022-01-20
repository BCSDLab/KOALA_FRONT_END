import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import LoginForm from 'components/Auth/LoginForm';
import * as S from 'components/Auth/styles';
import { useNavigate } from 'react-router';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LoginOptionContainer = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
  width: 343px;
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
`;

const LoginOptionMenuBar = styled.div`
  display: block;
  position: absolute;
  width: ${({ isNormalLogin }) => (isNormalLogin ? 167 : 176)}px;
  height: 1px;
  background-color: ${(props) => props.theme.colors.darkgray};
  transition: transform 0.2s ease;
  transform: translateX(${({ isNormalLogin }) => (isNormalLogin ? 0 : 167)}px);
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

  background: 12px center no-repeat;

  :after {
    content: '로그인';
  }
`;

const GoogleLoginButton = styled.button`
  ${LoginButtonAttributes}
  border: solid 1px ${(props) => props.theme.colors.lightgray};
  color: ${(props) => props.theme.colors.black};

  background-color: ${(props) => props.theme.colors.white};
  background-image: url('/asset/google-logo.svg');

  :after {
    content: '구글 로그인';
  }
`;
const NaverLoginButton = styled.button`
  ${LoginButtonAttributes}
  color: ${(props) => props.theme.colors.white};

  background-color: #03c75a;
  background-image: url('/asset/naver-logo.svg');

  :after {
    content: '네이버 로그인';
  }
`;

const KakaoLoginButton = styled.button`
  ${LoginButtonAttributes}
  color: ${(props) => props.theme.colors.black};

  background-color: #fee500;
  background-image: url('/asset/kakao-logo.svg');

  :after {
    content: '카카오 로그인';
  }
`;

/**
 * TODO:
 * - [] 비회원으로 이용하기 클릭시, keyword리스트 페이지로 이동
 * - [] 구글 로그인
 * - [] 네이버 로그인
 * - [] 카카오 로그인
 */
const AuthMainForm = () => {
  const navigate = useNavigate();
  const userLog = useSelector((state) => state.auth.isLoggedIn);
  const [isNormalLogin, setIsNormalLogin] = useState(true);

  useEffect(() => {
    if (userLog) {
      navigate('/');
    }
  }, [userLog]);

  return (
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

      <S.OtherOption>
        <S.StyledLink to="findId">아이디 찾기</S.StyledLink>
        <S.StyledLink to="findPw">비밀번호 찾기</S.StyledLink>
        <S.StyledLink to="createLog">회원가입</S.StyledLink>
      </S.OtherOption>

      <S.NoneUserLinkSection>
        <S.NoneUserLink to="/keywordList">비회원으로 이용하기</S.NoneUserLink>
      </S.NoneUserLinkSection>

      <S.CopyRight>COPYRIGHT © {new Date().getFullYear()} BCSD LAB ALL RIGHTS RESERVED.</S.CopyRight>
    </LoginContainer>
  );
};

export default AuthMainForm;
