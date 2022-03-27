import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme';
const {white, black, darkgray, lightgray, silver, gray, yellow} = theme.colors;

const Header = styled.div`
  display: flex;
  // width: ${props => props.isOpen?'calc((100vw - 384px) * 0.673958333 + 40px)':'calc(100vw * 0.673958333 + 40px)'};
  width: ${props => props.isToggleOpen?'calc((100vw - 354px + 14px) * 0.818007662835249);':'calc((100vw - 144px) * 0.7597864768683274 + 40px + 14px);'}
  max-width: 1294px;
  border-bottom: 1px solid #eee;
  @media screen and (max-width: ${theme.deviceSizes.tabletL}) {
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
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
  @media screen and (max-width: ${theme.deviceSizes.tabletL}) {
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
const HistoryHeader = ({ location, isToggleOpen }) => {
  const isMobile = useMediaQuery({ query: `(max-width:${theme.deviceSizes.tabletL}` });
  const totlaAlertHistory = isMobile ? '전체알림' : '전체 알림 내역';
  return (
    <>
      <Header isToggleOpen={isToggleOpen}>
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
