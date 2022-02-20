import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme';
const {white, black, darkgray, lightgray, silver, gray, yellow} = theme.colors;

const Header = styled.div`
  display: flex;
  width: 1294px;
  // padding-bottom: 31px;
  border-bottom: 1px solid #eee;
  @media screen and (max-width: ${theme.deviceSizes.mobileL}) {
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
`;
const FocusLine = styled.div`
  width: 32px;
  height: 2px;
  background-color: ${darkgray};
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
  &:after{
    display: block;
    content: '';
    width: 32px;
    margin: 0 auto;
    margin-top: 31px;
    margin-bottom: ${(props) => (props.inlink ? '-2px' : '0')};
    border-bottom: ${(props) => (props.inlink ? `2px solid ${darkgray}` : '0')};
  }
  @media screen and (max-width: ${theme.deviceSizes.mobileL}) {
    margin: 0 0 ${(props) => (props.inlink ? '-2px' : '0')} 0;
    font-size: 14px;
    font-weight: ${(props) => (props.inlink ? 'bold' : '0')};
    &:after {
      display: block;
      content: '';
      width: 32px;
      padding: 0 0 14px 0;
      margin: 0 auto;
      border-bottom: ${(props) => (props.inlink ? `2px solid ${darkgray}` : '')};
    }
  }
`;
const HistoryHeader = ({ location }) => {
  const isMobile = useMediaQuery({ query: `(max-width:${theme.deviceSizes.mobileL}` });
  const totlaAlertHistory = isMobile ? '전체알림' : '전체 알림 내역';
  return (
    <>
      <Header>
        <>
          <HistoryHeaderTab to="/history" inlink={location.pathname === '/history' ? 1 : 0}>
            {totlaAlertHistory}
          </HistoryHeaderTab>
          <HistoryHeaderTab to="/history/scrap" inlink={location.pathname === '/history/scrap' ? 1 : 0}>
            보관함
          </HistoryHeaderTab>
        </>
      </Header>
    </>
  );
};

export default HistoryHeader;
