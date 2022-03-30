import React from "react";
import * as S from './Scrap.Style'
import {  Sender } from '../History/History.Style';
import { SITE_LIST } from 'constant';
import { formatingDate } from '../History/HistoryAlert';
import { useRef } from "react";
import theme from '../../../theme';
import HistoryCheckBox from '../History/HisoryCheckBox';
import { findMemoInAlert } from "./ScrapContent";
const {gray, yellow} = theme.colors;
const makeStringToNewLine = (text) => {
    if (text) {
      const fixedText = text.split('').map((char) => {
        if (char == '\n') {
          return <br />;
        } else {
          return char;
        }
      });
      return fixedText;
    }
  };

const ScrapAlert = ({mail, isToggleOpen, selectMail, isChecked, memoIdList, fix, write, currentMail, pageState, memoItemList, writeMemoValue, fixMemoValue }) => {
    const letter = useRef();
    const checkByte = (obj) => {
        const len = countLetter(obj.target.value);
        letter.current.innerText = len;
        if(len >= 100){
          letter.current.style.color = yellow;
        }else{
          letter.current.style.color = gray;
        }
      };
      const countLetter = (letter) => {
        return letter.length;
      };
    return(
        <S.StorageAlert key={mail.id} isToggleOpen={isToggleOpen}>
            <HistoryCheckBox
              onClick={(e) => selectMail(e, mail.id)}
              checked={isChecked}
              readOnly
            />
            <Sender>{SITE_LIST[SITE_LIST.findIndex((site) => site.id === mail.site)].title}</Sender>
            <S.MemoAlertWrapper isToggleOpen={isToggleOpen}>
              <S.AlertContent isToggleOpen={isToggleOpen}>
                <S.AlertTitle href={mail.url}>{mail.title}</S.AlertTitle>
                <S.AlertProp>
                  {memoIdList.includes(mail.userScrapId) ? (
                    <S.MemoOption onClick={(e) => fix(e, mail.userScrapId)}>수정</S.MemoOption>
                  ) : (
                    <S.MemoOption onClick={(e) => write(e, mail.userScrapId)}>메모</S.MemoOption>
                  )}
                  <S.DivideLine src="/asset/DivideLine.svg" />
                  <S.ReceiveDate>{formatingDate(mail.created_at)}</S.ReceiveDate>
                </S.AlertProp>
              </S.AlertContent>
              <S.MemoWrapper>
                {memoIdList.includes(mail.userScrapId) ? (
                  <>
                    {mail.userScrapId === currentMail ? null : <S.MemoCircle />}
                    {mail.userScrapId === currentMail && (pageState === 'FIX' || pageState === 'WRITE') ? (
                      <S.memoContent>
                        <S.MemoPanel>
                          <S.WriteBlock
                            defaultValue={findMemoInAlert(memoItemList, mail)}
                            onChange={(e) => checkByte(e)}
                            maxLength={100}
                            ref={fixMemoValue}
                            isToggleOpen={isToggleOpen}
                          />
                          <S.LetterCounter>
                            <S.LettterLength
                              ref={letter}
                            >
                              {findMemoInAlert(memoItemList, mail)[0].length}
                            </S.LettterLength>
                            /100
                          </S.LetterCounter>
                        </S.MemoPanel>
                      </S.memoContent>
                    ) : (
                      <S.MemoBlock>{makeStringToNewLine(findMemoInAlert(memoItemList, mail)[0])}</S.MemoBlock>
                    )}
                  </>
                ) : mail.userScrapId === currentMail && (pageState === 'FIX' || pageState === 'WRITE') ? (
                  <S.memoContent>
                    <S.WriteBlock onChange={(e) => checkByte(e)} maxLength={100} ref={writeMemoValue} />
                    <S.LetterCounter>
                      <span ref={letter}>0</span>/100
                    </S.LetterCounter>
                  </S.memoContent>
                ) : null}
              </S.MemoWrapper>
            </S.MemoAlertWrapper>
          </S.StorageAlert>
    )
}

export default ScrapAlert;