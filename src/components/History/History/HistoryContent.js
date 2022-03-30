import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './History.Style';
import {
  getHistoryList,
  clearHistoryList,
} from 'store/history';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from './HistoryPopup';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';
import HistoryAlert from './HistoryAlert';
import HistoryMenuBar from './HistoryMenuBar';
const HistoryContent = ({isToggleOpen}) => {
  const { historyList, deleteHistoryResponse, readHistoryItemResponse, moveToScrapResponse, undoHistoryListResponse } =
    useSelector((state) => state.history);
  const userInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [alertList, setList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [command, setCommand] = useState(null);
  const [checkedList, setCheckedList] = useState([]);
  const [pageNum, setPageNum] = useState([1]);
  const [isPopOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [refAlert, inView] = useInView({
    threshold: 0.0,
    triggerOnce: false,
  });
  const isMobile = useMediaQuery({ query: `(max-width:${theme.deviceSizes.tabletL}` });
  const selectAllMail = (e) => {
    if (e.target.checked) {
      setCheckedList(alertList);
    } else {
      setCheckedList([]);
    }
  };
  const selectMail = (e, mail) => {
    if (e.target.checked) {
      setCheckedList([...checkedList, mail]);
    } else {
      setCheckedList(checkedList.filter((element) => mail.id !== element.id));
    }
  };
  const closePopUp = () => {
    setOpen(false);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  useEffect(() => {
    if(userInfo.isLoggedIn){
      dispatch(clearHistoryList())
      dispatch(getHistoryList(1));
    }
  },[])
  useEffect(() => {
    if (userInfo.isLoggedIn || deleteHistoryResponse || readHistoryItemResponse || moveToScrapResponse) {
      dispatch(getHistoryList(pageNum[0]));
    }
  }, [userInfo.isLoggedIn, pageNum]);
  useEffect(() => {
    if (!historyList || historyList.length <= 0) {
      return;
    } else {
      if(historyList[historyList.length-1]!==null){
        setList(historyList);
      }else{
        setList((historyList.slice(0, historyList.length-1)));
      }
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
    if (inView) {
      if(historyList[historyList.length-1]!==null){
        setPageNum([pageNum[0] + 1]);
      }
    }
  }, [inView, readHistoryItemResponse, deleteHistoryResponse, undoHistoryListResponse, historyList]);

  return (
    <>
      <S.PageWrapper onClick={isMobile ? closeMobileMenu : null}>
      {!isMobile && <PopUp isOpen={isPopOpen} closePopUp={closePopUp} />}
        <S.Content isOpen={isPopOpen}>
          <HistoryMenuBar
            selectAllMail={selectAllMail}
            checkedList={checkedList}
            showList={showList}
            setCheckedList={setCheckedList}
            setList={setList}
            setOpen={setOpen}
            isMobile={isMobile}
            command={command}
            setCommand={setCommand}
            isMobileMenuOpen={isMobileMenuOpen}
            setMobileMenu={setMobileMenu}
            setPageNum={setPageNum}
          />
          <S.KeyWordAlertList>
            {showList?.map((mail) =>
              showList[showList.length - 1].id === mail.id ? (
                <div ref={refAlert} key={mail.id}>
                  <HistoryAlert
                    isToggleOpen={isToggleOpen}
                    selectMail={selectMail}
                    checkedList={checkedList}
                    isMobile={isMobile}
                    mail={mail}
                  />
                </div>

              ) : (
                <div key={mail.id}>
                 <HistoryAlert
                  isToggleOpen={isToggleOpen}
                  selectMail={selectMail}
                  checkedList={checkedList}
                  isMobile={isMobile}
                  mail={mail}
                />
                  {isMobile && <S.AlertBorderBox />}
                </div>
              )
            )}
          </S.KeyWordAlertList>
        </S.Content>
      </S.PageWrapper>
    </>
  );
};

export default HistoryContent;
