import React from 'react';
import styled from 'styled-components';
import * as S from 'components/Auth/styles';

const StyledId = styled.div`
  position: relative;
  margin-top: 0;
  margin-bottom: 24px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 100%;
    height: 48px;
  }
`;

const StyledInput = styled(S.StyledInput)`
  border: solid 1px ${({ isError, ...props }) => (isError ? props.theme.colors.yellow : props.theme.colors.silver)};
  margin: 0;
  background-image: ${({ isError }) => (isError ? `url('/asset/inputError.svg')` : 'none')};
  background-position-y: center;
  background-position-x: 332px;
  background-repeat: no-repeat;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: calc(100% - 16px);
    height: 48px;
    padding: 0 0 0 16px;
  }
`;

const CommonInput = (props, ref) => {
  return (
    <StyledId>
      <StyledInput
        type="text"
        ref={ref}
        autocomplete="account"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        isError={props.isError}
        {...props}
      />
      {props.isError && <S.InputErrorText>{props.errorMessage}</S.InputErrorText>}
    </StyledId>
  );
};

export default React.forwardRef(CommonInput);
