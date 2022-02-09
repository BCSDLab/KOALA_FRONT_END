import React, { useState } from 'react';
import * as S from 'components/SideNavbar/styles';
import { useLocation } from 'react-router-dom';
import KeywordDropdown from './KeywordDropdown';

const Extension = () => {
  const location = useLocation();
  return (
    <S.SideMenuBackground>
      <S.Logo src="/asset/KoalaLogo.svg" alt="Logo" />

      <KeywordDropdown />

      <S.HistoryList>
        <S.HistoryLink to="#">
          <S.HistoryText>히스토리</S.HistoryText>
        </S.HistoryLink>
      </S.HistoryList>
      <S.ChatList>
        <S.ChatLink current={location.pathname.includes('/chat')} to="/chat">
          <S.ChatText current={location.pathname.includes('/chat')}>채팅방</S.ChatText>
        </S.ChatLink>
      </S.ChatList>
      <S.SetList>
        <S.Set current={location.pathname === '/mypage'} to="/mypage">
          <S.SetText current={location.pathname === '/mypage'}>설정</S.SetText>
        </S.Set>
        <S.Contact to="#">
          <S.ContactText>문의하기</S.ContactText>
        </S.Contact>
      </S.SetList>
    </S.SideMenuBackground>
  );
};

export default Extension;
