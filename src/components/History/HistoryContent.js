import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HistoryCheckBox from './HisoryCheckBox';
import * as S from './History.Style';
import { getHistoryList, deleteHistoryList, readHistoryItem, moveToScrap } from 'store/history';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from './HistoryPopup';
import { MENU_ITEM } from 'constant';
const siteList = ['아우누리'];
const stringToDate = (date) => {
  var yyyyMMdd = String(date);
  var sYear = yyyyMMdd.substring(0, 4);
  var sMonth = yyyyMMdd.substring(5, 7);
  var sDate = yyyyMMdd.substring(8, 10);
  return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};
const HistoryContent = () => {
  const { historyList, deleteHistoryResponse, readHistoryItemResponse, moveToScrapResponse } = useSelector(
    (state) => state.history
  );
  const userInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [alertList, setList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [command, setCommand] = useState(null);
  const [checkedList, setCheckedList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isPopOpen, setOpen] = useState(false);
  const [test, setTest] = useState(1);
  const [refAlert, inView] = useInView({
    threshold: 0.0,
    triggerOnce: false,
  });

  const showRead = () => {
    if (command === 'read') {
      setCommand(null);
      setShowList(alertList);
    } else {
      setCommand('read');
    }
  };
  const showNotRead = () => {
    if (command === 'notRead') {
      setCommand(null);
      setShowList(alertList);
    } else {
      setCommand('notRead');
    }
  };
  const moveToStorage = () => {
    console.log('보관함으로 이동');
    if (checkedList.length > 0) {
      try {
        checkedList.forEach((id) => {
          dispatch(moveToScrap({ crawling_id: id }));
        });
        setCheckedList([]);
        setPageNum(1);
        setList([]);
        setOpen(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('이동할 메일을 선택해 주세요');
    }
  };
  const deleteMail = () => {
    if (checkedList.length > 0) {
      var deleteMailQuery = '';
      checkedList.forEach((id) => {
        deleteMailQuery += `notice-id=${id}&`;
      });
      dispatch(deleteHistoryList(deleteMailQuery));
      setCheckedList([]);
      setPageNum(1);
      setList([]);
    } else {
      alert('삭제할 메일을 선택해 주세요');
    }
  };
  const selectAllMail = (e) => {
    if (e.target.checked) {
      setCheckedList(
        alertList.map((mail) => {
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
  const clickMail = (id) => {
    dispatch(readHistoryItem(id));
  };
  const closePopUp = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (userInfo.isLoggedIn || deleteHistoryResponse || readHistoryItemResponse || moveToScrapResponse) {
      setLoading(true);
      if (pageNum === 1) {
        setList([]);
      }
      dispatch(getHistoryList(pageNum));
    }
    setLoading(false);
  }, [userInfo.isLoggedIn, deleteHistoryResponse, readHistoryItemResponse, moveToScrapResponse, pageNum]);

  useLayoutEffect(() => {
    if (!historyList || historyList.length <= 0) {
      return;
    } else {
      let sortedHistoryList = historyList?.sort((a, b) => {
        a = stringToDate(a.created_at);
        b = stringToDate(b.created_at);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      setList(alertList.concat(sortedHistoryList));
    }
  }, [historyList]);

  useEffect(() => {
    switch (command) {
      case 'read':
        setShowList(alertList.filter((mail) => mail.isRead));
        break;
      case 'notRead':
        setShowList(alertList.filter((mail) => !mail.isRead));
        break;
      case null:
        setShowList(alertList);
        break;
    }
  }, [alertList, command]);

  useEffect(() => {
    if (inView && !isLoading) {
      setPageNum(pageNum + 1);
      setTest(test + 1);
      console.log(test);
    }
  }, [inView, showList]);
  return (
    <>
      <S.PageWrapper>
        <PopUp isOpen={isPopOpen} closePopUp={closePopUp} />
        <S.Content isOpen={isPopOpen}>
          <S.MenuList>
            <HistoryCheckBox
              onClick={(e) => selectAllMail(e)}
              checked={checkedList.length <= 0 || checkedList.length !== showList.length ? false : true}
              readOnly
            />
            <S.SelectAll>전체선택</S.SelectAll>
            <S.Menues onClick={() => showRead()} isClicked={command === 'read' ? true : false}>
              <S.MenuName>읽은 알림</S.MenuName>
            </S.Menues>
            <S.Menues onClick={() => showNotRead()} isClicked={command === 'notRead' ? true : false}>
              <S.MenuName>읽지 않은 알림</S.MenuName>
            </S.Menues>
            <S.Menues onClick={() => moveToStorage()}>
              <S.MenuLogo src="/asset/Storage.svg" />
              <S.MenuName>보관함으로 이동</S.MenuName>
            </S.Menues>
            <S.Menues onClick={() => deleteMail()}>
              <S.MenuLogo src="/asset/Delete.svg" />
              <S.MenuName>삭제</S.MenuName>
            </S.Menues>
          </S.MenuList>
          <S.KeyWordAlertList>
            {console.log(inView)}
            {showList?.map((mail, id) =>
              showList[showList.length - 1].id === mail.id ? (
                <S.KeyWordAlert isRead={mail.isRead} key={id} ref={refAlert}>
                  <HistoryCheckBox
                    onClick={(e) => selectMail(e, mail.id)}
                    checked={checkedList.includes(mail.id) ? true : false}
                    readOnly
                  />
                  <S.Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</S.Sender>
                  <S.AlertTitle href={mail.url} isRead={mail.isRead} onClick={() => clickMail(mail.id)}>
                    {mail.title}
                  </S.AlertTitle>
                  <S.MailBrowse>{mail.isRead ? '읽음' : '읽지않음'}</S.MailBrowse>
                  <S.ReceiveDate>{mail.createdAt}</S.ReceiveDate>
                </S.KeyWordAlert>
              ) : (
                <S.KeyWordAlert isRead={mail.isRead} key={id}>
                  <HistoryCheckBox
                    onClick={(e) => selectMail(e, mail.id)}
                    checked={checkedList.includes(mail.id) ? true : false}
                    readOnly
                  />
                  <S.Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</S.Sender>
                  <S.AlertTitle href={mail.url} isRead={mail.isRead} onClick={() => clickMail(mail.id)}>
                    {mail.title}
                  </S.AlertTitle>
                  <S.MailBrowse>{mail.isRead ? '읽음' : '읽지않음'}</S.MailBrowse>
                  <S.ReceiveDate>{mail.createdAt}</S.ReceiveDate>
                </S.KeyWordAlert>
              )
            )}
          </S.KeyWordAlertList>
        </S.Content>
      </S.PageWrapper>
    </>
  );
};

export default HistoryContent;
