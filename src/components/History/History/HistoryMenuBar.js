import React,{useState,useEffect} from "react";
import * as S from './History.Style';
import HistoryCheckBox from './HisoryCheckBox';
import { moveToScrap, undoHistoryList, deleteHistoryList, clearHistoryList } from "store/history";
import { deleteScrapItem } from 'store/scrap';
import { useDispatch } from "react-redux";
import { MobileMoveScrapModal, MobileDeleteModal } from "./MobilePopUpModal";
import MobileMenuModal from './MobileMenuModal';
const HistoryMenuBar = ({selectAllMail,checkedList,setCheckedList,showList,setList,setOpen,isMobile,setCommand,command,isMobileMenuOpen,setMobileMenu,setPageNum, alertList}) => {
    const dispatch = useDispatch()
    const [undoList, setUndoList] = useState([]);
    const [isMobileDeleteOpen, setMobileDeleteModal] = useState(false);
    const [isMobileScrapOpen, setMobileScrapModal] = useState(false);
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
            checkedList.forEach((mail) => {
              dispatch(moveToScrap({ crawling_id: mail.crawlingId }));
            });
            setUndoList(checkedList);
            setCheckedList([]);
          } catch (e) {
            console.log(e);
          } finally {
            if (isMobile) {
              setMobileScrapModal(true);
            } else {
              setOpen(true);
            }
          }
        } else {
          alert('이동할 메일을 선택해 주세요');
        }
      };
    const undoMoveScrap = () => {
        dispatch(deleteScrapItem(undoList.map((mail) => mail.crawlingId)));
        setUndoList([]);
    };
    const deleteMail = () => {
        if (checkedList.length > 0) {
          try {
            var deleteMailQuery = '';
            checkedList.forEach((mail) => {
              deleteMailQuery += `notice-id=${mail.id}&`;
            });
            dispatch(deleteHistoryList(deleteMailQuery));
            setUndoList(checkedList.map((mail) => {return {mail: mail, index: alertList.indexOf(mail)}}));
            setCheckedList([]);
            setList(alertList.filter((mail) => checkedList.map((element) => element.id).indexOf(mail.id) === -1))
          } catch (e) {
            console.log(e);
          } finally {
            if (isMobile) {
              setMobileDeleteModal(true);
            }
          }
        } else {
          alert('삭제할 메일을 선택해 주세요');
        }
      };
      const undoDelete = () => {
        var undoMailQuery = '';
        try {
          undoList.forEach((element) => {
            undoMailQuery += `notice-id=${element.mail.id}&`;
          });
          dispatch(undoHistoryList(undoMailQuery));
        } catch (e) {
          console.log(e);
        } finally {
          setUndoList([]);
          var redoList = alertList
          undoList.forEach((mail) => {
            redoList.splice(mail.index, 0, mail.mail)
          })
          setList(redoList);
          setMobileDeleteModal(false);
        }
      };
      const openMobileMenu = () => {
        setMobileMenu(!isMobileMenuOpen);
      };
      useEffect(() => {
        if (isMobileDeleteOpen) {
          setTimeout(() => {
            setMobileDeleteModal(false);
            setUndoList([]);
          }, 4000);
        } else if (isMobileScrapOpen) {
          setTimeout(() => {
            setMobileScrapModal(false);
            setUndoList([]);
          }, 4000);
        }
      }, [isMobileDeleteOpen, isMobileScrapOpen]);
    return(
        <S.MenuList>
            <S.CheckBox>
                <HistoryCheckBox
                    onClick={(e) => selectAllMail(e)}
                    checked={checkedList.length <= 0 || checkedList.length !== showList.length ? false : true}
                    readOnly
                    />
                <S.SelectAll>
                    전체선택
                </S.SelectAll>
            </S.CheckBox>
        
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
                    {isMobile && isMobileScrapOpen && (
                    <MobileMoveScrapModal numberAlert={undoList.length} undo={undoMoveScrap} />
                    )}
                </div>
                </S.Menues>
                <S.Menues onClick={() => deleteMail()}>
                <S.MenuLogo src="/asset/Delete.svg" />
                <S.MenuName>삭제</S.MenuName>
                <div onClick={(e) => e.stopPropagation()}>
                    {isMobile && isMobileDeleteOpen && <MobileDeleteModal undo={undoDelete} />}
                </div>
                </S.Menues>
                {isMobile && (
                    <>
                        <S.MobileMenu src="/asset/MobileMenuDots.svg" onClick={openMobileMenu} />
                        <MobileMenuModal
                            isOpen={isMobileMenuOpen}
                            showRead={showRead}
                            showNotRead={showNotRead}
                            command={command}
                        />
                    </>
                )}
            </S.MenuWrapper>
        </S.MenuList>
    )
}

export default HistoryMenuBar