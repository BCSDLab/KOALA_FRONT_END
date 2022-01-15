import React, { useState, useEffect } from "react";
import { dummyList } from "./dummy";
import { memoDummy } from "./memoDummy";
import * as S from "./Scrap.Style"
import {KeyWordAlertList,Sender} from "./History.Style"
import { useDispatch, useSelector } from "react-redux";
import HistoryCheckBox from "./HisoryCheckBox";
import scrap, { getMemo, getScrapList } from "store/scrap";
const memoState = ["READ", "WRITE", 'FIX'];
const siteList = ['아우누리'];
const ScrapContent = () => {
    const {scrapList, memoList, getMemoResponse} = useSelector((state) => state.scrap);
    const userInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [memoItemList, setMemo] = useState(memoDummy);
    const [memoIdList, setIdList] = useState([13,14]);
    const [scrapItemList, setScrap] = useState([]);
    const [pageState, setState] = useState("READ");
    const [currentMail, setCurr] = useState(null);
    const [checkedList, setCheckedList] = useState([]);
    useEffect(() => {
        if(userInfo.isLoggedIn||getMemoResponse){
            dispatch(getScrapList())
        }
    },[userInfo.isLoggedIn, getMemoResponse]);
    useEffect(() => {
        setScrap(scrapList);
    },[scrapList])

    // useEffect(() => {
    //     scrapItemList.forEach(item => {
    //         dispatch(getMemo(item.userScrapId));
    //     })
    //     setMemo([...memoItemList, memoList]);
    //     console.log(memoItemList);
    // },[scrapItemList])
    //상태에 따라 메모/수정/완료 표시

    const writeMemo = (e, id) => {
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
        }

    };
    const fixMemo = (e,id) => {
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
    console.log(checkedList);
    return (
    <S.Wrapper>
        <S.MenuList>
            <S.CheckBox>
                <HistoryCheckBox onClick={(e) => selectAll(e)}/>
            </S.CheckBox>
            <S.MenuName>전체선택</S.MenuName>
            <S.Menu>
                <S.MenuLogo src="/asset/Delete.svg"/>
                <S.MenuName>삭제</S.MenuName>
            </S.Menu>
        </S.MenuList>
        <KeyWordAlertList>
            {scrapItemList.map((mail) => (
                <S.StorageAlert key ={mail.id}>
                    <HistoryCheckBox onClick = {(e) => selectMail(e, mail.id)} checked={checkedList.includes(mail.id)?true:false} readOnly/>
                    <Sender>{siteList[mail.site-1]}</Sender>
                    <S.MemoAlertWrapper>
                        <S.AlertContent>
                            <S.AlertTitle href={mail.url}>{mail.title}</S.AlertTitle>
                            <S.AlertProp>
                                {
                                memoIdList.includes(mail.userScrapId)?
                                <S.MemoOption onClick={(e)=>fixMemo(e,mail.userScrapId)}>수정</S.MemoOption>
                                :<S.MemoOption onClick={(e) => writeMemo(e,mail.userScrapId)}>메모</S.MemoOption>
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
                            <S.WriteBlock defaultValue={memoDummy.filter(memo => memo.userScrapId === mail.userScrapId)
                                .map(memo => {
                                    return memo.text;
                                })}>
                            </S.WriteBlock>
                            :
                            <S.MemoBlock >
                                {memoDummy.filter(memo => memo.userScrapId === mail.userScrapId)
                                            .map(memo => {
                                                return memo.text;
                                            })}
                            </S.MemoBlock>}
                            </>
                            :mail.userScrapId === currentMail&&(pageState === "FIX" || pageState === "WRITE")?
                            <S.WriteBlock/>
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