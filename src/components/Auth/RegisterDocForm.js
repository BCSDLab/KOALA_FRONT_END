import React from 'react';
import RegisterCheckBox from './RegisterCheckBox';
import Button from 'components/Shared/Button';

import * as S from 'components/Auth/styles';

const RegisterDocForm = () => {
  return (
    <div>
      <S.Title>회원가입</S.Title>
      <RegisterCheckBox />
      <S.AuthDoc>
        <p>제1조(목적)</p>
        한강 서비스 이용약관은 bcsd lab에서 서비스를 제공함에 있어, 이용자간의 관리, 의무 및 책임 사항 등을 목적으로
        합니다
        <p>커뮤니티 이용규칙</p>
        한강 서비스 이용약관은 bcsd lab에서 서비스를 제공함에 있어, 이용자간의 관리, 의무 및 책임 사항 등을 목적으로
        합니다
      </S.AuthDoc>
      <Button>다음</Button>
    </div>
  );
};

export default RegisterDocForm;
