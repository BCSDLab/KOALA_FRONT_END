import React from 'react';
import * as S from 'components/SideNavbar/styles';

const KeywordDropdown = () => {
  const kewords = [
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

  const DropDown = kewords.map((keyword) => (
    <S.KeywordDropmenu>
      <S.KeywordText id={keyword.id}>{keyword.text}</S.KeywordText>
      <S.KeywordUpdate id={keyword.id}>{keyword.update}</S.KeywordUpdate>
    </S.KeywordDropmenu>
  ));

  return (
    <div>
      <S.KeywordList>
        <S.KeywordMain>키워드</S.KeywordMain>
        <S.KeywordDropdown src="/asset/KeywordDropDown.svg" alt="drop" />
      </S.KeywordList>
      <S.KeywordElement>{DropDown}</S.KeywordElement>
    </div>
  );
};

export default KeywordDropdown;
