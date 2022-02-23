import React, { useRef} from "react";
import { useDispatch } from "react-redux";
import { deleteKeyword } from 'store/keyword';
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
    background: ${theme.colors.white};
    height: 48px;
    width: 75%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 5% 0 0;
    left: 0;
    transition: 0.5s ease;
`
const KeyWordSwiper = styled.div`
    display: flex;
    position: relative;
    left: 0;
    transition: 0.5s ease;
    width: 125%;
    background: #ff3b30;
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
    height: 48px;
    color: ${theme.colors.white};
    padding: 0 32px 0  31px;
`
const SwiperWrapper = styled.div`
    width: 100%;
    background: #ff3b30;
    &:last-child{
        margin-bottom: 26px;
    }
`
const MobileKeywordSelect = ({keywords, onClickAddKeyword, onClickItem}) => {
    const swiperRef = useRef([]);
    const elementRef = useRef([]);
    const keywordId = [null];
    const cordX = [null];
    const dispatch = useDispatch();
    const moveLeft = (e,id,name) =>{
        const startPoint = cordX[cordX.length-1];
        swiperRef.current[id].style.left = `-${startPoint-e.changedTouches[0].clientX}`;
        if(startPoint-e.changedTouches[0].clientX > (window.innerWidth*0.225)){
            swiperRef.current[id].style.left = '-88px';
            keywordId.push(id);
            keywordId.slice(1,2)
        }
        if(startPoint-e.changedTouches[0].clientX > (window.innerWidth*0.675)){
            console.log(elementRef.current[id]);
            elementRef.current[id].style.left = `-${window.innerWidth}px`;
            keywordId.push(null);
            keywordId.slice(1,2)
            deleteKeywordItem(name);
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
    const deleteKeywordItem = (name) => {
        dispatch(deleteKeyword(name));
    }
    return (
        <Pannel>
            <Logo src="/asset/mainLogo.svg"/>
            <KeywordWrapper onClick={rollBack}>
                <KeywordLabel>키워드</KeywordLabel>
                <ElementContainer>
                {keywords?.map(keyword => 
                <SwiperWrapper key={keyword.id} onClick={() => onClickItem(keyword.id, keyword.name)}>
                    <KeyWordSwiper ref={(element) => {
                        swiperRef.current[keyword.id]  = element
                    }} onTouchMove={(e) => moveLeft(e,keyword.id,keyword.name)} onTouchStart={touchStart}>
                        <KeywordElement ref={(element) => {
                            elementRef.current[keyword.id]  = element
                            }}>
                            <KeywordName>{keyword.name}</KeywordName>
                            <KeywordCount>{keyword.noticeNum}</KeywordCount>
                        </KeywordElement>
                        <Deletebtn onClick={() => deleteKeywordItem(keyword.name)}>제거</Deletebtn>
                    </KeyWordSwiper>
                </SwiperWrapper>
                )}
                </ElementContainer>
                <AddKeywordBtn onClick={onClickAddKeyword}><AddBtnImg src='/asset/GrayPlus.svg'/>키워드추가하기</AddKeywordBtn>
            </KeywordWrapper>
        </Pannel>
    )
}


export default MobileKeywordSelect;