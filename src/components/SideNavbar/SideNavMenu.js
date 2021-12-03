import React from 'react';
import * as S from 'components/SideNavbar/styles';
import KeywordDropdown from './KeywordDropdown';

const Extension = () => {
  return (
    <S.SideMenuBackground>
      <S.SideMenuContainer>
        <S.Logo src="/asset/KoalaLogo.svg" alt="Logo" />
      </S.SideMenuContainer>

      <KeywordDropdown />

      <S.AddKeyword>
        <S.AddImg src="/asset/Plus.svg" alt="plus" />
        <S.AddText>키워드 추가하기</S.AddText>
      </S.AddKeyword>

      <S.HistoryList>
        <S.HistoryLink>
          <S.HistoryText>히스토리</S.HistoryText>
        </S.HistoryLink>
      </S.HistoryList>
      <S.ChatList>
        <S.ChatLink>
          <S.ChatText>채팅방</S.ChatText>
        </S.ChatLink>
      </S.ChatList>

      <S.SetList>
        <S.Set>
          <S.SetText>설정</S.SetText>
        </S.Set>
        <S.Contact>
          <S.ContactText>문의하기</S.ContactText>
        </S.Contact>
      </S.SetList>
    </S.SideMenuBackground>
  );
};

export default Extension;
