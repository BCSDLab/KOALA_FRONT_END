import HistoryContent from 'components/History/HistoryContent';
import ScrapContent from 'components/History/ScrapContent';
import HistoryHeader from 'components/History/HistoryHeader';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideNavbar from 'components/SideNavbar';
import theme from 'theme';
const HistoryPageContent = styled.div`
  display: flex;
  min-width: 1294px;
  max-width: 1294px;
  @media screen and (max-width: ${theme.deviceSizes.mobileL}){
    width: 100vw;
    max-width: ${theme.deviceSizes.mobileL};
    min-width: ${theme.deviceSizes.mobileS};
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
  padding: 49px 0 0 0;
`;

const HistoryPage = () => {
  const location = useLocation();
  return (
    <HistoryPageContent>
      {/* <SideNavbar /> */}
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
