import HistoryContent from 'components/History/History/HistoryContent';
import ScrapContent from 'components/History/Scrap/ScrapContent';
import HistoryHeader from 'components/History/History/HistoryHeader';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideNavbar from 'components/SideNavbar';
import theme from 'theme';
import LoginButton from 'components/Shared/LoginButton';
import useMatchMedia from 'hooks/useMatchMedia';

const HistoryPageContent = styled.div`
  display: flex;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  @media screen and (max-width: ${theme.deviceSizes.mobileL}) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 121px 0 0 131px;
  @media screen and (max-width: ${theme.deviceSizes.mobileL}) {
    position: fixed;
    height: 0%;
    justify-content: unset;
    top: 0%;
    margin: 26px 0 0 0;
    z-index: 99;
  }
`;
const queries = [`(max-width: ${theme.deviceSizes.mobileL})`];
const HistoryPage = () => {
  const [mobile] = useMatchMedia(queries);
  const location = useLocation();
  return (
    <HistoryPageContent>
      <SideNavbar />
      {!mobile && <LoginButton />}
      <ContentWrapper>
        <HistoryHeader location={location} />
        <Routes>
          <Route path="/" element={<HistoryContent />} />
          <Route path="/scrap" element={<ScrapContent />} />
        </Routes>
      </ContentWrapper>
    </HistoryPageContent>
  );
};

export default HistoryPage;
