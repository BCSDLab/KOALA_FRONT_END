import React, { useEffect, useState } from "react";
import HistoryCheckBox from "./HisoryCheckBox";
import * as S from './History.Style';
import { getHistoryList, deleteHistoryList, readHistoryItem, moveToScrap} from "store/history";
import { useDispatch, useSelector } from "react-redux";
const siteList = ['아우누리'];
const stringToDate = (date) => {
    var yyyyMMdd = String(date);
    var sYear = yyyyMMdd.substring(0,4);
    var sMonth = yyyyMMdd.substring(5,7);
    var sDate = yyyyMMdd.substring(8,10);
    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
}
const HistoryContent = () => {
    const {historyList, deleteHistoryResponse, readHistoryItemResponse, moveToScrapResponse} = useSelector((state) => state.history);
    const userInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [alertList, setList] = useState([]);
    const [command, setCommand] = useState(null);
    const [checkedList, setCheckedList] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const showRead = () =>{
        if(command === 'read'){
            setCommand(null);
            setList(historyList);
        }else{
            setCommand('read');
            setList(historyList.filter((mail) => (mail.isRead)));
        }
    }
    const showNotRead = () => {
        if(command === 'notRead'){
            setCommand(null);
            setList(historyList);
        }else{
            setCommand('notRead');
            setList(historyList.filter((mail) => (!mail.isRead)));
        }
    }
    const moveToStorage = () => {
        console.log('보관함으로 이동');
        if(checkedList.length > 0){
            checkedList.forEach((id) => {
               dispatch(moveToScrap({"crawling_id": id}));
           })
           setCheckedList([]);
           alert('보관함으로 이동되었습니다');
        }else{
            alert('이동할 메일을 선택해 주세요');
        }
    }
    const deleteMail = () => {
        if(checkedList.length > 0){
            var deleteMailQuery = "";
            checkedList.forEach((id) => {
                deleteMailQuery += `notice-id=${id}&`;
            });
            dispatch(deleteHistoryList(deleteMailQuery));
            setCheckedList([]);
        }else{
            alert("삭제할 메일을 선택해 주세요");
        }
    }
    const selectAllMail = (e) => {
        if(e.target.checked){
            setCheckedList(alertList.map(mail => {
                return mail.id;
            }));
        }else{
            setCheckedList([]);
        }
    }
    const selectMail = (e, id) => {
        if(e.target.checked){
            setCheckedList([...checkedList, id]);
        }else{
            setCheckedList(checkedList.filter(mailId => mailId !== id));
        }
    }
    const clickMail = (id) =>{
        dispatch(readHistoryItem(id));
    }
    useEffect(() => {
        if(userInfo.isLoggedIn||deleteHistoryResponse||readHistoryItemResponse||moveToScrapResponse){
            dispatch(getHistoryList(pageNum));
        }
    },[userInfo.isLoggedIn,deleteHistoryResponse,readHistoryItemResponse]);
    useEffect(() => {
        setList(historyList?.sort((a, b) => {
            a = stringToDate(a.created_at);
            b = stringToDate(b.created_at);
            return a > b ? -1 : a < b ? 1 : 0;
        }));
        console.log(historyList);
    }, [historyList]);
    return (
    <S.PageWrapper>
    <S.MenuList>
        <HistoryCheckBox onClick={(e) => selectAllMail(e)} readOnly/>
        <S.SelectAll>전체선택</S.SelectAll>
        <S.Menues onClick={() => showRead()} isClicked={command==='read'?true:false}>
            <S.MenuName>
                읽은 알림
            </S.MenuName>
        </S.Menues>
        <S.Menues onClick={() => showNotRead()} isClicked={command==='notRead'?true:false}>
            <S.MenuName>
                읽지 않은 알림
            </S.MenuName>
        </S.Menues>
        <S.Menues onClick={() => moveToStorage()}> 
            <S.MenuLogo src="/asset/Storage.svg"/>
            <S.MenuName>
                보관함으로 이동
            </S.MenuName>
        </S.Menues>
        <S.Menues onClick={() => deleteMail()}>
            <S.MenuLogo src="/asset/Delete.svg"/>
            <S.MenuName>
                삭제
            </S.MenuName>
        </S.Menues>
    </S.MenuList>
    <S.KeyWordAlertList>
            {alertList?.map((mail,id) => (
                <S.KeyWordAlert isRead = {mail.isRead} key ={id}>
                    <HistoryCheckBox onClick={(e) => selectMail(e, mail.id)} checked={checkedList.includes(mail.id)?true:false} readOnly/>
                    <S.Sender>{mail.site}</S.Sender>
                    <S.AlertTitle href={mail.url} isRead = {mail.isRead} onClick={() => clickMail(mail.id)}>{mail.title}</S.AlertTitle>
                    <S.MailBrowse>{mail.isRead?'읽음':'읽지않음'}</S.MailBrowse>
                    <S.ReceiveDate>{mail.createdAt}</S.ReceiveDate>
                </S.KeyWordAlert>
            ))}
    </S.KeyWordAlertList>
    </S.PageWrapper>
    )
}

export default HistoryContent;