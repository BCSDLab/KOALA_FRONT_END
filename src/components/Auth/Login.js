import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Switch from 'components/Shared/Switch';
import StyledButton from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import { login } from '../../store/auth';
import { useNavigate } from 'react-router';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LoginOptionContainer = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  width: 343px;
`;

const LoginOptionButton = styled.button`
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
  width: ${({ location }) => (location === 1 ? 167 : 176)}px;
  height: 1px;
  background-color: #222;
  transition: transform 0.2s ease;
  transform: translateX(${({ location }) => (location === 1 ? 0 : 167)}px);
`;

const LoginForm = styled.form`
  display: ${({ display }) => (!display ? 'none' : 'block')};
  position: relative;
  width: 100%;
`;

const StyledInput = styled(S.StyledInput)`
  & + & {
    margin-top: 0;
  }
`;
const StyledOptionLink = styled(S.StyledLink)`
  padding: 0 15px;
  height: 12px;
  :nth-child(n) {
    border-right: 1px solid #999;
  }
  :last-child {
    border: none;
  }
`;

const StyledInputContainer = styled.div`
  margin-bottom: 16px;
  position: relative;
  :nth-child(2) {
    margin-bottom: 8px;
  }
`;

const PwdSee = styled.span`
display: block;
right: 16px;
top: 14px;
position: absolute;
cursor: pointer;
}
`;
const EyeImg = styled.img``;

const SNSLoginOptionSection = styled.section`
  display: ${({ display }) => (display ? 'none' : 'flex')};
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const GoogleLoginButton = styled.button`
  width: 343px;
  height: 44px;
  margin-bottom: 16px;
  padding: 0 10px;
  border: solid 0.5px #c4c4c4;
  background-color: #fff;

  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #000;

  background-image: url('/asset/google-logo.svg');
  background-position-y: center;
  background-position-x: 12px;
  background-repeat: no-repeat;

  :after {
    content: '구글 로그인';
  }
`;
const NaverLoginButton = styled.button`
  width: 343px;
  height: 44px;
  margin-bottom: 16px;
  padding: 0 0 4px;
  background-color: #03c75a;

  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #fff;

  background-image: url('/asset/naver-logo.svg');
  background-position-y: center;
  background-position-x: 12px;
  background-repeat: no-repeat;
  :after {
    content: '네이버 로그인';
  }
`;
const KakaoLoginButton = styled.button`
  width: 343px;
  height: 44px;
  padding: 0 10px;
  background-color: #fee500;

  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #000;

  background-image: url('/asset/kakao-logo.svg');
  background-position-y: center;
  background-position-x: 12px;
  background-repeat: no-repeat;

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
 * @returns
 */
const AuthMainForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const userLog = useSelector((state) => state.auth.isLoggedIn);
  const [isPasswordType, setIsPassswordType] = useState({
    type: 'password',
    visible: false,
  });
  const [isNormalLogin, setIsNormalLogin] = useState(true);

  const accountHandler = (e) => {
    setAccount(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ account, password }));
  };

  const handlePasswordType = (e) => {
    setIsPassswordType(() => {
      if (!isPasswordType.visible) return { type: 'text', visible: true };
      return { type: 'password', visible: false };
    });
  };

  const toggleLoginOption = () => {
    setIsNormalLogin(!isNormalLogin);
  };

  useEffect(() => {
    if (userLog) {
      navigate('/');
    }
  }, [userLog]);
  // function onSuccess(googleUser) {
  //   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  // }
  // function onFailure(error) {
  //   console.log(error);
  // }
  // function renderButton() {
  //   gapi.signin2.render('my-signin2', {
  //     scope: 'profile email',
  //     width: 240,
  //     height: 50,
  //     longtitle: true,
  //     theme: 'dark',
  //     onsuccess: onSuccess,
  //     onfailure: onFailure,
  //   });
  // }

  return (
    <LoginContainer>
      <LoginOptionContainer>
        <LoginOptionButton onClick={toggleLoginOption} isClicked={isNormalLogin}>
          일반 로그인
        </LoginOptionButton>
        <LoginOptionButton onClick={toggleLoginOption} isClicked={!isNormalLogin}>
          SNS로 로그인
        </LoginOptionButton>
        <LoginOptionMenuBar location={isNormalLogin ? 1 : 2} />
      </LoginOptionContainer>

      <LoginForm display={isNormalLogin} onSubmit={submitHandler}>
        <StyledInputContainer>
          <StyledInput value={account} onChange={accountHandler} name="account" placeholder="아이디 입력" />
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInput
            value={password}
            type={isPasswordType.type}
            onChange={passwordHandler}
            name="password"
            placeholder="비밀번호 입력"
          />
          <PwdSee onClick={handlePasswordType}>
            {isPasswordType.visible ? (
              <EyeImg src="/asset/openEye.svg" alt="openeye" />
            ) : (
              <EyeImg src="/asset/closeEye.svg" alt="closeeye" />
            )}
          </PwdSee>
        </StyledInputContainer>

        <S.AutoLogin>
          <S.AutoLoginCheck>
            <Switch />
          </S.AutoLoginCheck>
          <S.AutoLoginText>자동 로그인</S.AutoLoginText>
        </S.AutoLogin>

        <StyledButton>로그인</StyledButton>
      </LoginForm>

      <SNSLoginOptionSection display={isNormalLogin}>
        <GoogleLoginButton />
        <NaverLoginButton />
        <KakaoLoginButton />
        <div id="my-signin2"></div>
      </SNSLoginOptionSection>

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
