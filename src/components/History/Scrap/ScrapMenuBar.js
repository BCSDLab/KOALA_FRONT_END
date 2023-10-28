import React from 'react'
import { deleteScrapItem } from 'store/scrap';
import { useDispatch } from 'react-redux';
import * as S from './Scrap.Style';
import HistoryCheckBox from '../History/HisoryCheckBox';
const ScrapMenuBar = ({selectAll, isChecked, checkedList, setCheckedList, isToggleOpen}) => {
    const dispatch = useDispatch();
    const deleteAlert = () => {
        if (checkedList.length > 0) {
          dispatch(deleteScrapItem(checkedList));
          setCheckedList([]);
        } else {
          alert('삭제할 메일을 선택해 주세요');
        }
      };
    return (
        <S.MenuList isToggleOpen={isToggleOpen}>
        <S.CheckBox>
          <HistoryCheckBox
            onClick={(e) => selectAll(e)}
            checked={isChecked}
            readOnly
          />
           <S.SelectAll>전체선택</S.SelectAll>
        </S.CheckBox>
        <S.Menu onClick={deleteAlert}>
          <S.MenuLogo src="/asset/Delete.svg" />
          <S.MenuName>삭제</S.MenuName>
        </S.Menu>
      </S.MenuList>
    )
}

export default ScrapMenuBar;