import HistoryContent from 'components/History/HistoryContent';
import ScrapContent from 'components/History/ScrapContent';
import HistoryHeader from 'components/History/HistoryHeader';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideNavbar from 'components/SideNavbar';
const HistoryPageContent = styled.div`
  display: flex;
  // margin: 0 138px;
  min-width: 1294px;
  max-width: 1294px;
`;

const ContentWrapper = styled.div`
  padding: 49px 0 0 0;
`;

const HistoryPage = () => {
  const location = useLocation();
  return (
    <HistoryPageContent>
      <SideNavbar />
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
