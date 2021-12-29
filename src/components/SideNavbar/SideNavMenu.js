import React from 'react';
import * as S from 'components/SideNavbar/styles';
import KeywordDropdown from './KeywordDropdown';

const Extension = () => {
  return (
    <S.SideMenuBackground>
      <S.Logo src="/asset/KoalaLogo.svg" alt="Logo" />

      <KeywordDropdown />

      <S.HistoryList>
        <S.HistoryLink>
          <S.HistoryText to="">히스토리</S.HistoryText>
        </S.HistoryLink>
      </S.HistoryList>
      <S.ChatList>
        <S.ChatLink>
          <S.ChatText to="">채팅방</S.ChatText>
        </S.ChatLink>
      </S.ChatList>

      <S.SetList>
        <S.Set>
          <S.SetText to="">설정</S.SetText>
        </S.Set>
        <S.Contact>
          <S.ContactText to="">문의하기</S.ContactText>
        </S.Contact>
      </S.SetList>
    </S.SideMenuBackground>
  );
};

export default Extension;
