import React from 'react';
import * as S from 'components/Auth/styles';
import Button from 'components/Shared/Button';
import IdInput from 'components/Auth/Shared/IdInput';
import AuthNumber from 'components/Shared/AuthNumber';

const FindPw = () => {
  return (
    <div>
      <S.Title>비밀번호</S.Title>
      <IdInput placeholder="아이디 입력" />
      <IdInput placeholder="이메일 입력" />
      <AuthNumber />
      <Button disabled={true}>인증하기</Button>
    </div>
  );
};

export default FindPw;
