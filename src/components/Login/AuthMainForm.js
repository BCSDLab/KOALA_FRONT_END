import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledButton from 'components/Shared/Button';

const AuthForm = styled.div``;

const StyledInput = styled.input`
  width: 348px;
  height: 48px;
  border: none;
  flex-grow: 0;
  padding-left: 16px;
  margin-top: 16px;
  border: solid 1px #c4c4c4;
  &:focus {
    border: solid 1px #222;
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #222;
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AutoLogin = styled.div``;

const OtherOption = styled.div``;

const SnsLoginText = styled.div``;

const OauthLogin = styled.div``;

const NoneUser = styled.div``;

const CopyRight = styled.div``;

const AuthMainForm = () => (
  <AuthForm>
    <StyledInput autocomplete="username" name="username" placeholder="아이디 입력" />
    <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호 입력" type="password" />
    <StyledButton>로그인</StyledButton>
  </AuthForm>
);

export default AuthMainForm;
