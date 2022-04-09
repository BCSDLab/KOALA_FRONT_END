import React, { Fragment, useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import * as M from './MobileKeywordItem.style';
import { getTitle } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { readKeywordItem } from 'store/keyword';
import useMatchMedia from 'hooks/useMatchMedia';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router';
import { getKeywordList } from 'store/keyword';

const KeywordList = ({
  checkListId,
  checkAll,
  setCheckListId,
  readNotification,
  notReadNotification,
  keywordSearch,
  searchButton,
  setKeywordSearch,
  setSearchButton,
  setCheckAll,
  list,
  setList,
  menu,
  keywordName,
}) => {
  const dispatch = useDispatch();
  const { keywordList } = useSelector((state) => state.keyword);
  const { isOpen } = useSelector((state) => state.toggle);
  const { state: keyword } = useLocation();
  const [alertList, setAlertList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const [viewRef, inView] = useInView();

  const onClickCheckSome = useCallback(
    (id) => {
      setCheckAll(false);
      let newCheckListId = [...checkListId];
      if (checkListId.includes(id)) {
        newCheckListId = checkListId.filter((item) => {
          if (item !== id) {
            return item;
          }
        });

        setCheckListId(newCheckListId);
      } else {
        newCheckListId.push(id);
        setCheckListId(newCheckListId);
      }
    },
    [checkListId, checkAll]
  );

  const onClickReadItem = (id, isRead) => {
    if (!isRead) {
      dispatch(readKeywordItem(id));
    }
  };

  useEffect(() => {
    if (notReadNotification) {
      const filterList = alertList.filter((item) => {
        return item.isRead === false;
      });
      setList(filterList);
    } else if (readNotification) {
      const filterList = alertList.filter((item) => {
        return item.isRead === true;
      });
      setList(filterList);
    } else {
      setList(alertList);
    }
  }, [readNotification, notReadNotification]);

  useEffect(() => {
    if (JSON.stringify(list) !== JSON.stringify(keywordList) && keywordList && list && keywordList.length !== 0) {
      setList([...list, ...keywordList]);
      setAlertList([...list, ...keywordList]);
    }
  }, [keywordList]);

  useEffect(() => {
    if (checkAll) {
      const listId = list.map((keyword) => keyword.id);
      setCheckListId(listId);
    } else {
      if (checkListId.length === list.length) {
        setCheckListId([]);
      }
    }
  }, [checkAll, pageNum]);

  useEffect(() => {
    setList(keywordList);
    setCheckListId([]);
    setCheckAll(false);
    setPageNum(1);
  }, [keyword]);

  useEffect(() => {
    if (menu === '전체') {
      setList(alertList);
    } else if (menu === '아우누리') {
      const filterList = alertList.filter((item) => {
        if (item.site === 'PORTAL') {
          return item;
        }
      });
      setList(filterList);
    } else if (menu === '아우미르') {
      const filterList = alertList.filter((item) => {
        if (item.site === 'DORM') {
          return item;
        }
      });
      setList(filterList);
    } else {
      setList([]);
    }
  }, [menu]);

  useEffect(() => {
    const filterList =
      list &&
      list.filter((item) => {
        if (`${item.title}`.includes(`${keywordSearch}`)) {
          return item;
        }
      });
    setList(filterList);
    setKeywordSearch('');
    setSearchButton(false);
  }, [searchButton]);

  useEffect(() => {
    if (inView) {
      setPageNum((prev) => prev + 1);
    }
  }, [inView]);

  useEffect(() => {
    dispatch(getKeywordList({ keywordName: keyword, pageNum }));
  }, [pageNum]);

  const queries = ['(max-width: 1024px)'];
  const [mobile] = useMatchMedia(queries);

  return (
    <S.MainList toggle={isOpen}>
      {list && list.length === 0 ? <M.NoResultBox>검색결과가 없습니다.</M.NoResultBox> : null}
      {list &&
        list.map((item) => {
          return !mobile ? (
            <Fragment key={item.id}>
              {list[list.length - 1].id === item.id ? (
                <S.MainItem ref={viewRef}>
                  <S.MainCheckBox
                    onClick={() => onClickCheckSome(item.id)}
                    checkSome={checkListId.includes(item.id)}
                  ></S.MainCheckBox>
                  <S.MainCheckBoxTitle readState={item.isRead}>{getTitle(item.site)}</S.MainCheckBoxTitle>
                  <S.MainContentLink href={`${item.url}`} target="_blank">
                    <S.MainContent readState={item.isRead} onClick={() => onClickReadItem(item.id, item.isRead)}>
                      {item.title}
                    </S.MainContent>
                  </S.MainContentLink>
                  <S.MainReadState>{item.isRead ? '읽음' : '읽지 않음'}</S.MainReadState>
                  <S.MainPeriod readState={item.isRead}>{item.createdAt}</S.MainPeriod>
                </S.MainItem>
              ) : (
                <S.MainItem>
                  <S.MainCheckBox
                    onClick={() => onClickCheckSome(item.id)}
                    checkSome={checkListId.includes(item.id)}
                  ></S.MainCheckBox>
                  <S.MainCheckBoxTitle readState={item.isRead}>{getTitle(item.site)}</S.MainCheckBoxTitle>
                  <S.MainContentLink href={`${item.url}`} target="_blank">
                    <S.MainContent readState={item.isRead} onClick={() => onClickReadItem(item.id, item.isRead)}>
                      {item.title}
                    </S.MainContent>
                  </S.MainContentLink>
                  <S.MainReadState>{item.isRead ? '읽음' : '읽지 않음'}</S.MainReadState>
                  <S.MainPeriod readState={item.isRead}>{item.createdAt}</S.MainPeriod>
                </S.MainItem>
              )}
            </Fragment>
          ) : keywordName !== null ? (
            <Fragment key={item.id}>
              {list[list.length - 1].id === item.id ? (
                <M.Alert>
                  <M.AlertWrapper ref={viewRef}>
                    <S.MainCheckBox
                      onClick={() => onClickCheckSome(item.id)}
                      checkSome={checkListId.includes(item.id)}
                    />
                    <M.AlertContent>
                      <M.AlertDetail>
                        <M.Sender isRead={item.isRead}>{getTitle(item.site)}</M.Sender>
                        <M.ReceiveDate>{item.createdAt}</M.ReceiveDate>
                      </M.AlertDetail>
                      <M.AlertTitle
                        href={item.url}
                        isRead={item.isRead}
                        target="_blank"
                        onClick={() => onClickReadItem(item.id, item.isRead)}
                      >
                        {item.title}
                      </M.AlertTitle>
                    </M.AlertContent>
                  </M.AlertWrapper>
                  <M.AlertBorderLine />
                </M.Alert>
              ) : (
                <M.Alert>
                  <M.AlertWrapper>
                    <S.MainCheckBox
                      onClick={() => onClickCheckSome(item.id)}
                      checkSome={checkListId.includes(item.id)}
                    />
                    <M.AlertContent>
                      <M.AlertDetail>
                        <M.Sender isRead={item.isRead}>{getTitle(item.site)}</M.Sender>
                        <M.ReceiveDate>{item.createdAt}</M.ReceiveDate>
                      </M.AlertDetail>
                      <M.AlertTitle
                        href={item.url}
                        isRead={item.isRead}
                        target="_blank"
                        onClick={() => onClickReadItem(item.id, item.isRead)}
                      >
                        {item.title}
                      </M.AlertTitle>
                    </M.AlertContent>
                  </M.AlertWrapper>
                  <M.AlertBorderLine />
                </M.Alert>
              )}
            </Fragment>
          ) : null;
        })}
    </S.MainList>
  );
};

export default KeywordList;
