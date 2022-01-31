import React, { useState } from 'react';
import SideNavbar from 'components/SideNavbar';
import KeywordSetting from 'components/Keyword/KeywordSetting';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const KeywordPage = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Container>
      <SideNavbar />
      <KeywordSetting />
    </Container>
  );
};

export default KeywordPage;
