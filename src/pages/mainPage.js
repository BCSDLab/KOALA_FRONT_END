import SideNavbar from 'components/SideNavbar';
import React from 'react';
import styled from 'styled-components';
import HistoryPage from './HistoryPage';
import LogoutButton from 'components/History/LogouButton';

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: block;
  margin: 90px 0 0 20px;
`;
const MainPage = () => {
  return (
    <Container>
      {/* <SideNavbar/> */}
      {/* <LogoutButton /> */}
      <Wrapper>
        <HistoryPage />
      </Wrapper>
    </Container>
  );
};

export default MainPage;
