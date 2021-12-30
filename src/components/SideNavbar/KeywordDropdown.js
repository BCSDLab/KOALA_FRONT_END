import React from 'react';
import * as S from 'components/SideNavbar/styles';

const KeywordDropdown = () => {
  const keywords = [
    {
      id: 1,
      text: '김이정',
      update: 10,
    },
    {
      id: 2,
      text: '이유정',
      update: 10,
    },
    {
      id: 3,
      text: '국가장학금',
      update: 10,
    },
    {
      id: 4,
      text: '근로장학생',
      update: 10,
    },
    {
      id: 5,
      text: '성적',
      update: 10,
    },
  ];

  return (
    <S.KeywordDropdown>
      <S.KeywordMain>키워드</S.KeywordMain>
      <S.KeywordDropdownButton src="/asset/KeywordDropDown.svg" alt="drop" />
      <S.KeywordSetting to="">설정</S.KeywordSetting>
      <S.KeywordList>
        {keywords.map((keyword) => (
          <S.KeywordSection key={keyword.id}>
            <S.KeywordName>{keyword.text}</S.KeywordName>
            <S.KeywordCount>{keyword.update}</S.KeywordCount>
          </S.KeywordSection>
        ))}
      </S.KeywordList>
      <S.AddKeywordSection>
        <S.AddImg src="/asset/Plus.svg" alt="add keyword" />
        <S.AddText to="/">키워드 추가하기</S.AddText>
      </S.AddKeywordSection>
    </S.KeywordDropdown>
  );
};

export default KeywordDropdown;
