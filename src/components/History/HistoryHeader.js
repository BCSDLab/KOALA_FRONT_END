import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = styled.div`
  display: flex;
  padding-bottom: 31px;
  border-bottom: 1px solid #eeeeee;
`
const FocusLine = styled.div`
  width: 32px;
  height: 2px;
  background-color: #222222;

`
const HistoryHeaderTab = styled(NavLink)`
  font-size: 18px;
  margin-right: 72px;
  cursor: pointer;
`
const HistoryHeader = () => {
    return (
    <>
    <Header>
        <HistoryHeaderTab to='/history'>전체 알림 내역</HistoryHeaderTab>
        <HistoryHeaderTab to='/history/scrap'>보관함</HistoryHeaderTab>
    </Header>
    <FocusLine/>
    </>
    )
}

export default HistoryHeader