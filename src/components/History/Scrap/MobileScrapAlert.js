import React from "react";
import styled from "styled-components";
import HistoryCheckBox from '../History/HisoryCheckBox';
import * as S from './Scrap.Style';
import * as M from './MobileScrapAlert.Style';
import { MENU_ITEM } from 'constant';
import { formatingDate } from "../History/HistoryContent";

const MobileScrapAlert = ({mail, selectMail, list, memo, state}) => {
    return(
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
                          </M.Memo>:
                          null
                          }
                          {/* <FixedAlert>(수정됨)</FixedAlert> */}
                        </M.MemoWrapper>
                    </M.AlertContent>
                </M.AlertWrapper>
                <M.AlertBorderLine/>
            </M.Alert>
            <M.MenuBlock>
            <M.MemoFixBlock>
                <M.Icon src="/asset/FixMemo.svg" alt="수정"/>
                <div>메모 수정</div>
            </M.MemoFixBlock>
            <M.MemoWriteBlock>
                <M.Icon src="/asset/AddMemo.svg" alt="추가"/>
                <div>메모 추가</div>
            </M.MemoWriteBlock>
            </M.MenuBlock>
            </M.SwipeWrapper>
            // <Alert>
            //     <AlertWrapper state={'WRITE'}>
            //         <HistoryCheckBox
            //         onClick={(e) => selectMail(e, mail.id)}
            //         checked={list.includes(mail.id) ? true : false}
            //         readOnly
            //         />
            //         <AlertContent>
            //             <AlertDetail>
            //                 <Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</Sender>
            //                 <ReceiveDate>{formatingDate(mail.created_at)}</ReceiveDate>
            //             </AlertDetail>
            //             <AlertTitle>{mail.title}</AlertTitle>
            //             <WriteBlockWrapper>
            //                 <S.WriteBlock/>
            //                 <MemoOption>
            //                 <LetterCounter>0/100</LetterCounter>
            //                 <SaveBtn>완료</SaveBtn>
            //                 </MemoOption>
            //             </WriteBlockWrapper>
            //         </AlertContent>
            //     </AlertWrapper>
            //     <AlertBorderLine/>
            // </Alert>

        
    )
}

export default MobileScrapAlert;