import React from "react";
import styled from "styled-components";
import HistoryCheckBox from "./HisoryCheckBox";
import { dummyList } from "./dummy";
const MenuList = styled.div`
    display: flex;
    align-items: center;
    margin: 31px 0 17px 0;
    &: last-child{
        margin-right: 0;
    }
`
const Menues = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    border: solid 1px #eeeeee;
    margin-right: 15px;
    color: #99999;
    cursor: pointer;
`
const MenuLogo = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`
const MenuName = styled.div`
`
const SelectAll = styled.div`
    margin-right: 25px;
`
const KeyWordAlert = styled.li`
    display: flex;
    color: ${props => props.isRead?'#999999':'black'};
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #eeeeee;
`
const KeyWordAlertList = styled.ol``
const Sender = styled.div`
    font-size: 12px;
    margin-right: 119px;
`
const AlertTitle = styled.div`
    width: 899px;
    max-width: 899px;
    max-height: 18px;
    font-size: 12px;
    cursor: pointer;
    overflow: hidden;
`
const MailBrowse = styled.div`
    width: 47px;
    margin-right: 24px;
    text-align: center;
    font-size: 12px;
    color: #999999;
`
const ReceiveDate = styled.div`
    width: 67px;
    font-size: 12px;
`
const HistoryContent = () => {
    return (
    <>
    <MenuList>
        <HistoryCheckBox/>
        <SelectAll>전체선택</SelectAll>
        <Menues>
            <MenuName>
                읽은 알림
            </MenuName>
        </Menues>
        <Menues>
            <MenuName>
                읽지 않은 알림
            </MenuName>
        </Menues>
        <Menues>
            <MenuLogo src="/asset/Storage.svg"/>
            <MenuName>
                보관함으로 이동
            </MenuName>
        </Menues>
        <Menues>
            <MenuLogo src="/asset/Delete.svg"/>
            <MenuName>
                삭제
            </MenuName>
        </Menues>
    </MenuList>
    <KeyWordAlertList>
            {dummyList.map(mail => (
                <KeyWordAlert isRead = {mail.isRead}>
                    <HistoryCheckBox/>
                    <Sender>{mail.sender}</Sender>
                    <AlertTitle >{mail.text}</AlertTitle>
                    <MailBrowse>{mail.isRead?'읽음':'읽지않음'}</MailBrowse>
                    <ReceiveDate>{mail.date}</ReceiveDate>
                </KeyWordAlert>
            ))}
    </KeyWordAlertList>

    </>
    )
}

export default HistoryContent;