import SideNavbar from 'components/SideNavbar';
import React from 'react';
import LoginButton from 'components/Shared/LoginButton';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import useMatchMedia from 'hooks/useMatchMedia';

const Container = styled.div`
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100vw;
    height: 100vh;
  }
`;

const MainPage = () => {
  const queries = ['(max-width: 1024px)'];
  const [mobile] = useMatchMedia(queries);
  return (
    <Container>
      <SideNavbar />
      {!mobile && <LoginButton />}
      <Outlet />
    </Container>
  );
};

export default MainPage;
