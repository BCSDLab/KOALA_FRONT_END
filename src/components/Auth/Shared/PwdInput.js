import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from 'components/Auth/styles';

const StyledPwd = styled.div`
  position: relative;
  margin-top: 0;
  margin-bottom: 24px;
`;

const StyledInput = styled(S.StyledInput)`
  border: solid 1px ${({ isError }) => (isError ? '#ffd25d' : '#c4c4c4')};
  margin: 0;
  background-image: ${({ isError }) => (isError ? `url('/asset/inputError.svg')` : 'none')};
  background-position-y: center;
  background-position-x: 300px;
  background-repeat: no-repeat;
`;

const PwdSee = styled.span`
  cursor: pointer;
`;
const EyeImg = styled.img`
  position: absolute;
  top: 12px;
  right: 16px;
`;

const ErrorImg = styled.img`
  position: absolute;
  top: 34%;
  left: 80%;
  right: 0;
`;

const PwdInput = (props) => {
  const [isPasswordType, setIsPassswordType] = useState({
    type: 'password',
    visible: false,
  });

  const handlePasswordType = (e) => {
    setIsPassswordType(() => {
      if (!isPasswordType.visible) return { type: 'text', visible: true };
      return { type: 'password', visible: false };
    });
  };
  return (
    <StyledPwd>
      <StyledInput
        autoComplete="new-password"
        name={props.password}
        placeholder={props.placeholder}
        type={isPasswordType.type}
        value={props.value}
        onChange={props.onChange}
        isError={props.isError}
        {...props}
      />
      <S.InputErrorText>{props.errorMessage}</S.InputErrorText>
      <PwdSee onClick={handlePasswordType}>
        {isPasswordType.visible ? (
          <EyeImg src="/asset/openEye.svg" alt="openeye" />
        ) : (
          <EyeImg src="/asset/closeEye.svg" alt="closeeye" />
        )}
      </PwdSee>
    </StyledPwd>
  );
};

export default PwdInput;