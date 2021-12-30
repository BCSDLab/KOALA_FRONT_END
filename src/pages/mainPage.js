import React from 'react';
import SideNavbar from 'components/SideNavbar';
import KeywordPage from './keywordPage';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
`;

const mainPage = () => {
  return (
    <Container>
      <SideNavbar/>
      <KeywordPage/>
    </Container>
  );
};

export default mainPage;
