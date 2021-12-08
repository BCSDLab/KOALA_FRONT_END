import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

const StyledId = styled.div``;
const IdInput = (props) => {
  return (
    <StyledId>
      <S.StyledInput
        autocomplete="account"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        placeholder="아이디 입력"
      />
    </StyledId>
  );
};

export default IdInput;
