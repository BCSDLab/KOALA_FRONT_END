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

const TitleSection = ({ title }) => {
  const navigate = useNavigate();

  const shiftBack = () => {
    navigate(-1);
  };

  return (
    <S.Title>
      <BackButton onClick={shiftBack} />
      {title}
    </S.Title>
  );
};

export default TitleSection;
