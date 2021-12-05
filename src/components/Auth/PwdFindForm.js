import React from 'react';
import * as S from 'components/Auth/styles';
import Button from 'components/Shared/Button';
import AuthNumber from 'components/Shared/AuthNumber';

const PwdFindForm = () => {
  return (
    <div>
      <S.Title>비밀번호</S.Title>
      <S.StyledInput placeholder="아이디 입력"></S.StyledInput>
      <S.StyledInput placeholder="이메일 입력"></S.StyledInput>
      <AuthNumber />
      <Button>인증하기</Button>
    </div>
  );
};

export default PwdFindForm;
