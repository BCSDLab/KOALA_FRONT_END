import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import * as S from './Scrap.Style';
import { useDispatch, useSelector } from 'react-redux';
import { getMemo, getScrapList, fixMemo, writeMemo } from 'store/scrap';
import theme from '../../../theme';
import { useMediaQuery } from 'react-responsive';
import MobileScrapAlert from './MobileScrapAlert';
import ScrapMenuBar from './ScrapMenuBar';
import ScrapAlert from './ScrapAlert';

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
  const [currentMail, setCurr] = useState(null);
  const [checkedList, setCheckedList] = useState([]);
  const [memoState, setMemoState] = useState('READ')
  const memoValue = useRef();
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
              currentMail={currentMail}
              memoItemList={memoItemList}
              memoValue={memoValue}
              setCurr={setCurr}
              key={mail.id}
              setIdList={setIdList}
              memoState={memoState}
              setMemoState={setMemoState}
            />
          ))}
        </S.KeyWordAlertList>
      </S.Content>
      
    </S.Wrapper>
    </>
  );
};

export default ScrapContent;
