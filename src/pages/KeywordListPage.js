import React from 'react';
import SideNavbar from 'components/SideNavbar';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inquiry } from 'store/keyword';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const KeywordListPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      dispatch(inquiry());
    }
  }, [userInfo]);

  return (
    <Container>
      <SideNavbar />
      <KeywordFilterBar />
    </Container>
  );
};

export default KeywordListPage;
