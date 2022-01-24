import React from 'react';
import SideNavbar from 'components/SideNavbar';
import AddKeyword from 'components/Keyword/ModifyKeyword';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const mainPage = () => {
  return (
    <Container>
      <SideNavbar />
      <AddKeyword />
    </Container>
  );
};

export default mainPage;
