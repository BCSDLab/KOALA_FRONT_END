import React, {useState} from "react";
import * as S from './Scrap.Style'
import {  Sender } from '../History/History.Style';
import { SITE_LIST } from 'constant';
import { formatingDate } from '../History/HistoryAlert';
import { useRef } from "react";
import theme from '../../../theme';
import HistoryCheckBox from '../History/HisoryCheckBox';
import { findMemoInAlert } from "./ScrapContent";
import { useDispatch } from "react-redux";
import { fixMemo, writeMemo } from "store/scrap";
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

// const ScrapAlert = ({mail, isToggleOpen, selectMail, isChecked, memoIdList, fix, write, currentMail, pageState, memoItemList, writeMemoValue, fixMemoValue }) => {
  const ScrapAlert = ({mail, isToggleOpen, selectMail, isChecked, memoIdList, currentMail,  memoItemList, setCurr, setIdList}) => {
    const letter = useRef();
    const memoValue = useRef()
    const [memoState, setMemoState] = useState('READ')
    const dispatch = useDispatch();
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
      const customizeMemo = (e, id, state) => {
        if(memoState === 'READ'){
          setMemoState(state);
          e.target.innerText = '완료';
          setCurr(id);
        }else{
          const memoStatement = memoValue.current.value;
          switch(memoState){
            case 'FIX':
              setMemoState('READ');
              setCurr(null);
              e.target.innerText = '수정';
              dispatch(fixMemo({ memo: memoStatement, user_scrap_id: id }));
              break;
            case 'WRITE':
              if (memoStatement !== '') {
                setMemoState('READ');
                setIdList([...memoIdList, id]);
                setCurr(null);
                e.target.innerText = '수정';
                dispatch(writeMemo({ memo: memoStatement, user_scrap_id: id }));
              } else {
                alert('내용을 적어주세요');
              }
              break;
          }
        }
        }
    return(
        <S.StorageAlert isToggleOpen={isToggleOpen}>
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
                    <S.MemoOption onClick={(e) => customizeMemo(e, mail.userScrapId, 'FIX')}>수정</S.MemoOption>
                  ) : (
                    <S.MemoOption onClick={(e) => customizeMemo(e, mail.userScrapId, 'WRITE')}>메모</S.MemoOption>
                  )}
                  <S.DivideLine src="/asset/DivideLine.svg" />
                  <S.ReceiveDate>{formatingDate(mail.created_at)}</S.ReceiveDate>
                </S.AlertProp>
              </S.AlertContent>
              <S.MemoWrapper>
                {console.log(currentMail)}
                {memoIdList.includes(mail.userScrapId) ? (
                  <>
                    {mail.userScrapId === currentMail ? null : <S.MemoCircle />}
                    {mail.userScrapId === currentMail && (memoState === 'FIX' || memoState === 'WRITE') ? (
                      <S.memoContent>
                        <S.MemoPanel>
                          <S.WriteBlock
                            defaultValue={findMemoInAlert(memoItemList, mail)}
                            onChange={(e) => checkByte(e)}
                            maxLength={100}
                            ref={memoValue}
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
                ) :  
                mail.userScrapId === currentMail && memoState === 'WRITE' ? (
                  <S.memoContent>
                    <S.WriteBlock onChange={(e) => checkByte(e)} maxLength={100} ref={memoValue} />
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