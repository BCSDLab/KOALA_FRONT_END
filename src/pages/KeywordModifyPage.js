import React from 'react';
import ModifyKeyword from 'components/Keyword/ModifyKeyword';
import SideNavbar from 'components/SideNavbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const KeywordModifyPage = () => {
  return (
    <Container>
      <SideNavbar />
      <ModifyKeyword />
    </Container>
  );
};

export default KeywordModifyPage;
