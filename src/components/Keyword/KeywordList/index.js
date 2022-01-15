import React from "react";
import * as S from './styles';
import { getTitle } from "../utils";

const KeywordList = ({list,onClickCheckSome,checkListId,checkAll,onClickReadItem,isToggle,getTitle}) => {
    return(
        <S.MainList toggle={isToggle}>
                {list&&list.map((item)=>{
                    return(
                    <S.MainItem key={item.id}>
                        <S.MainCheckBox onClick={() => onClickCheckSome(item.id)} checkSome={checkListId.includes(item.id)} checkAll={checkAll}></S.MainCheckBox>
                        <S.MainCheckBoxTitle readState={item.isRead}>{getTitle(item.url)}</S.MainCheckBoxTitle>
                        <a href={`${item.url}`} target='_blank'>
                            <S.MainContent readState={item.isRead} onClick={() => onClickReadItem(item.id,item.isRead)}>{item.title}</S.MainContent>
                        </a>
                        <S.MainReadState>{item.isRead?"읽음":"읽지 않음"}</S.MainReadState>
                        <S.MainPeriod readState={item.isRead}>{item.createdAt}</S.MainPeriod>
                    </S.MainItem>
                    );
                })}
            </S.MainList>
    );
}

export default KeywordList;