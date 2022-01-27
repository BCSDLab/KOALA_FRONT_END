import React from 'react';
import SideNavbar from 'components/SideNavbar';
import AddKeyword from 'components/Keyword/ModifyKeyword';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const MainPage = () => {
  return (
    <Container>
      <SideNavbar />
      <AddKeyword />
    </Container>
  );
};

export default MainPage;
