import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import * as S from './Scrap.Style';
import {  Sender } from '../History/History.Style';
import { useDispatch, useSelector } from 'react-redux';
import HistoryCheckBox from '../History/HisoryCheckBox';
import { getMemo, getScrapList, deleteScrapItem, fixMemo, writeMemo } from 'store/scrap';
import { SITE_LIST } from 'constant';
import { formatingDate } from '../History/HistoryContent';
import theme from '../../../theme';
import { useMediaQuery } from 'react-responsive';
import MobileScrapAlert from './MobileScrapAlert';


const memoState = ['READ', 'WRITE', 'FIX'];
const {gray, yellow} = theme.colors;

const stringToDate = (date) => {
  var yyyyMMdd = String(date);
  var sYear = yyyyMMdd.substring(0, 4);
  var sMonth = yyyyMMdd.substring(5, 7);
  var sDate = yyyyMMdd.substring(8, 10);
  return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};
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
const findMemoInAlert = (memoList, alert) => {
  return memoList
    .filter((memo) => memo.userScrapId === alert.userScrapId)
    .map((memo) => {
      return memo.memo;
    });
};
const ScrapContent = () => {
  const { scrapList, memoList, getMemoListResponse, deleteScrapResponse, fixMemoResponse, writeMemoResponse } =
    useSelector((state) => state.scrap);
  const userInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [memoItemList, setMemo] = useState([]);
  const [memoIdList, setIdList] = useState([]);
  const [scrapItemList, setScrap] = useState([]);
  const [pageState, setState] = useState('READ');
  const [currentMail, setCurr] = useState(null);
  const [checkedList, setCheckedList] = useState([]);
  const letter = useRef();
  const fixMemoValue = useRef(null);
  const writeMemoValue = useRef();
  const isMobile = useMediaQuery({ query: `(max-width:${theme.deviceSizes.tabletL}` });
  useEffect(() => {
    if (userInfo.isLoggedIn) {
      dispatch(getMemo());
    }
  }, [scrapItemList]);
  useEffect(() => {
    if (getMemoListResponse) {
      setMemo(memoList);
      setIdList(
        memoList.map((memo) => {
          return memo.userScrapId;
        })
      );
    }
  }, [memoList]);
  //상태에 따라 메모/수정/완료 표시

  const write = (e, id) => {
    if (pageState === 'READ') {
      e.target.innerText = '완료';
      setState('WRITE');
      setCurr(id);
    } else if (pageState === 'WRITE') {
      const memoStatement = writeMemoValue.current.value;
      if (memoStatement !== '') {
        setState('READ');
        setIdList([...memoIdList, id]);
        setCurr(null);
        e.target.innerText = '수정';
        dispatch(writeMemo({ memo: memoStatement, user_scrap_id: id }));
      } else {
        alert('내용을 적어주세요');
      }
    }
  };
  const fix = (e, id) => {
    if (pageState === 'READ') {
      setState('FIX');
      e.target.innerText = '완료';
      setCurr(id);
    } else if (pageState === 'FIX') {
      setState('READ');
      setCurr(null);
      e.target.innerText = '수정';
      const memoStatement = fixMemoValue.current.value;
      dispatch(fixMemo({ memo: memoStatement, user_scrap_id: id }));
    }
  };
  const selectAll = (e) => {
    if (e.target.checked) {
      setCheckedList(
        scrapItemList.map((mail) => {
          return mail.id;
        })
      );
    } else {
      setCheckedList([]);
    }
  };
  const selectMail = (e, id) => {
    if (e.target.checked) {
      setCheckedList([...checkedList, id]);
    } else {
      setCheckedList(checkedList.filter((mailId) => mailId !== id));
    }
  };
  const deleteAlert = () => {
    if (checkedList.length > 0) {
      dispatch(deleteScrapItem(checkedList));
      setCheckedList([]);
    } else {
      alert('삭제할 메일을 선택해 주세요');
    }
  };
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

  useLayoutEffect(() => {
    if (userInfo.isLoggedIn || getMemoListResponse || deleteScrapResponse || fixMemoResponse) {
      dispatch(getScrapList());
    }
  }, [userInfo.isLoggedIn, deleteScrapResponse, fixMemoResponse]);
  useEffect(() => {
    setScrap(
      scrapList?.sort((a, b) => {
        a = stringToDate(a.created_at);
        b = stringToDate(b.created_at);
        return a > b ? -1 : a < b ? 1 : 0;
      })
    );
  }, [scrapList]);

  return (
    <>
    <S.Wrapper>
      <S.Content>
      <S.MenuList>
        <S.CheckBox>
          <HistoryCheckBox
            onClick={(e) => selectAll(e)}
            checked={checkedList.length <= 0 || checkedList.length !== scrapItemList.length ? false : true}
            readOnly
          />
           <S.SelectAll>전체선택</S.SelectAll>
        </S.CheckBox>
        <S.Menu onClick={deleteAlert}>
          <S.MenuLogo src="/asset/Delete.svg" />
          <S.MenuName>삭제</S.MenuName>
        </S.Menu>
      </S.MenuList>
      <S.KeyWordAlertList scrollOption={scrapItemList?.length >= 12 ? true : false}>
        {scrapItemList?.map((mail) => (
          isMobile? <MobileScrapAlert
                      mail={mail}
                      selectMail={selectMail}
                      list={checkedList}
                      memo={findMemoInAlert(memoItemList, mail)}
                      writeId={currentMail}
                      setCurr={setCurr}
                      />
          :
          <S.StorageAlert key={mail.id}>
            <HistoryCheckBox
              onClick={(e) => selectMail(e, mail.id)}
              checked={checkedList.includes(mail.id) ? true : false}
              readOnly
            />
            <Sender>{SITE_LIST[SITE_LIST.findIndex((site) => site.id === mail.site)].title}</Sender>
            <S.MemoAlertWrapper>
              <S.AlertContent>
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
                        <S.WriteBlock
                          defaultValue={findMemoInAlert(memoItemList, mail)}
                          onChange={(e) => checkByte(e)}
                          maxLength={100}
                          ref={fixMemoValue}
                        />
                        <S.LetterCounter>
                          <S.LettterLength
                            ref={letter}
                          >
                            {findMemoInAlert(memoItemList, mail)[0].length}
                          </S.LettterLength>
                          /100
                        </S.LetterCounter>
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
        ))}
      </S.KeyWordAlertList>
      </S.Content>
      
    </S.Wrapper>
    </>
  );
};

export default ScrapContent;
