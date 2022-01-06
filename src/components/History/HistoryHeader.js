import React from "react";
import styled from "styled-components";
const Header = styled.div`
  display: flex;
  padding-bottom: 31px;
  border-bottom: 1px solid #eeeeee;
`
const HistoryHeaderTab = styled.div`
  font-size: 18px;
  margin-right: 72px;
  cursor: pointer;
`
const HistoryHeader = () => {
    return (
    <Header>
        <HistoryHeaderTab>전체 알림 내역</HistoryHeaderTab>
        <HistoryHeaderTab>보관함</HistoryHeaderTab>
    </Header>
    )
}

export default HistoryHeader