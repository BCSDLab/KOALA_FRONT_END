import React from 'react';
import AddKeyword from 'components/Keyword/AddKeyword';
import SideNavbar from 'components/SideNavbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const KeywordCreatePage = () => {
  return (
    <Container>
      <SideNavbar />
      <AddKeyword />
    </Container>
  );
};

export default KeywordCreatePage;
