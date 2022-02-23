import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import theme from '../../../theme';

const Pannel = styled.div`
    width: 100%;
    margin: 0 auto;
    font-size: 14px;
`
const Logo = styled.img`
    margin: 61px 0 0 5%;
    width: 75px;
    height: 21px;
`
const KeywordWrapper = styled.div`
    margin: 40px 0 0 5%;
`
const KeywordLabel = styled.div`
    margin: 0 5% 0 0;
    border-bottom: 1px solid ${theme.colors.lightgray};
    padding-bottom: 15px;
`
const ElementContainer = styled.div`
    margin: 24px 0 0 0;
`
const KeywordElement = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    margin-right: 5%;
`
const KeyWordSwiper = styled.div`
    display: flex;
    position: relative;
    left: 0;
    transition: 0.5s ease;
    width: 125%;
`
const KeywordName = styled.span`
`
const KeywordCount = styled.span`
    display: block;
    width: 24px;
    heigth: 18px;
    background: ${theme.colors.yellow};
    color: ${theme.colors.white};
    text-align: center;
`
const AddKeywordBtn = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    color: ${theme.colors.gray};
    cursor: pointer;
`
const AddBtnImg = styled.img`
    margin-right: 4px
`
const Deletebtn = styled.div`
    background: #ff3b30;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    color: ${theme.colors.white};
    padding: 0 31px;
`
const SwiperWrapper = styled.div`
    width: 100%;
`
const MobileKeywordSelect = ({keywords}) => {
    const swiperRef = useRef([]);
    const keywordId = [null];
    const cordX = [null];
    const moveLeft = (e,id) =>{
        console.log(e.changedTouches[0].clientX)
        // console.log(cordX[cordX.length-1])
        const startPoint = cordX[cordX.length-1];
        console.log(window.innerWidth)
        if(startPoint-e.changedTouches[0].clientX > (window.innerWidth/4)){
            console.log('work')
            console.log(swiperRef.current)
            swiperRef.current[id].style.left = '-88px';
            keywordId.push(id);
            keywordId.slice(1,2)
        }
    }
    const rollBack = () => {
        swiperRef.current.forEach(element => {
            if(element.style.left === '-88px'){
                element.style.left = '0';
            }
        })
    }
    const touchStart = (e) =>{
        cordX.push(e.touches[0].clientX);
        cordX.slice(1);
    }
    return (
        <Pannel>
            <Logo src="/asset/mainLogo.svg"/>
            <KeywordWrapper onClick={rollBack}>
                <KeywordLabel>키워드</KeywordLabel>
                <ElementContainer>
                {keywords.map(keyword => 
                <SwiperWrapper key={keyword.id}>
                    <KeyWordSwiper ref={(element) => {
                        swiperRef.current[keyword.id]  = element
                    }} onTouchMove={(e) => moveLeft(e,keyword.id)} onTouchStart={touchStart} >
                        <KeywordElement>
                            <KeywordName>{keyword.name}</KeywordName>
                            <KeywordCount>{keyword.noticeNum}</KeywordCount>
                        </KeywordElement>
                        <Deletebtn>제거</Deletebtn>
                    </KeyWordSwiper>
                </SwiperWrapper>
                )}
                </ElementContainer>
                <AddKeywordBtn><AddBtnImg src='/asset/GrayPlus.svg'/>키워드추가하기</AddKeywordBtn>
            </KeywordWrapper>
        </Pannel>
    )
}


export default MobileKeywordSelect;