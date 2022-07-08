import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getKeywordRecommendation, getRecommendationKeyword } from 'store/modifyKeyword';
import { inquiry } from 'store/keyword';
import { useCallback } from 'react';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 74px);
  position: absolute;
  top: -85px;
  z-index: 200;
  background-color: ${(props) => props.theme.colors.white};
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const ChevronLeft = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  margin-right: 12px;
`;

const KeywordSearch = styled.input`
  width: calc(100% - 100px);
  height: 40px;
  border: none;
  padding-left: 16px;
  background-color: #eee;
`;

const SearchButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: #222;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentSearch = styled.span`
  font-size: 14px;
  color: ${(props) => (props.isClicked ? '#999' : '#222')};
  position: absolute;
  top: 85.6px;
  left: 16px;
`;

const RecommendKeyword = styled.span`
  font-size: 14px;
  color: ${(props) => (!props.isClicked ? '#999' : '#222')};
  position: absolute;
  top: 85.6px;
  left: 103px;
`;

const UnderBar = styled.div`
  width: calc(100% - 32px);
  height: 1px;
  margin: 0 16px;
  background-color: #eee;
  position: absolute;
  top: 109.6px;
`;

const UnderBarBalck = styled.div`
  width: 38px;
  height: 3px;
  background-color: #222;
  position: absolute;
  top: 109.6px;
  left: ${(props) => (props.isRecommendKeyword ? '116px' : '24px')};
`;

const List = styled.ul`
  width: calc(100% - 28px);
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-top: 58px;
  margin-left: 16px;
`;

const Item = styled.li`
  margin-bottom: 14px;
`;

const KeywordList = styled(List)`
  top: 0px;
`;

const KeywordItem = styled(Item)`
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
`;

const HashImage = styled.img`
  margin-left: 16px;
  margin-right: 5px;
`;

const InputKeyword = ({
  setKeyword,
  keyword,
  setAlreadyRegisterItem,
  searchedKeywords,
  setSearchedKeywords,
  selectRecommendKeyword,
  setSelectedRecommendItem,
  setSelectRecommendKeyword,
  setIsMobileKeyword,
  onClickRecommendItem,
}) => {
  const [isRecommendKeyword, setIsRecommendKeyword] = useState(false);
  const [isRegisterKeyword, setIsRegisterKeyword] = useState(false);
  const dispatch = useDispatch();
  const { recommendationKeywordList } = useSelector((state) => state.modifyKeyword);
  const { keywordRecommendationList } = useSelector((state) => state.modifyKeyword);
  const { keywords: registeredKeyword } = useSelector((state) => state.keyword);
  const onClickChevronLeft = () => {
    setIsMobileKeyword(false);
  };

  const onChangeKeywordInput = (e) => {
    const { value } = e.target;
    setKeyword(value);
    setAlreadyRegisterItem(false);
  };

  const onClickRecommendKeyword = () => {
    setIsRecommendKeyword(true);
  };

  const onClickRecentSearch = () => {
    setIsRecommendKeyword(false);
  };

  const onClickHashButton = useCallback(() => {
    setIsMobileKeyword(false);
    setIsRegisterKeyword(false);

    registeredKeyword.forEach((item) => {
      if (item.name === keyword) {
        setIsRegisterKeyword(true);
      }
    });

    setKeyword(keyword);
    setSelectRecommendKeyword(keyword);
  }, [keyword, registeredKeyword]);

  const onClickKeyword = (name) => {
    setKeyword(name);
  };

  useEffect(() => {
    if (keyword !== '' && keyword !== ' ') {
      dispatch(getKeywordRecommendation(keyword));
    }
  }, [keyword]);

  useEffect(() => {
    dispatch(inquiry());
    dispatch(getRecommendationKeyword());
  }, []);

  useEffect(() => {
    localStorage.setItem('searchedKeywords', JSON.stringify(searchedKeywords));
  }, [searchedKeywords]);

  return (
    <Container>
      <Header>
        <ChevronLeft onClick={onClickChevronLeft} src="/asset/Chevron-left.svg" />
        <KeywordSearch onChange={onChangeKeywordInput} value={keyword || ''} placeholder="키워드 입력"></KeywordSearch>
        <SearchButton onClick={onClickHashButton}>
          <img src="/asset/HashtagWhite.svg" />
        </SearchButton>
      </Header>

      {keywordRecommendationList.length < 2 ? (
        <>
          <RecentSearch onClick={onClickRecentSearch} isClicked={isRecommendKeyword}>
            최근 검색
          </RecentSearch>
          <RecommendKeyword onClick={onClickRecommendKeyword} isClicked={isRecommendKeyword}>
            추천 키워드
          </RecommendKeyword>
          <UnderBar></UnderBar>
          <UnderBarBalck isRecommendKeyword={isRecommendKeyword}></UnderBarBalck>
          {!isRecommendKeyword ? (
            <List>
              {searchedKeywords.map((item, index) => {
                return <Item key={index}>{item}</Item>;
              })}
            </List>
          ) : (
            <List>
              {recommendationKeywordList.map((item, index) => {
                return <Item key={index}>{item}</Item>;
              })}
            </List>
          )}
        </>
      ) : (
        <>
          <KeywordList>
            {keyword &&
              keywordRecommendationList.map((item, index) => {
                return (
                  <KeywordItem onClick={() => onClickRecommendItem(item)} key={index}>
                    <HashImage src="/asset/HashtagBlack.svg" alt="hashtag" />
                    <span>{item}</span>
                  </KeywordItem>
                );
              })}
          </KeywordList>
        </>
      )}
    </Container>
  );
};

export default InputKeyword;
