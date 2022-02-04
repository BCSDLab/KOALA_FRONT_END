import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import * as S from "./Scrap.Style"
import {KeyWordAlertList,Sender} from "./History.Style"
import { useDispatch, useSelector } from "react-redux";
import HistoryCheckBox from "./HisoryCheckBox";
import { getMemo, getScrapList, deleteScrapItem, fixMemo, writeMemo } from "store/scrap";
const memoState = ["READ", "WRITE", 'FIX'];
const siteList = ['아우누리'];
const stringToDate = (date) => {
    var yyyyMMdd = String(date);
    var sYear = yyyyMMdd.substring(0,4);
    var sMonth = yyyyMMdd.substring(5,7);
    var sDate = yyyyMMdd.substring(8,10);
    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
}
const makeStringToNewLine = (text) => {
    const fixedText = text.split('').map(char => {
        if(char == '\n'){
            return <br/>
        }else{
            return char;
        }
    })
    return fixedText;
}
const ScrapContent = () => {
    const {scrapList, memoList, getMemoListResponse,deleteScrapResponse, fixMemoResponse, writeMemoResponse} = useSelector((state) => state.scrap);
    const userInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [memoItemList, setMemo] = useState([]);
    const [memoIdList, setIdList] = useState([]);
    const [scrapItemList, setScrap] = useState([]);
    const [pageState, setState] = useState("READ");
    const [currentMail, setCurr] = useState(null);
    const [checkedList, setCheckedList] = useState([]);
    const letter = useRef();
    const fixMemoValue = useRef(null);
    const writeMemoValue = useRef();
    useEffect(() => {
        if(userInfo.isLoggedIn){
            dispatch(getMemo());
        }
    },[scrapItemList])
    useEffect(() => {
        if(getMemoListResponse){
            setMemo(memoList)
            setIdList(memoList.map((memo) => {
                return memo.userScrapId;
            }));
            console.log('asdf',memoIdList)
            console.log(memoItemList)
        }
    },[memoList]);
    //상태에 따라 메모/수정/완료 표시

    const write = (e, id) => {
        if(pageState === "READ"){
            e.target.innerText = "완료";
            setState("WRITE");
            setCurr(id);
            console.log("메모 작성 시작")
            
        }else if(pageState === "WRITE"){
            const memoStatement = writeMemoValue.current.value
            if(memoStatement !== ''){
                setState("READ");
                setIdList([...memoIdList, id]);
                setCurr(null);
                console.log("메모 작성 완료")
                e.target.innerText = "수정";
                dispatch(writeMemo({"memo":memoStatement, "user_scrap_id":id}));
            }else{
                alert('내용을 적어주세요');
            }
            
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
            const memoStatement = fixMemoValue.current.value
            dispatch(fixMemo({"memo":memoStatement, "user_scrap_id":id}));
        }
    }
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

    useLayoutEffect(() => {
        if(userInfo.isLoggedIn||getMemoListResponse||deleteScrapResponse||fixMemoResponse){
            dispatch(getScrapList())
        }
    },[userInfo.isLoggedIn, deleteScrapResponse,fixMemoResponse]);
    useEffect(() => {
        setScrap(scrapList?.sort((a, b) => {
            a = stringToDate(a.created_at);
            b = stringToDate(b.created_at);
            return a > b ? -1 : a < b ? 1 : 0;
        }));
        console.log(scrapList);
    },[scrapList]);
    return (
    <S.Wrapper>
        <S.MenuList>
            <S.CheckBox>
                <HistoryCheckBox onClick={(e) => selectAll(e)} checked={checkedList.length<=0?false:true} readOnly/>
            </S.CheckBox>
            <S.SelectAll>전체선택</S.SelectAll>
            <S.Menu onClick={deleteAlert}>
                <S.MenuLogo src="/asset/Delete.svg"/>
                <S.MenuName>삭제</S.MenuName>
            </S.Menu>
        </S.MenuList>
        <S.KeyWordAlertList scrollOption={scrapItemList?.length>=12?true:false}>
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
                                    <S.memoContent >
                                        <S.WriteBlock defaultValue={memoItemList.filter(memo => memo.userScrapId === mail.userScrapId)
                                            .map(memo => {
                                                return memo.memo;
                                            })} onChange={(e) => checkByte(e)} maxLength={100} ref={fixMemoValue}/>
                                        <S.LetterCounter>
                                            <S.LettterLength ref={letter}>{memoItemList.filter(memo => memo.userScrapId === mail.userScrapId)
                                            .map(memo => {
                                                return memo.memo.length;
                                            })}
                                            </S.LettterLength>/100
                                        </S.LetterCounter>
                                    </S.memoContent>
                                    :
                                    <S.MemoBlock>
                                        {memoItemList.filter(memo => memo.userScrapId === mail.userScrapId)
                                                    .map(memo => {
                                                        return makeStringToNewLine(memo.memo);
                                                    })}
                                    </S.MemoBlock>
                                }
                                </>
                                :mail.userScrapId === currentMail&&(pageState === "FIX" || pageState === "WRITE")?
                                    <S.memoContent>
                                        <S.WriteBlock onChange={(e) => checkByte(e)} maxLength={100} ref={writeMemoValue}/>
                                        <S.LetterCounter><span ref={letter}>0</span>/100</S.LetterCounter>
                                    </S.memoContent>
                                    :null
                            }
                        </S.MemoWrapper>
                    </S.MemoAlertWrapper>
                </S.StorageAlert>
            ))}
    </S.KeyWordAlertList>
    </S.Wrapper>
    )
}

export default ScrapContent;