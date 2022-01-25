import React, { useState, useEffect, useRef } from "react";
import { memoDummy } from "./memoDummy";
import * as S from "./Scrap.Style"
import {KeyWordAlertList,Sender} from "./History.Style"
import { useDispatch, useSelector } from "react-redux";
import HistoryCheckBox from "./HisoryCheckBox";
import { getMemo, getScrapList, deleteScrapItem, fixMemo } from "store/scrap";
const memoState = ["READ", "WRITE", 'FIX'];
const siteList = ['아우누리'];
const stringToDate = (date) => {
    var yyyyMMdd = String(date);
    var sYear = yyyyMMdd.substring(0,4);
    var sMonth = yyyyMMdd.substring(5,7);
    var sDate = yyyyMMdd.substring(8,10);
    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
}
const ScrapContent = () => {
    const {scrapList, memoList, getMemoResponse,deleteScrapResponse, fixMemoResponse} = useSelector((state) => state.scrap);
    const userInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [memoItemList, setMemo] = useState(memoDummy);
    const [memoIdList, setIdList] = useState([13,14]);
    const [scrapItemList, setScrap] = useState([]);
    const [pageState, setState] = useState("READ");
    const [currentMail, setCurr] = useState(null);
    const [checkedList, setCheckedList] = useState([]);
    const letter = useRef();
    const memoValue = useRef(null);
    // useEffect(() => {
    //     if(memoValue.current){
    //         console.log('asdfsdf')
    //         console.log(memoValue.current.value)
    //     }
    //     console.log(memoValue.current)
    // },[memoValue.current])

    useEffect(() => {
        // for(let x=0; x<scrapItemList.length; x++){
        //     console.log(scrapItemList[x].userScrapId)
        //     dispatch(getMemo(scrapItemList[x].userScrapId))
        // }
        // dispatch(getMemo(13))
        dispatch(getMemo(14))
        // dispatch(getMemo(17))
        // dispatch(getMemo(18))
        // dispatch(getMemo(20))
    },[scrapItemList])
    useEffect(() => {
        console.log(memoList)
    },[memoList])
    //상태에 따라 메모/수정/완료 표시

    const write = (e, id) => {
        if(pageState === "READ"){
            e.target.innerText = "완료";
            setState("WRITE");
            setCurr(id);
            console.log("메모 작성 시작")
            
        }else if(pageState === "WRITE"){
            e.target.innerText = "수정";
            setState("READ");
            setIdList([...memoIdList, id]);
            setCurr(null);
            console.log("메모 작성 완료")
            // console.log(memoValue.current.value)
        }
    };
    const fix = (e,id) => {
        if(pageState === "READ"){
            setState("FIX");
            e.target.innerText = "완료";
            setCurr(id);
            console.log("메모 수정 시작")
        }else if (pageState === "FIX"){
            setState("READ");
            setCurr(null);
            e.target.innerText = "수정";
            console.log('메모 수정 완료');
            const memoStatement = memoValue.current.value
            dispatch(fixMemo({"memo":memoStatement, "user_scrap_id":id}));
        }
    }
    console.log(pageState)
    const selectAll = (e) => {
        if(e.target.checked){
            setCheckedList(scrapItemList.map(mail => {
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
    const deleteAlert = () => {
        if(checkedList.length > 0){
            console.log(checkedList)
            dispatch(deleteScrapItem(checkedList));
            setCheckedList([]);
        }else{
            alert("삭제할 메일을 선택해 주세요")
        }
    }
    const checkByte = (obj) => {
        const len = countLetter( obj.target.value);
        letter.current.innerText = len;
    }
    const countLetter = (letter) => {
        return letter.length;
    }

    useEffect(() => {
        if(userInfo.isLoggedIn||getMemoResponse||deleteScrapResponse||fixMemoResponse){
            dispatch(getScrapList())
        }
    },[userInfo.isLoggedIn, getMemoResponse,deleteScrapResponse,fixMemoResponse]);
    useEffect(() => {
        setScrap(scrapList?.sort((a, b) => {
            a = stringToDate(a.createdAt);
            b = stringToDate(b.createdAt);
            return a > b ? -1 : a < b ? 1 : 0;
        }));
        console.log(scrapList);
    },[scrapList]);
    return (
    <S.Wrapper>
        <S.MenuList>
            <S.CheckBox>
                <HistoryCheckBox onClick={(e) => selectAll(e)}/>
            </S.CheckBox>
            <S.MenuName>전체선택</S.MenuName>
            <S.Menu onClick={deleteAlert}>
                <S.MenuLogo src="/asset/Delete.svg"/>
                <S.MenuName>삭제</S.MenuName>
            </S.Menu>
        </S.MenuList>
        <KeyWordAlertList>
            {scrapItemList?.map((mail) => (
                <S.StorageAlert key ={mail.id}>
                    <HistoryCheckBox onClick = {(e) => selectMail(e, mail.id)} checked={checkedList.includes(mail.id)?true:false} readOnly/>
                    <Sender>{mail.site}</Sender>
                    <S.MemoAlertWrapper>
                        <S.AlertContent>
                            <S.AlertTitle href={mail.url}>{mail.title}</S.AlertTitle>
                            <S.AlertProp>
                                {
                                memoIdList.includes(mail.userScrapId)?
                                <S.MemoOption onClick={(e)=>fix(e,mail.userScrapId)}>수정</S.MemoOption>
                                :<S.MemoOption onClick={(e) => write(e,mail.userScrapId)}>메모</S.MemoOption>
                                }
                                <S.DivideLine src="/asset/DivideLine.svg" />
                                <S.ReceiveDate>{mail.created_at}</S.ReceiveDate>
                                </S.AlertProp>
                        </S.AlertContent>
                        <S.MemoWrapper>
                            {memoIdList.includes(mail.userScrapId)?
                                <>
                                {mail.userScrapId === currentMail?null:<S.MemoCircle />}
                                {mail.userScrapId === currentMail&&(pageState === "FIX" || pageState === "WRITE")?
                                    <S.memoContent>
                                        <S.WriteBlock defaultValue={memoDummy.filter(memo => memo.userScrapId === mail.userScrapId)
                                            .map(memo => {
                                                return memo.text;
                                            })} onChange={(e) => checkByte(e)} maxLength={100} ref={memoValue}/>
                                        <S.LetterCounter><S.LettterLength ref={letter}>0</S.LettterLength>/100</S.LetterCounter>
                                    </S.memoContent>
                                    :
                                    <S.MemoBlock>
                                        {memoDummy.filter(memo => memo.userScrapId === mail.userScrapId)
                                                    .map(memo => {
                                                        return memo.text;
                                                    })}
                                    </S.MemoBlock>
                                }
                                </>
                                :mail.userScrapId === currentMail&&(pageState === "FIX" || pageState === "WRITE")?
                                    <S.memoContent>
                                        <S.WriteBlock onChange={(e) => checkByte(e)} maxLength={100}/>
                                        <S.LetterCounter><span ref={letter}>0</span>/100</S.LetterCounter>
                                    </S.memoContent>
                                    :null
                            }
                        </S.MemoWrapper>
                    </S.MemoAlertWrapper>
                </S.StorageAlert>
            ))}
    </KeyWordAlertList>
    </S.Wrapper>
    )
}

export default ScrapContent;