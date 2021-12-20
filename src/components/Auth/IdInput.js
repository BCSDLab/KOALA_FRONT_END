import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

const StyledId = styled.div`
  position: relative;
`;

const ErrorImg = styled.img`
  position: absolute;
  top: 30%;
  left: 90%;
  right: 0;
`;

const IdInput = (props) => {
  return (
    <StyledId>
      <S.StyledInput
        autocomplete="account"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        {...props}
      />
      {props.error ? <ErrorImg src="/asset/inputError.svg" alt="error" /> : null}
    </StyledId>
  );
};

export default IdInput;
