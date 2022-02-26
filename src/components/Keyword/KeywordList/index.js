import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import * as M from './MobileKeywordItem.style';
import { getTitle } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { readKeywordItem } from 'store/keyword';
import useMatchMedia from 'hooks/useMatchMedia';
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
  menu,
  keywordName
}) => {
  const dispatch = useDispatch();
  const { keywordList } = useSelector((state) => state.keyword);
  const [list, setList] = useState();
  const { isOpen } = useSelector((state) => state.toggle);
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
    if (list && list.length === 0) {
      setList(keywordList);
    }

    if (notReadNotification) {
      const filterList = keywordList.filter((item) => {
        return item.isRead === false;
      });
      setList(filterList);
    } else if (readNotification) {
      const filterList = keywordList.filter((item) => {
        return item.isRead === true;
      });
      setList(filterList);
    } else {
      setList(keywordList);
    }
  }, [readNotification, notReadNotification]);

  useEffect(() => {
    setList(keywordList);
  }, [keywordList]);

  useEffect(() => {
    if (menu === '전체') {
      setList(keywordList);
    } else if (menu === '아우누리') {
      const filterList = keywordList.filter((item) => {
        if (item.site === 'PORTAL') {
          return item;
        }
      });
      setList(filterList);
    } else if (menu === '아우미르') {
      const filterList = keywordList.filter((item) => {
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
  const queries = ['(max-width: 450px)'];
  const [mobile] = useMatchMedia(queries);
  return (
    <S.MainList toggle={isOpen}>
      {list && list.length === 0 ? <M.NoResultBox>검색결과가 없습니다.</M.NoResultBox> : null}
      {list &&
        list.map((item) => {
          return !mobile ? (
            <S.MainItem key={item.id}>
              <S.MainCheckBox
                onClick={() => onClickCheckSome(item.id)}
                checkSome={checkListId.includes(item.id)}
              ></S.MainCheckBox>
              <S.MainCheckBoxTitle readState={item.isRead}>{getTitle(item.site)}</S.MainCheckBoxTitle>
              <a href={`${item.url}`} target="_blank">
                <S.MainContent readState={item.isRead} onClick={() => onClickReadItem(item.id, item.isRead)}>
                  {item.title}
                </S.MainContent>
              </a>
              <S.MainReadState>{item.isRead ? '읽음' : '읽지 않음'}</S.MainReadState>
              <S.MainPeriod readState={item.isRead}>{item.createdAt}</S.MainPeriod>
            </S.MainItem>
          ) : (
            keywordName!==null?
            <M.Alert key={item.id}>
              <M.AlertWrapper>
                <S.MainCheckBox onClick={() => onClickCheckSome(item.id)} checkSome={checkListId.includes(item.id)} />
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
            :null
          );
        })}
    </S.MainList>
  );
};

export default KeywordList;
