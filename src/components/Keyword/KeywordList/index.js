import React from 'react';
import keywordList from './dummy';
import KeywordHeader from '../KeywordHeader';
import * as s from './styles';

const KeywordList = () => {
    return(
        <>
            <KeywordHeader/>
            <s.Menu>
                <s.Item>전체</s.Item>
                <s.Item>아우누리</s.Item>
                <s.Item>아우미르</s.Item>
                <s.Item>대신 전해드립니다-koreatech</s.Item>
            </s.Menu>
            <s.ItemUnderBar></s.ItemUnderBar>
            <s.FilterList>
                <s.CheckBox className='checkBox'></s.CheckBox>
                <s.CheckBoxTitle className='checkTitle'>전체 선택</s.CheckBoxTitle>
                <s.FilterItem className='read'>읽은 알림</s.FilterItem>
                <s.FilterItem className='notread'>읽지 않은 알림</s.FilterItem>
                <s.FilterItem className='goStore'>
                    <s.FilterItemImage src='/asset/inbox-in.svg' alt='inbox-in'></s.FilterItemImage>
                    <span>보관함으로 이동</span>
                </s.FilterItem>
                <s.FilterItem className='delete'>
                    <s.FilterItemImage src='/asset/trash.svg' alt='trash'></s.FilterItemImage>
                    <span>삭제</span>
                </s.FilterItem>
                <s.SearchInput placeholder='알림대상/알림내용/키워드 입력'></s.SearchInput>
                <s.SearchButton>
                    <span>검색하기</span>
                    <s.SearchImage src='/asset/search.svg'></s.SearchImage>
                </s.SearchButton>
            </s.FilterList>
            <s.MainList>
                {keywordList.map((item)=>{
                    return(
                    <s.MainItem key={item.id}>
                        <s.MainCheckBox></s.MainCheckBox>
                        <s.MainCheckBoxTitle>{item.title}</s.MainCheckBoxTitle>
                        <s.MainContent>{item.content}</s.MainContent>
                        <s.MainReadState>{item.readState}</s.MainReadState>
                        <s.MainPeriod>{item.period}</s.MainPeriod>
                    </s.MainItem>
                    );
                })}
            </s.MainList>
        </>
    );
}

export default KeywordList;