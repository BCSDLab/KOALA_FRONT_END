import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const MobileTopBar = (props) => {
  const navigate = useNavigate();
  return (
    <TopBarContainer>
      <TopBar>{props.content}</TopBar>{' '}
      <BackButton onClick={() => navigate(-1)}>
        <BackImage src="/asset/backButton.svg" />
      </BackButton>
    </TopBarContainer>
  );
};
const TopBarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 61px;
  margin-bottom: 24px;
`;
const TopBar = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    height: 61px;
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
    justify-content: center;
    align-items: center;
    font-family: NotoSansCJKKR;
    font-size: 16px;
    text-align: center;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
const BackButton = styled.button``;

const BackImage = styled.img`
  position: absolute;
  left: 8px;
  top: 20px;
  background-color: ${(props) => props.theme.colors.white};
`;

export default MobileTopBar;
