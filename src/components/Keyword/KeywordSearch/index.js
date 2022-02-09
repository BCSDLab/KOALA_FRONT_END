import React, { useRef, useCallback } from 'react';
import * as S from './styles';

const KeywordSearch = ({ keywordSearch, setKeywordSearch, setSearchButton }) => {
  const inputSearch = useRef(null);

  const onChangeKeywordSearch = (e) => {
    setKeywordSearch(e.target.value);
  };

  const onClickSearch = useCallback(() => {
    setSearchButton(true);
    inputSearch.current.focus();
  }, []);

  return (
    <>
      <S.SearchInput
        ref={inputSearch}
        placeholder="알림대상/알림내용/키워드 입력"
        value={keywordSearch}
        onChange={onChangeKeywordSearch}
      ></S.SearchInput>
      <S.SearchButton onClick={onClickSearch}>
        <span>검색하기</span>
        <S.SearchImage src="/asset/search.svg" />
      </S.SearchButton>
    </>
  );
};

export default KeywordSearch;
