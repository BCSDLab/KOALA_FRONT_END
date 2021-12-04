import React from 'react';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';

const Title = styled.div``;

const RegisterDocForm = () => {
  return (
    <div>
      <Title>회원가입</Title>
      <div>약관 전체동의</div>
      <div>개인정보 이용약관(필수)</div>
      <div>koala 이용약관(필수)</div>
      <div></div>
    </div>
  );
};

export default RegisterDocForm;
