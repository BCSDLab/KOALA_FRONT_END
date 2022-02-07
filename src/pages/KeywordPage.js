import React from 'react';
import AddKeyword from 'components/Keyword/AddKeyword';
import SideNavbar from 'components/SideNavbar';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import styled from 'styled-components';
import ModifyKeyword from 'components/Keyword/ModifyKeyword';
import { Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { inquiry } from 'store/keyword';

const Container = styled.div`
  display: flex;
`;

const KeywordPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      dispatch(inquiry());
    }
  }, [userInfo]);

  return (
    <>
      <Container>
        <SideNavbar />
        <Routes>
          <Route index element={<KeywordFilterBar />}></Route>
          <Route path="create" element={<AddKeyword />}></Route>
          <Route path="modify" element={<ModifyKeyword />}></Route>
        </Routes>
      </Container>
    </>
  );
};

export default KeywordPage;
