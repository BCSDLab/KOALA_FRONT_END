import React from 'react';
import SideNavbar from 'components/SideNavbar';
import KeywordList from 'components/Keyword/KeywordList';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
`;


const KeywordPage = () => {
  return (
    <Container>
      <SideNavbar/>
      <KeywordList/>
    </Container>
  );
};

export default KeywordPage;
