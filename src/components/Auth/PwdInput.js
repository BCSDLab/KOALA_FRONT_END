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
  top: 31px;
  left: 328px;
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
        name="password"
        placeholder={props.placeholder}
        type={isPasswordType.type}
      />
      <PwdSee onClick={handlePasswordType}>
        <EyeImg src="/asset/pwdEye.svg" alt="eye" />
      </PwdSee>
    </StyledPwd>
  );
};

export default PwdInput;
