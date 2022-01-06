import React, { useState } from "react";
import styled from "styled-components";
import HistoryCheckBox from "./HisoryCheckBox";
import { dummyList } from "./dummy";
const HistoryContent = () => {
    const [alertList, setList] = useState(dummyList);
    const [command, setCommand] = useState(null);
    const showRead = () =>{
        if(command === 'read'){
            setCommand(null);
            setList(dummyList);
        }else{
            setCommand('read');
            setList(dummyList.filter((mail) => (mail.isRead)));
        }
    }
    const showNotRead = () => {
        if(command === 'notRead'){
            setCommand(null);
            setList(dummyList);
        }else{
            setCommand('notRead');
            setList(dummyList.filter((mail) => (!mail.isRead)));
        }
    }
    const moveToStorage = () => {
        console.log('보관함으로 이동');
    }
    const deleteMail = () => {
        console.log('메일 삭제');
    }
    return (
    <>
    <MenuList>
        <HistoryCheckBox/>
        <SelectAll>전체선택</SelectAll>
        <Menues onClick={() => showRead()} isClicked={command==='read'?true:false}>
            <MenuName>
                읽은 알림
            </MenuName>
        </Menues>
        <Menues onClick={() => showNotRead()} isClicked={command==='notRead'?true:false}>
            <MenuName>
                읽지 않은 알림
            </MenuName>
        </Menues>
        <Menues onClick={() => moveToStorage()}> 
            <MenuLogo src="/asset/Storage.svg"/>
            <MenuName>
                보관함으로 이동
            </MenuName>
        </Menues>
        <Menues onClick={() => deleteMail()}>
            <MenuLogo src="/asset/Delete.svg"/>
            <MenuName>
                삭제
            </MenuName>
        </Menues>
    </MenuList>
    <KeyWordAlertList>
            {alertList.map(mail => (
                <KeyWordAlert isRead = {mail.isRead}>
                    <HistoryCheckBox/>
                    <Sender>{mail.sender}</Sender>
                    <AlertTitle>{mail.text}</AlertTitle>
                    <MailBrowse>{mail.isRead?'읽음':'읽지않음'}</MailBrowse>
                    <ReceiveDate>{mail.date}</ReceiveDate>
                </KeyWordAlert>
            ))}
    </KeyWordAlertList>

    </>
    )
}
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
    border: solid 1px ${props => props.isClicked?'#222222':'#eeeeee'};
    margin-right: 15px;
    color: ${props => props.isClicked?'#222222':'#999999'};
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
    color: ${props => props.isRead?'#999999':'#222222'};
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
    text-overflow: ellipsis;
    white-space: nowrap;
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


export default HistoryContent;