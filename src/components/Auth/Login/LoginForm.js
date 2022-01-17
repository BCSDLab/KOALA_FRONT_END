import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Switch from 'components/Shared/Switch';
import StyledButton from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import { login } from '../../../store/auth';

const LoginFormContainer = styled.form`
  position: relative;
  width: 100%;
`;

const StyledInput = styled(S.StyledInput)`
  & + & {
    margin-top: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: -webkit-fill-available;
    height: 44px;
    border: solid 1px ${(props) => props.theme.colors.lightgray};
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
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: none;
  }
`;

const EyeImg = styled.img`
  width: 24px;
  height: 24px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [isPasswordType, setIsPasswordType] = useState({
    type: 'password',
    visible: false,
  });

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
    setIsPasswordType(() => {
      if (!isPasswordType.visible) return { type: 'text', visible: true };
      return { type: 'password', visible: false };
    });
  };

  const getPwdSvgName = (e) => {
    return isPasswordType.visible ? 'openEye' : 'closeEye';
  };

  return (
    <>
      <LoginFormContainer onSubmit={submitHandler}>
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
            <EyeImg src={'/asset/' + getPwdSvgName() + '.svg'} alt={getPwdSvgName()} />
          </PwdSee>
        </StyledInputContainer>

        <S.AutoLogin>
          <Switch autoLogin={autoLogin} setAutoLogin={setAutoLogin} />
          <S.AutoLoginText />
        </S.AutoLogin>

        <StyledButton>로그인</StyledButton>
      </LoginFormContainer>

      <S.OtherOption>
        <S.StyledLink to="findId">아이디 찾기</S.StyledLink>
        <S.StyledLink to="findPw">비밀번호 찾기</S.StyledLink>
        <S.StyledLink to="createLog">회원가입</S.StyledLink>
      </S.OtherOption>
    </>
  );
};

export default LoginForm;
