import React from 'react';
import styled from 'styled-components';
import * as S from 'components/Auth/styles';
import { useNavigate } from 'react-router';

const BackButton = styled.button`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: block;
    width: 24px;
    height: 24px;
    background: url(/asset/chevron-left.svg);
    background-size: 24px;
    left: 8px;
    position: absolute;
  }
`;

const getTitle = () => {
  const path = window.location.pathname;
  const CREATE_REGEXP = /^([/]auth[/]create)(.*[a-zA-Z])$/;

  if (CREATE_REGEXP.test(path)) return '회원가입';

  switch (path) {
    case '/auth/findId':
      return '아이디 찾기';
    case '/auth/findPwd':
      return '비밀번호 찾기';
    default:
  }
};

const TitleSection = () => {
  const navigate = useNavigate();

  const shiftBack = () => {
    navigate(-1);
  };

  return (
    <S.Title>
      <BackButton onClick={shiftBack} />
      {getTitle()}
    </S.Title>
  );
};

export default TitleSection;
