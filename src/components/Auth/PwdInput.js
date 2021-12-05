import React from 'react';
import styled from 'styled-components';
import * as S from 'components/Auth/styles';

const EyeImg = styled.img`
  position: absolute;
  top: 31px;
  left: 328px;
  right: 0;
`;

const StyledPwd = styled.div`
  position: relative;
`;

const PwdInput = (props) => {
  return (
    <StyledPwd>
      <S.StyledInput autoComplete="new-password" name="password" placeholder={props.placeholder} type="password" />
      <EyeImg src="/asset/pwdEye.svg" alt="eye" />
    </StyledPwd>
  );
};

export default PwdInput;
