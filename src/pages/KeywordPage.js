import React from 'react';
import AddKeyword from 'components/Keyword/AddKeyword';
import SideNavbar from 'components/SideNavbar';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import styled from 'styled-components';
import ModifyKeyword from 'components/Keyword/ModifyKeyword';
import SettingKeyword from 'components/Keyword/SettingKeyword';
import { Route, Routes, useMatch } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { inquiry } from 'store/keyword';
import useMatchMedia from 'hooks/useMatchMedia';
import { queries } from 'constant';

import theme from '../theme';

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
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);
  const [desktop] = useMatchMedia(queries);

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      dispatch(inquiry());
    }
  }, [userInfo]);

  return (
    <Container>
      <Content>
      <SideNavbar />
        {/* <Routes>
          <Route index element={<KeywordFilterBar />}></Route>
          <Route path="create" element={<AddKeyword />}></Route>
          <Route path="modify" element={<ModifyKeyword />}></Route>
          <Route path="mypage" element={<SettingKeyword />}></Route>
        </Routes> */}
      </Content>
    </Container>
  );
};

export default KeywordPage;
