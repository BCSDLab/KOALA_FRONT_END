import React, { useState } from 'react';
import HistoryCheckBox from './HisoryCheckBox';
import * as S from './History.Style';
import { SITE_LIST } from 'constant';
import { useDispatch, useSelector } from 'react-redux';
import { readHistoryItem } from 'store/history';

export const formatingDate = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
    const day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
    const hour = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
    const minute = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
    return `${month + '/' + day} - ${(hour === 0 ? '00' : hour) + ':' + (minute===0?'00':minute)}`;
  };
const HistoryAlert = ({isToggleOpen, selectMail, checkedList, isMobile, mail}) => {
    const dispatch = useDispatch()
    const [isClicked, setClick] = useState(mail.isRead);
    const clickMail = (id) => {
        if(!isClicked){
            dispatch(readHistoryItem(id));
            setClick(!isClicked)
        }
    };
    return (
        <>
          <S.KeyWordAlert isRead={isClicked} key={mail.id} isToggleOpen={isToggleOpen}>
            <HistoryCheckBox
              onClick={(e) => selectMail(e, mail)}
              checked={checkedList.includes(mail) ? true : false}
              readOnly
            />
            <S.AlertContent>
              <S.AlertDetail>
                <S.Sender>{SITE_LIST[SITE_LIST.findIndex((site) => site.id === mail.site)].title}</S.Sender>
                {isMobile && <S.ReceiveDate>{formatingDate(mail.createdAt)}</S.ReceiveDate>}
              </S.AlertDetail>
              <S.AlertTitle href={mail.url} isRead={isClicked} target='_blank' onClick={(e) => clickMail(mail.id)} isToggleOpen={isToggleOpen}>
                {mail.title}
              </S.AlertTitle>
            </S.AlertContent>
            {!isMobile && (
              <S.AlertInfo>
                <S.MailBrowse>{isClicked ? '읽음' : '읽지않음'}</S.MailBrowse>
                <S.ReceiveDate>{formatingDate(mail.createdAt)}</S.ReceiveDate>
              </S.AlertInfo>
            )}
          </S.KeyWordAlert>
          {isMobile && <S.AlertBorderBox />}
        </>
      )
}

export default HistoryAlert