import React from 'react';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';

const RegisterForm = () => {
  return (
    <div>
      <S.Title>회원가입</S.Title>
      <S.StyledInput placeholder="아이디"></S.StyledInput>
      <S.StyledInput placeholder="비밀번호"></S.StyledInput>
      <S.StyledInput placeholder="비밀번호 확인"></S.StyledInput>
      <S.StyledInput placeholder="이메일"></S.StyledInput>
      <S.StyledInput placeholder="닉네임"></S.StyledInput>
      <Button>다음</Button>
    </div>
  );
};

export default RegisterForm;
