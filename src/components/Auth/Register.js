import React from 'react';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import PwdInput from 'components/Auth/PwdInput';

const RegisterForm = () => {
  return (
    <div>
      <S.Title>회원가입</S.Title>
      <S.StyledInput placeholder="아이디" />
      <PwdInput placeholder="비밀번호 입력" />
      <PwdInput placeholder="비밀번호 확인" />
      <S.StyledInput placeholder="이메일" />
      <S.StyledInput placeholder="닉네임" />
      <Button>다음</Button>
    </div>
  );
};

export default RegisterForm;
