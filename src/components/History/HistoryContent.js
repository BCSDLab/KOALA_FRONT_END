import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HistoryCheckBox from './HisoryCheckBox';
import * as S from './History.Style';
import { getHistoryList, deleteHistoryList, readHistoryItem, moveToScrap, clearHistoryList, undoHistoryList } from 'store/history';
import { deleteScrapItem } from 'store/scrap';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from './HistoryPopup';
import { MENU_ITEM } from 'constant';
import { useMediaQuery } from 'react-responsive';
import theme from '../../theme';
import MobileMenuModal from './MobileMenuModal';
import {MobileDeleteModal, MobileMoveScrapModal} from './MobilePopUpModal';
const formatingDate = (date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  return `${month + '/' + day} - ${(hour === 0 ? '00' : hour) + ':' + minute}`;
};
const HistoryContent = () => {
  const { historyList, deleteHistoryResponse, readHistoryItemResponse, moveToScrapResponse, undoHistoryListResponse } = useSelector(
    (state) => state.history
  );
  const userInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [alertList, setList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [command, setCommand] = useState(null);
  const [checkedList, setCheckedList] = useState([]);
  const [pageNum, setPageNum] = useState([1]);
  const [isLoading, setLoading] = useState(false);
  const [isPopOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [isMobileDeleteOpen, setMobileDeleteModal] = useState(false);
  const [isMobileScrapOpen, setMobileScrapModal] = useState(false);
  const [undoList, setUndoList] = useState([]);
  const [refAlert, inView] = useInView({
    threshold: 0.0,
    triggerOnce: false,
  });
  const isMobile = useMediaQuery({ query: `(max-width:${theme.deviceSizes.mobileL}` });
  const showRead = () => {
    if (command === 'read') {
      setCommand(null);
    } else {
      setCommand('read');
    }
  };
  const showNotRead = () => {
    if (command === 'notRead') {
      setCommand(null);
    } else {
      setCommand('notRead');
    }
  };
  const moveToStorage = () => {
    if (checkedList.length > 0) {
      try {
        checkedList.forEach((id) => {
          dispatch(moveToScrap({ crawling_id: id }));
        });
        setUndoList(checkedList);
        setCheckedList([]);
      } catch (e) {
        console.log(e);
      }finally{
        if(isMobile){
          setMobileScrapModal(true);
        }else{
          setOpen(true);
        }
      }
    } else {
      alert('이동할 메일을 선택해 주세요');
    }
  };
  const deleteMail = () => {
    if (checkedList.length > 0) {
      try{
        var deleteMailQuery = '';
        checkedList.forEach((id) => {
          deleteMailQuery += `notice-id=${id}&`;
        });
        dispatch(deleteHistoryList(deleteMailQuery));
        setUndoList([checkedList]);
        setCheckedList([]);
      }catch(e){
        console.log(e)
      }finally{
        if(isMobile){
          setMobileDeleteModal(true);
        }
      }
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
  const openMobileMenu = () => {
    setMobileMenu(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const undoDelete = () => {
    var undoMailQuery = '';
    try{
      undoList.forEach((id) => {
        undoMailQuery += `notice-id=${id}&`;
      });
      dispatch(undoHistoryList(undoMailQuery));

    }catch(e){
      console.log(e)
    }finally{
      setUndoList([]);
      setList([]);
      setMobileDeleteModal(false);
    }
  }
  const undoMoveScrap = () => {
    dispatch(deleteScrapItem(undoList));
    setUndoList([]);
  }
  useEffect(() => {
    if (userInfo.isLoggedIn || deleteHistoryResponse || readHistoryItemResponse || moveToScrapResponse) {
      dispatch(getHistoryList(pageNum[0]));
    }
  }, [userInfo.isLoggedIn, pageNum]);

  useEffect(() => {
    if (!historyList || historyList.length <= 0) {
      return;
    } else {
      setList(historyList);
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
    if(historyList.length === 0){
      setPageNum([1])
    }
    if (inView) {
      setPageNum([pageNum[0] + 1]);
    }
  }, [inView, readHistoryItemResponse, deleteHistoryResponse, undoHistoryListResponse, historyList]);

  useEffect(() => {
    if(isMobileDeleteOpen){
      setTimeout(() => {
        setMobileDeleteModal(false);
        setUndoList([]);
      }, 4000);
    }else if(isMobileScrapOpen){
      setTimeout(() => {
        setMobileScrapModal(false);
        setUndoList([]);
      }, 4000);
    }
  },[isMobileDeleteOpen, isMobileScrapOpen]);
  return (
    <>
      <S.PageWrapper onClick={isMobile ? closeMobileMenu : null}>
        {!isMobile && <PopUp isOpen={isPopOpen} closePopUp={closePopUp} />}
        <S.Content isOpen={isPopOpen}>
          <S.MenuList>
            <S.SelectAll>
              <HistoryCheckBox
                onClick={(e) => selectAllMail(e)}
                checked={checkedList.length <= 0 || checkedList.length !== showList.length ? false : true}
                readOnly
              />
              전체선택
            </S.SelectAll>
            <S.MenuWrapper onClick={(e) => e.stopPropagation()}>
              {!isMobile && (
                <>
                  <S.Menues onClick={() => showRead()} isClicked={command === 'read' ? true : false}>
                    <S.MenuName>읽은 알림</S.MenuName>
                  </S.Menues>
                  <S.Menues onClick={() => showNotRead()} isClicked={command === 'notRead' ? true : false}>
                    <S.MenuName>읽지 않은 알림</S.MenuName>
                  </S.Menues>
                </>
              )}

              <S.Menues onClick={() => moveToStorage()}>
                <S.MenuLogo src="/asset/Storage.svg" />
                <S.MenuName>{!isMobile ? '보관함으로이동' : '보관'}</S.MenuName>
                <div onClick={(e) => e.stopPropagation()}>
                {(isMobile && isMobileScrapOpen)&&<MobileMoveScrapModal numberAlert={undoList.length} undo={undoMoveScrap}/>}
                </div>
               
              </S.Menues>
              <S.Menues onClick={() => deleteMail()}>
                <S.MenuLogo src="/asset/Delete.svg" />
                <S.MenuName>삭제</S.MenuName>
                <div onClick={(e) => e.stopPropagation()}>
                {(isMobile && isMobileDeleteOpen)&&<MobileDeleteModal undo={undoDelete} />}
                </div>
              </S.Menues>
              {isMobile && (
                <>
                  <S.MobileMenu src="/asset/MobileMenuDots.svg" onClick={openMobileMenu} />
                  <MobileMenuModal isOpen={isMobileMenuOpen} showRead={showRead} showNotRead={showNotRead} command={command} />
                </>
              )}
            </S.MenuWrapper>
          </S.MenuList>
          <S.KeyWordAlertList>
            {showList?.map((mail, id) =>
              showList[showList.length - 1].id === mail.id ? (
                <S.KeyWordAlert isRead={mail.isRead} key={id} ref={refAlert}>
                  <HistoryCheckBox
                    onClick={(e) => selectMail(e, mail.id)}
                    checked={checkedList.includes(mail.id) ? true : false}
                    readOnly
                  />
                  <S.AlertContent>
                    <S.AlertDetail>
                      <S.Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</S.Sender>
                      {isMobile && <S.ReceiveDate>{formatingDate(mail.createdAt)}</S.ReceiveDate>}
                    </S.AlertDetail>
                    <S.AlertTitle href={mail.url} isRead={mail.isRead} onClick={(e) => clickMail(mail.id)}>
                      {mail.title}
                    </S.AlertTitle>
                  </S.AlertContent>
                  {!isMobile && (
                    <>
                      <S.MailBrowse>{mail.isRead ? '읽음' : '읽지않음'}</S.MailBrowse>
                      <S.ReceiveDate>{formatingDate(mail.createdAt)}</S.ReceiveDate>
                    </>
                  )}
                </S.KeyWordAlert>
              ) : (
                <>
                  <S.KeyWordAlert isRead={mail.isRead} key={id}>
                    <HistoryCheckBox
                      onClick={(e) => selectMail(e, mail.id)}
                      checked={checkedList.includes(mail.id) ? true : false}
                      readOnly
                    />
                    <S.AlertContent>
                      <S.AlertDetail>
                        <S.Sender>{MENU_ITEM[MENU_ITEM.findIndex((site) => site.id === mail.site)].title}</S.Sender>
                        {isMobile && <S.ReceiveDate>{formatingDate(mail.createdAt)}</S.ReceiveDate>}
                      </S.AlertDetail>
                      <S.AlertTitle href={mail.url} isRead={mail.isRead} onClick={(e) => clickMail(mail.id)}>
                        {mail.title}
                      </S.AlertTitle>
                    </S.AlertContent>
                    {!isMobile && (
                      <>
                        <S.MailBrowse>{mail.isRead ? '읽음' : '읽지않음'}</S.MailBrowse>
                        <S.ReceiveDate>{formatingDate(mail.createdAt)}</S.ReceiveDate>
                      </>
                    )}
                  </S.KeyWordAlert>
                  {isMobile && <S.AlertBorderBox />}
                </>
              )
            )}
          </S.KeyWordAlertList>
        </S.Content>
      </S.PageWrapper>
    </>
  );
};

export default HistoryContent;
