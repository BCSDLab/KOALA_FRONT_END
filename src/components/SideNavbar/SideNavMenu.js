import React from 'react';
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
        <S.HistoryLink current={location.pathname.includes('/history') ? 1 : 0} to="/history">
          <S.HistoryText current={location.pathname.includes('/history') ? 1 : 0}>히스토리</S.HistoryText>
        </S.HistoryLink>
      </S.HistoryList>
      <S.ChatList>
        <S.ChatLink current={location.pathname.includes('/chat') ? 1 : 0} to="/chat">
          <S.ChatText current={location.pathname.includes('/chat') ? 1 : 0}>채팅방</S.ChatText>
        </S.ChatLink>
      </S.ChatList>
      <S.SetList>
        <S.Set current={location.pathname === '/mypage' ? 1 : 0} to="/mypage">
          <S.SetText current={location.pathname === '/mypage' ? 1 : 0}>설정</S.SetText>
        </S.Set>
        <S.Contact to="#">
          <S.ContactText>문의하기</S.ContactText>
        </S.Contact>
      </S.SetList>
    </S.SideMenuBackground>
  );
};

export default Extension;
