import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from 'components/Auth/styles';

const StyledPwd = styled.div`
  position: relative;
`;

const PwdSee = styled.span`
  cursor: pointer;
`;
const EyeImg = styled.img`
  position: absolute;
  top: 26px;
  left: 328px;
  right: 0;
`;

const ErrorImg = styled.img`
  position: absolute;
  top: 28px;
  left: 300px;
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
      <S.StyledInput
        autoComplete="new-password"
        name={props.password}
        placeholder={props.placeholder}
        type={isPasswordType.type}
        value={props.value}
        onChange={props.onChange}
        {...props}
      />
      {props.error ? <ErrorImg src="/asset/inputError.svg" alt="error" /> : null}
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
