import React from 'react';
import * as S from './styles';
import { MENU_ITEM } from 'constant';
import useMatchMedia from 'hooks/useMatchMedia';
import { useLocation } from 'react-router';
const queries = ['max-width: 400px, min-width:800px'];

const KeywordMenuBar = ({ isToggle, menu, onClickMenu }) => {
  // const [mobile, desktop] = useMatchMedia(queries);
  const mobile = true;
  return (
    !mobile?
    <>
      <S.Menu toggle={isToggle}>
        <S.MobileMenuWrapper>
        {MENU_ITEM.map((item) => {
          return (
            <S.Item onClick={onClickMenu} key={item.id}>
              {item.title}
            </S.Item>
          );
        })}

        </S.MobileMenuWrapper>
        
      </S.Menu>
      <S.ItemUnderBar menu={menu} toggle={isToggle}></S.ItemUnderBar>
    </>
    :
    <>
      <S.Menu toggle={isToggle}>
        <S.MobileMenuWrapper>
        {MENU_ITEM.map((item) => {
          return (
            <S.Item onClick={onClickMenu} key={item.id} isToggle={menu===item.title}>
              {item.title}
            </S.Item>
          );
        })}
        </S.MobileMenuWrapper>     
      </S.Menu>
    </>
  );
};

export default KeywordMenuBar;
