import React,{useRef, useState} from "react";
import styled from "styled-components";
import HistoryCheckBox from '../History/HisoryCheckBox';
import * as S from './Scrap.Style';
import * as M from './MobileScrapAlert.Style';
import { MENU_ITEM } from 'constant';
import { formatingDate } from "../History/HistoryContent";
import {writeMemo, fixMemo} from 'store/scrap';
import {useDispatch} from 'react-redux';
// import {Swiper,SwiperSlide} from 'swiper/react/swiper-react';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
import theme from '../../../theme';
const {gray, yellow} = theme.colors;

const MobileScrapAlert = ({mail, selectMail, list, memo, writeId, setCurr}) => {
    const dispatch = useDispatch();
    const memoRef = useRef();
    const memoLengthRef = useRef();
    const [pageState, setState] = useState('READ');
    const addMemo = () => {
        console.log(mail.userScrapId);
        if(pageState === 'WRITE'){
            dispatch(writeMemo({memo: memoRef.current.value, user_scrap_id: mail.userScrapId}));
        }else if(pageState === 'FIX'){
            dispatch(fixMemo({memo: memoRef.current.value, user_scrap_id: mail.userScrapId}));
        }
        setState('READ');
        setCurr(null);
    }
    const checkLength = () =>{
        memoLengthRef.current.innerText = memoRef.current.value.length;
        if(memoRef.current.value.length >= 100){
            memoLengthRef.current.style.color = yellow;
        }else{
            memoLengthRef.current.style.color = gray;
        }
    }
    const write = () => {
        if(memo.length === 0){
            setCurr(mail.id)
            setState('WRITE');
        }
    }
    const fix = () => {
        if(memo.length > 0){
            setCurr(mail.id);
            setState('FIX');
        }
    }
    return(
        mail.id !== writeId?
    //     <Swiper
    //     className='swiper-container'
    //     spaceBetween={50}
    //     slidesPerView={3}
    //     onSwiper={(swiper) => console.log(swiper)}
    //     onSlideChange={() => console.log("slide change")}
    //   >
    //     <SwiperSlide> slide1 </SwiperSlide>
    //     <SwiperSlide> slide2 </SwiperSlide>
    //     <SwiperSlide> slide3 </SwiperSlide>
    //   </Swiper>

        <M.SwipeWrapper>
            <M.Alert>
                <M.AlertWrapper>
                    <HistoryCheckBox
                    onClick={(e) => selectMail(e, mail.id)}
                    checked={list.includes(mail.id) ? true : false}
                    readOnly
                    />
                    <M.AlertContent>
                        <M.AlertDetail>
                            <M.Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</M.Sender>
                            <M.ReceiveDate>{formatingDate(mail.created_at)}</M.ReceiveDate>
                        </M.AlertDetail>
                        <M.AlertTitle>{mail.title}</M.AlertTitle>
                        <M.MemoWrapper>
                          {memo.length >0?
                          <M.Memo>
                          <M.MemoCircle/>
                          <M.MemoText>{memo}</M.MemoText>
                          </M.Memo>
                          :
                          null
                          }
                          {/* <FixedAlert>(수정됨)</FixedAlert> */}
                        </M.MemoWrapper>
                    </M.AlertContent>
                </M.AlertWrapper>
                <M.AlertBorderLine/>
            </M.Alert>
            <M.MenuBlock>
            <M.MemoFixBlock onClick={fix}>
                <M.Icon src="/asset/FixMemo.svg" alt="수정"/>
                <div>메모 수정</div>
            </M.MemoFixBlock>
            <M.MemoWriteBlock onClick={write}>
                <M.Icon src="/asset/AddMemo.svg" alt="추가"/>
                <div>메모 추가</div>
            </M.MemoWriteBlock>
            </M.MenuBlock>
            </M.SwipeWrapper>
            :
            <M.Alert>
                <M.AlertWrapper state={'WRITE'}>
                    <HistoryCheckBox
                    onClick={(e) => selectMail(e, mail.id)}
                    checked={list.includes(mail.id) ? true : false}
                    readOnly
                    />
                    <M.AlertContent>
                        <M.AlertDetail>
                            <M.Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</M.Sender>
                            <M.ReceiveDate>{formatingDate(mail.created_at)}</M.ReceiveDate>
                        </M.AlertDetail>
                        <M.AlertTitle>{mail.title}</M.AlertTitle>
                        <M.WriteBlockWrapper>
                            <S.WriteBlock
                                defaultValue={memo.length>0?memo:null}
                                maxLength={100}
                                ref={memoRef}
                                onChange={checkLength}/>
                            <M.MemoOption>
                            <M.LetterCounter><span ref={memoLengthRef}>{memo[0]?memo[0].length:0}</span>/100자</M.LetterCounter>
                            <M.SaveBtn onClick={addMemo}>완료</M.SaveBtn>
                            </M.MemoOption>
                        </M.WriteBlockWrapper>
                    </M.AlertContent>
                </M.AlertWrapper>
                <M.AlertBorderLine/>
            </M.Alert>

        
    )
}

export default MobileScrapAlert;