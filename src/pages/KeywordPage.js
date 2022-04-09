import React from 'react';
import AddKeyword from 'components/Keyword/AddKeyword';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import styled from 'styled-components';
import ModifyKeyword from 'components/Keyword/ModifyKeyword';
import SettingKeyword from 'components/Keyword/SettingKeyword';
import { Outlet, Route, Routes } from 'react-router';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 0;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    display: block;
    height: auto;
  }
`;

const KeywordPage = () => {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default KeywordPage;
