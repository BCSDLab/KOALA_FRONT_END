import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import * as S from './Scrap.Style';
import { useDispatch, useSelector } from 'react-redux';
import { getMemo, getScrapList, fixMemo, writeMemo } from 'store/scrap';
import theme from '../../../theme';
import { useMediaQuery } from 'react-responsive';
import MobileScrapAlert from './MobileScrapAlert';
import ScrapMenuBar from './ScrapMenuBar';
import ScrapAlert from './ScrapAlert';


const memoState = ['READ', 'WRITE', 'FIX'];

const stringToDate = (date) => {
  var yyyyMMdd = String(date);
  var sYear = yyyyMMdd.substring(0, 4);
  var sMonth = yyyyMMdd.substring(5, 7);
  var sDate = yyyyMMdd.substring(8, 10);
  return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};
export const findMemoInAlert = (memoList, alert) => {
  return memoList
    .filter((memo) => memo.userScrapId === alert.userScrapId)
    .map((memo) => {
      return memo.memo;
    });
};
const ScrapContent = ({isToggleOpen}) => {
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
      <ScrapMenuBar 
        isChecked={checkedList.length <= 0 || checkedList.length !== scrapItemList.length ? false : true} 
        selectAll={selectAll}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        isToggleOpen={isToggleOpen}
      />
      <S.KeyWordAlertList scrollOption={scrapItemList?.length >= 12 ? true : false}>
        {scrapItemList?.map((mail) => (
          isMobile? <MobileScrapAlert
                      mail={mail}
                      selectMail={selectMail}
                      list={checkedList}
                      memo={findMemoInAlert(memoItemList, mail)}
                      writeId={currentMail}
                      setCurr={setCurr}
                      key={mail.id}
                      />
          :
          <ScrapAlert
            mail={mail}
            isToggleOpen={isToggleOpen}
            selectMail={selectMail}
            isChecked={checkedList.includes(mail.id) ? true : false}
            memoIdList={memoIdList}
            fix={fix}
            write={write}
            currentMail={currentMail}
            pageState={pageState}
            memoItemList={memoItemList}
            writeMemoValue={writeMemoValue}
            fixMemoValue={fixMemoValue}
            key={mail.id}
          />
        ))}
      </S.KeyWordAlertList>
      </S.Content>
      
    </S.Wrapper>
    </>
  );
};

export default ScrapContent;
