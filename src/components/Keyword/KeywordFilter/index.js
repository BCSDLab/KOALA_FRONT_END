import React, { useEffect, useState, useCallback } from 'react';
import * as S from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { getKeywordList, deleteKeywordList, moveKeywordItem } from 'store/keyword';
import { makeDeleteQuery } from '../utils';
import KeywordList from '../KeywordList';
import KeywordMenuBar from '../KeywordMenuBar';
import KeywordSearch from '../KeywordSearch';
import KeywordHeader from '../KeywordHeader';
import useMatchMedia from 'hooks/useMatchMedia';
import theme from '../../../theme';
import MobileMenuModal from './MobileMenuModal';
import styled from 'styled-components';
import { MobileDeleteModal, MobileMoveScrapModal } from './MobilePopUp';
import { deleteScrapItem } from 'store/scrap';
const queries = [`(max-width: ${theme.deviceSizes.tabletL})`];

const FilterContainer = styled.div`
  margin-top: 63px;
`;

const KeywordFilterBar = () => {
  const userInfo = useSelector((state) => state.auth);
  const { keywordList, deleteKeywordListResponse, readKeywordItemResponse, getKeywordListResponse } = useSelector(
    (state) => state.keyword
  );
  const { isOpen } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const { state: keywordName } = useLocation();
  const [list, setList] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [keywordSearch, setKeywordSearch] = useState('');
  const [searchButton, setSearchButton] = useState(false);
  const [menu, setMenu] = useState('전체');
  const [checkListId, setCheckListId] = useState([]);
  const [readNotification, setReadNotification] = useState(false);
  const [notReadNotification, setNotReadNotification] = useState(false);
  const [goStore, setGoStore] = useState(false);
  const [deleteList, setDeleteList] = useState(false);
  const [mobile] = useMatchMedia(queries);
  const [isMobileMenuOpen, setMenuModal] = useState(false);
  const [isMobilePopupOpen, setPopUp] = useState(null);
  const [undoList, setUndoList] = useState([]);
  const onClickAllSelect = () => {
    setCheckAll((prev) => !prev);
  };

  const onClickReadNotification = () => {
    setReadNotification((prev) => !prev);
    setNotReadNotification(false);
  };

  const onClickNotReadNotification = () => {
    setNotReadNotification((prev) => !prev);
    setReadNotification(false);
  };

  const onClickMenu = useCallback(
    (e) => {
      setMenu(e.target.innerText);
      setCheckAll(false);
      setReadNotification(false);
      setNotReadNotification(false);
      setCheckListId([]);

      if (list.length === 0) {
        return;
      }
    },
    [keywordList, menu, list]
  );

  const onClickGoStore = () => {
    setGoStore(true);
  };

  const onClickDeleteList = () => {
    setDeleteList(true);
  };

  const onClickMobileMenu = () => {
    setMenuModal(true);
  };
  const closeMobileMenu = () => {
    setMenuModal(false);
  };
  const undoDelete = () => {
    alert('undo!');
    setUndoList([]);
    setPopUp(false);
  };
  const undoMoveScrap = () => {
    dispatch(deleteScrapItem(undoList));
    setUndoList([]);
    setPopUp(false);
  };
  useEffect(() => {
    if (list.length === 0) {
      return;
    }

    if (goStore) {
      if (checkAll) {
        alert('모든 목록 보관');
        setCheckAll(false);
        setGoStore(false);

        keywordList.forEach((item) => {
          const id = item.id;
          dispatch(moveKeywordItem(id));
        });
        setUndoList(keywordList);
        setPopUp('SCRAP');
      } else if (checkListId.length !== 0) {
        alert('선택된 목록 보관');
        const filterList = list.filter((item) => {
          const id = item.id;
          if (checkListId.includes(id)) {
            return item;
          }
        });

        filterList.forEach((item) => {
          const id = item.id;
          dispatch(moveKeywordItem(id));
        });
        setUndoList(checkListId);
        setCheckListId([]);
        setPopUp('SCRAP');
        setGoStore(false);
      } else {
        alert('알림을 선택해 주세요');
        setGoStore(false);
      }
    }
  }, [goStore]);

  useEffect(() => {
    if (list.length === 0) {
      return;
    }

    if (deleteList) {
      if (checkAll) {
        alert('모든 목록 삭제');

        const startId = keywordList[0].id;
        const endId = keywordList[keywordList.length - 1].id;
        const query = makeDeleteQuery(startId, endId);

        dispatch(deleteKeywordList(query));
        if (mobile) {
          setPopUp('DELETE');
        }
        setDeleteList(false);
      } else if (checkListId.length !== 0) {
        alert('선택된 목록 삭제');

        if (checkListId.length === 1) {
          const query = `notice-id=${checkListId[0]}`;
          dispatch(deleteKeywordList(query));
        } else {
          const startId = checkListId[0];
          const endId = checkListId[checkListId.length - 1];
          const query = makeDeleteQuery(startId, endId);

          dispatch(deleteKeywordList(query));
        }
        if (mobile) {
          setPopUp('DELETE');
        }
        setDeleteList(false);
      } else {
        alert('알림을 선택해 주세요');
      }
    }

    setCheckAll(false);
    setDeleteList(false);
    setCheckListId([]);
  }, [deleteList]);

  useEffect(() => {
    if (checkAll) {
      const listId = keywordList.map((keyword) => keyword.id);
      setCheckListId(listId);
    } else {
      if (checkListId.length === keywordList.length) {
        setCheckListId([]);
      }
    }
  }, [checkAll]);

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      if (deleteKeywordListResponse || readKeywordItemResponse || getKeywordListResponse || !deleteList || goStore) {
        dispatch(getKeywordList({ keywordName, pageNum: 1 }));
        if (keywordList === '받은 알림이 없습니다.') {
          setList([]);
        } else {
          setList(keywordList);
        }
      }
    }
  }, [
    userInfo,
    deleteKeywordListResponse,
    readKeywordItemResponse,
    getKeywordListResponse,
    keywordName,
    deleteList,
    goStore,
  ]);
  useEffect(() => {
    if (isMobilePopupOpen === 'SCRAP' || isMobilePopupOpen === 'DELETE') {
      setTimeout(() => {
        setPopUp(null);
        setUndoList([]);
      }, 4000);
    }
  }, [isMobilePopupOpen]);
  return (
    <>
      {mobile &&
        (keywordName !== null ? (
          <FilterContainer onClick={closeMobileMenu}>
            <KeywordMenuBar isToggle={isOpen} menu={menu} setList={setList} onClickMenu={onClickMenu} />

            <KeywordSearch
              setList={setList}
              list={list}
              keywordSearch={keywordSearch}
              setKeywordSearch={setKeywordSearch}
              setSearchButton={setSearchButton}
            />
            <S.MobileMenuBar onClick={(e) => e.stopPropagation()}>
              <S.MobileSelectAll>
                <S.CheckBox onClick={onClickAllSelect} checkAll={checkAll} className="checkBox"></S.CheckBox>
                <S.CheckBoxTitle onClick={onClickAllSelect} className="checkTitle">
                  전체 선택
                </S.CheckBoxTitle>
              </S.MobileSelectAll>
              <S.MobileMenuList>
                <S.FilterItem onClick={onClickGoStore} goStore={goStore} className="goStore">
                  <S.FilterItemImage src="/asset/inbox-in.svg" alt="inbox-in" />
                  <span>보관</span>
                </S.FilterItem>
                <S.FilterItem onClick={onClickDeleteList} className="delete">
                  <S.FilterItemImage src="/asset/trash.svg" alt="trash" />
                  <span>삭제</span>
                </S.FilterItem>
                <S.FilterItem onClick={onClickMobileMenu} className="mobileMenu">
                  <S.FilterItemImage src="/asset/MobileMenuDots.svg" alt="menu" />
                </S.FilterItem>
              </S.MobileMenuList>
              <MobileMenuModal
                isOpen={isMobileMenuOpen}
                showRead={onClickReadNotification}
                showNotRead={onClickNotReadNotification}
                isRead={readNotification}
                isNotRead={notReadNotification}
              />
            </S.MobileMenuBar>
            <S.FilterList toggle={isOpen}>
              <KeywordList
                list={list}
                checkListId={checkListId}
                setCheckListId={setCheckListId}
                setKeywordSearch={setKeywordSearch}
                checkAll={checkAll}
                setCheckAll={setCheckAll}
                readNotification={readNotification}
                notReadNotification={notReadNotification}
                keywordSearch={keywordSearch}
                setSearchButton={setSearchButton}
                searchButton={searchButton}
                menu={menu}
              />
            </S.FilterList>
            <MobileDeleteModal isOpen={isMobilePopupOpen} undoList={undoList} undo={undoDelete} />
            <MobileMoveScrapModal
              isOpen={isMobilePopupOpen}
              undoList={undoList}
              numberAlert={undoList.length}
              undo={undoMoveScrap}
            />
          </FilterContainer>
        ) : null)}
      {!mobile && (
        <>
          <KeywordHeader title={'키워드 알림'} toggle={false} />
          <KeywordMenuBar isToggle={isOpen} menu={menu} setList={setList} onClickMenu={onClickMenu} />
          <S.FilterList toggle={isOpen}>
            <S.CheckBox onClick={onClickAllSelect} checkAll={checkAll} className="checkBox"></S.CheckBox>
            <S.CheckBoxTitle onClick={onClickAllSelect} className="checkTitle">
              전체 선택
            </S.CheckBoxTitle>
            <S.FilterReadNotification
              onClick={onClickReadNotification}
              readNotification={readNotification}
              className="read"
            >
              읽은 알림
            </S.FilterReadNotification>
            <S.FilterNotReadNotification
              onClick={onClickNotReadNotification}
              notReadNotification={notReadNotification}
              readNotification={readNotification}
              className="notread"
            >
              읽지 않은 알림
            </S.FilterNotReadNotification>
            <S.FilterItem onClick={onClickGoStore} goStore={goStore} className="goStore">
              <S.FilterItemImage src="/asset/inbox-in.svg" alt="inbox-in" />
              <span>보관함으로 이동</span>
            </S.FilterItem>
            <S.FilterItem onClick={onClickDeleteList} className="delete">
              <S.FilterItemImage src="/asset/trash.svg" alt="trash" />
              <span>삭제</span>
            </S.FilterItem>
            <KeywordSearch
              setList={setList}
              list={list}
              keywordSearch={keywordSearch}
              setKeywordSearch={setKeywordSearch}
              setSearchButton={setSearchButton}
            />
          </S.FilterList>
          <KeywordList
            list={list}
            checkListId={checkListId}
            setCheckListId={setCheckListId}
            setKeywordSearch={setKeywordSearch}
            checkAll={checkAll}
            setCheckAll={setCheckAll}
            readNotification={readNotification}
            notReadNotification={notReadNotification}
            keywordSearch={keywordSearch}
            setSearchButton={setSearchButton}
            searchButton={searchButton}
            menu={menu}
          />
        </>
      )}
    </>
  );
};

export default KeywordFilterBar;
