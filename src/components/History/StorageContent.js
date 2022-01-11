import React from "react";
import { dummyList } from "./dummy";
import * as S from "./Storage.Style"
import {KeyWordAlertList,Sender, AlertTitle} from "./History.Style"
import HistoryCheckBox from "./HisoryCheckBox";
const StorageContent = () => {
    const alertList = dummyList;
    const writeMemo = () => {
        console.log('memo');
        
    }
    
    return (
    <S.Wrapper>
        <S.MenuList>
            <S.CheckBox>
                <HistoryCheckBox/>
            </S.CheckBox>
            <S.MenuName>전체선택</S.MenuName>
            <S.Menu>
                <S.MenuLogo src="/asset/Delete.svg"/>
                <S.MenuName>삭제</S.MenuName>
            </S.Menu>
        </S.MenuList>
        <KeyWordAlertList>
            {alertList.map((mail,id) => (
                <>
                <S.StorageAlert key ={id}>
                    <HistoryCheckBox/>
                    <Sender>{mail.sender}</Sender>
                    <S.MemoAlertWrapper>
                        <S.AlertContent>
                            <AlertTitle>{mail.text}</AlertTitle>
                            <S.AlertProp>
                                <S.MemoOption onClick={writeMemo}>메모</S.MemoOption>
                                <S.DivideLine src="/asset/DivideLine.svg"/>
                                <S.ReceiveDate>{mail.date}</S.ReceiveDate>
                            </S.AlertProp>
                        </S.AlertContent>
                    </S.MemoAlertWrapper>
                </S.StorageAlert>
                </>
            ))}
    </KeyWordAlertList>
    </S.Wrapper>
    )
}

export default StorageContent;