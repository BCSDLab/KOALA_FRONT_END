import React, { useState } from 'react';
import SideNavbar from 'components/SideNavbar';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import KeywordHeader from 'components/Keyword/KeywordHeader';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const KeywordPage = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Container>
      <SideNavbar />
      <KeywordHeader toggle={isToggle} title={'키워드 알림'} />
      <KeywordFilterBar toggle={isToggle} />
    </Container>
  );
};

export default KeywordPage;
