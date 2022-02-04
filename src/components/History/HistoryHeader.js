import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Header = styled.div`
  display: flex;
  width: 1284px;
  padding-bottom: 31px;
  border-bottom: 1px solid #eeeeee;
`;
const FocusLine = styled.div`
  width: 32px;
  height: 2px;
  background-color: #222222;
  margin: ${(props) => {
    if (props.location.pathname === '/history') {
      return '0 0 0 40px';
    } else if (props.location.pathname === '/history/scrap') {
      return '0 0 0 190px';
    }
  }};
`;
const HistoryHeaderTab = styled(NavLink)`
  font-size: 18px;
  margin-right: 72px;
  cursor: pointer;
`;
const HistoryHeader = ({ location }) => {
  return (
    <>
      <Header>
        <HistoryHeaderTab to="/history">전체 알림 내역</HistoryHeaderTab>
        <HistoryHeaderTab to="/history/scrap">보관함</HistoryHeaderTab>
      </Header>
      <FocusLine location={location} />
    </>
  );
};

export default HistoryHeader;
