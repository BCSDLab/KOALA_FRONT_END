import React from 'react';
import AuthNumber from 'components/Shared/AuthNumber';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';

const IdfForm = styled.div`
  margin-bottom: 120px;
`;

const IdfindForm = () => {
  return (
    <div>
      <IdfForm>
        <S.Title>아이디 찾기</S.Title>
        <S.StyledInput placeholder="이메일 입력"></S.StyledInput>
        <AuthNumber></AuthNumber>
      </IdfForm>
      <Button>다음</Button>
    </div>
  );
};

export default IdfindForm;
