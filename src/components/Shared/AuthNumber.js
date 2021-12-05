import React from 'react';
import styled from 'styled-components';

const AuthNuminput = styled.input`
  width: 218px;
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
    text-align: left;
    color: #999;
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AuthForm = styled.div`
  display: flex;
`;

const AuthButton = styled.button`
  width: 125px;
  height: 48px;
  color: white;
  margin: 18px 0 0 25px;
  ouline: none;
  border: 0;
  background: black;
  &:hover {
    background: gray;
  }
`;

const AuthNumber = () => {
  return (
    <AuthForm>
      <AuthNuminput placeholder="인증번호 입력" />
      <AuthButton>인증번호 전송</AuthButton>
    </AuthForm>
  );
};

export default AuthNumber;
