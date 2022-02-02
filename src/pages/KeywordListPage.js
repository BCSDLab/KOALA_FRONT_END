import React from 'react';
import SideNavbar from 'components/SideNavbar';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import styled from 'styled-components';
import { useLocation } from 'react-router';

const Container = styled.div`
  display: flex;
`;

const KeywordListPage = () => {
  return (
    <Container>
      <SideNavbar />
      <KeywordFilterBar />
    </Container>
  );
};

export default KeywordListPage;
