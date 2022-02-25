import React from 'react';
import AddKeyword from 'components/Keyword/AddKeyword';
import SideNavbar from 'components/SideNavbar';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import styled from 'styled-components';
import ModifyKeyword from 'components/Keyword/ModifyKeyword';
import SettingKeyword from 'components/Keyword/SettingKeyword';
import { Route, Routes } from 'react-router';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 100%;
    display: block;
    height: auto;
  }
`;

const KeywordPage = () => {
  return (
    <Container>
      <SideNavbar />
      <Content>
        <Routes>
          <Route index element={<KeywordFilterBar />}></Route>
          <Route path="create" element={<AddKeyword />}></Route>
          <Route path="modify" element={<ModifyKeyword />}></Route>
          <Route path="mypage" element={<SettingKeyword />}></Route>
        </Routes>
      </Content>
    </Container>
  );
};

export default KeywordPage;
