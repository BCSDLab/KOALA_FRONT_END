import SideNavbar from 'components/SideNavbar';
import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const MainPage = () => {
  return (
    <Container>
      <SideNavbar />
      <Outlet />
    </Container>
  );
};

export default MainPage;
