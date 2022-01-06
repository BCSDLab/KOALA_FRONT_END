
import HistoryContent from 'components/History/HistoryContent';
import HistoryHeader from 'components/History/HistoryHeader';
import React from 'react';
import styled from 'styled-components';
const HistoryPageContent = styled.div`
  padding: 49px 0 0 0;
  margin: 0 138px;
  min-width: 1294px;
  max-width: 1294px;
`

const HistoryPage = () => {
  return (
  <HistoryPageContent>
      <HistoryHeader/>
      <HistoryContent/>
  </HistoryPageContent>
  )
};


export default HistoryPage;
