import React from "react";
import styled from "styled-components";
import theme from '../../theme';
import HistoryCheckBox from "./HisoryCheckBox";
import * as S from './Scrap.Style';
import { MENU_ITEM } from 'constant';
import { formatingDate } from "./HistoryContent";
const mobileL = theme.deviceSizes.mobileL;

const SwipeWrapper = styled.div`
    width: 100%;
    overflow: scroll;
    display: flex;
`

const Alert = styled.div`
    min-width: 100%;
    margin: 0 0 0 5%;
`
const AlertWrapper = styled.li`
    @media screen and (max-width: ${mobileL}){
        width: 99%;
        display: flex;
        justify-content: start;
        margin-top: 16px;
        margin-bottom: ${props=>props.state==='WRITE'?'9px':'15px'};
    }
`


const AlertContent = styled.div`
    @media screen and (max-width: ${mobileL}) {
        display: block;
        width: 85%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const AlertDetail = styled.div`
    @media screen and (max-width: ${mobileL}) {
    width: 96%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    }
`

const Sender = styled.div`
@media screen and (max-width: ${mobileL}) {
    font-size: 14px;
    width: 52px;
  }
`
const ReceiveDate = styled.div`
font-size: 11px;
`
const AlertTitle = styled.div`
@media screen and (max-width: ${mobileL}) {
    display: block;
    max-width: 90%;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
`
const AlertBorderLine = styled.div`
  @media screen and (max-width: ${mobileL}){
    &:after{
        display: block;
        content:"";
        width: 87%;
        border-bottom: 1px solid #eee;
        margin-left: 3%;
    }
  }
`
const MemoWrapper = styled.div`
  @media screen and (max-width: ${mobileL}){
      display: flex;
      justify-content: space-between;
      width: 96%;
      margin: 13px 0 0 0;
      border: 1px solid black;
  }
`
const MemoCircle = styled.div`
    width: 8px;
  height: 8px;
  background-color: #ffd25d;
  border-radius: 50%;
  margin: 5px 8px 0 0;

`
const MemoText = styled.div`
  width: 55%;
  color: #999;
`

const FixedAlert = styled.span`
  font-size: 11px;
  min-width: 38px;
  margin: 16px 0 0 0;
  color: #999;
`

const Memo = styled.div`
  display: flex;
`
const MemoFixBlock = styled.div`
  width: 88px;
  min-width: 88px;
  hegith: 119px;
  background: #ffd25d;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MemoWriteBlock = styled.div`
    width: 88px;
    min-width: 88px;
    hegith: 119px;
    background: #222;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MenuBlock = styled.div`
  width: 176px;
  display:flex;
  border: 1px solid white;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 11px;
`
const MemoOption = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;
    color: #999;
    margin: 11px 0 0 0;
`
const LetterCounter = styled.div`
  font-size: 12px;
`
const WriteBlockWrapper = styled.div`
    width: 88%;
    height: 74px;
    background: #eee;
    padding: 8px;
    margin-top: 8px;
`
const SaveBtn = styled.div`
  font-size: 11px;
  cursor: pointer;
`
const MobileScrapAlert = ({mail, selectMail, list}) => {
    return(
        // <SwipeWrapper>
        //     <Alert>
        //         <AlertWrapper>
        //             <HistoryCheckBox
        //             onClick={(e) => selectMail(e, mail.id)}
        //             checked={list.includes(mail.id) ? true : false}
        //             readOnly
        //             />
        //             <AlertContent>
        //                 <AlertDetail>
        //                     <Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</Sender>
        //                     <ReceiveDate>{formatingDate(mail.created_at)}</ReceiveDate>
        //                 </AlertDetail>
        //                 <AlertTitle>{mail.title}</AlertTitle>
        //                 <MemoWrapper>
        //                     <Memo>
        //                     <MemoCircle/>
        //                     <MemoText>테스트용 메모하나둘셋넷띄우고띄우고띄우고다섯</MemoText>
        //                     </Memo>
        //                     <FixedAlert>(수정됨)</FixedAlert>
        //                 </MemoWrapper>
        //             </AlertContent>
        //         </AlertWrapper>
        //         <AlertBorderLine/>
        //     </Alert>
        //     <MenuBlock>
        //     <MemoFixBlock>
        //         <Icon src="/asset/FixMemo.svg" alt="수정"/>
        //         <div>메모 수정</div>
        //     </MemoFixBlock>
        //     <MemoWriteBlock>
        //         <Icon src="/asset/AddMemo.svg" alt="추가"/>
        //         <div>메모 추가</div>
        //     </MemoWriteBlock>
        //     </MenuBlock>
        //     </SwipeWrapper>
            <Alert>
                <AlertWrapper state={'WRITE'}>
                    <HistoryCheckBox
                    onClick={(e) => selectMail(e, mail.id)}
                    checked={list.includes(mail.id) ? true : false}
                    readOnly
                    />
                    <AlertContent>
                        <AlertDetail>
                            <Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</Sender>
                            <ReceiveDate>{formatingDate(mail.created_at)}</ReceiveDate>
                        </AlertDetail>
                        <AlertTitle>{mail.title}</AlertTitle>
                        <WriteBlockWrapper>
                            <S.WriteBlock/>
                            <MemoOption>
                            <LetterCounter>0/100</LetterCounter>
                            <SaveBtn>완료</SaveBtn>
                            </MemoOption>
                            
                        </WriteBlockWrapper>
                    </AlertContent>
                </AlertWrapper>
                <AlertBorderLine/>
            </Alert>

        
    )
}

export default MobileScrapAlert;