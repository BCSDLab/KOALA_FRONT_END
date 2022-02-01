import React from 'react';
import * as S from './styles';
import { MENU_ITEM } from 'constant';

const KeywordMenuBar = ({ isToggle, menu, onClickMenu }) => {
  return (
    <>
      <S.Menu toggle={isToggle}>
        {MENU_ITEM.map((item) => {
          return (
            <S.Item onClick={onClickMenu} key={item.id}>
              {item.title}
            </S.Item>
          );
        })}
      </S.Menu>
      <S.ItemUnderBar menu={menu} toggle={isToggle}></S.ItemUnderBar>
    </>
  );
};

export default KeywordMenuBar;
