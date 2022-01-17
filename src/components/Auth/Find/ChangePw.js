import React from 'react';
import * as S from 'components/Auth/styles';
import PwdInput from '../Shared/PwdInput';
import Button from 'components/Shared/Button';
import styled from 'styled-components';

const PwdChangeForm = styled.div`
  padding-bottom: 100px;
`;

const ChangePw = () => {
  return (
    <div>
      <S.Title>비밀번호 찾기</S.Title>
      <PwdChangeForm>
        <PwdInput placeholder="새 비밀번호 입력" />
        <PwdInput placeholder="새 비밀번호 확인" />
      </PwdChangeForm>
      <Button>완료</Button>
    </div>
  );
};

export default ChangePw;
