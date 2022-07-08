import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getKeywordRecommendation, getSiteRecommendation } from 'store/modifyKeyword';
import { inquiry } from 'store/keyword';
import { useCallback } from 'react';

const Container = styled.div`
  width: 360px;
  height: 640px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 48px;
`;

const ChevronLeft = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 8px;
  margin-right: 12px;
`;

const KeywordSearch = styled.input`
  width: 240px;
  height: 40px;
  border: none;
  padding-left: 16px;
  background-color: #eee;
`;

const SearchButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentSearch = styled.span`
  font-size: 14px;
  color: #222;
  position: absolute;
  top: 112px;
  left: 16px;
`;

const RecommendKeyword = styled.span`
  font-size: 14px;
  color: #222;
  position: absolute;
  top: 112px;
  left: 103px;
`;

const UnderBar = styled.div`
  width: 328px;
  height: 1px;
  background-color: #eee;
  position: absolute;
  top: 140px;
  left: 16px;
`;

const UnderBarBalck = styled.div`
  width: 38px;
  height: 3px;
  background-color: #222;
  position: absolute;
  top: 139px;
  left: ${(props) => (props.isRecommendKeyword ? '116px' : '24px')};
`;

const List = styled.ul`
  width: 328px;
  height: 320px;
  overflow: scroll;
  position: absolute;
  top: 154px;
  left: 16px;
`;

const Item = styled.li`
  margin-bottom: 14px;
`;

const KeywordList = styled(List)`
  top: 112px;
`;

const KeywordItem = styled(Item)`
  width: 328px;
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

const keywords = [
  { id: 0, name: '학사경고' },
  { id: 1, name: '학사공지' },
  { id: 2, name: '실습집중구간' },
];

const InputKeyword = ({
  setIsKeywordInput,
  setKeyword,
  keyword,
  isKeywordInput,
  isAlarmInput,
  setIsAlarmInput,
  alarm,
  setAlarm,
  setSelectedAlarmList,
  selectedAlarmList,
  setIsRegisterKeyword,
}) => {
  const [isRecommendKeyword, setIsRecommendKeyword] = useState(false);

  const dispatch = useDispatch();
  const { keywordRecommendationList, siteRecommendationList } = useSelector((state) => state.modifyKeyword);
  const { keywords: registeredKeyword } = useSelector((state) => state.keyword);

  const onClickRecommendKeyword = () => {
    setIsRecommendKeyword(true);
  };

  const onChangeKeywordInput = (e) => {
    const { value } = e.target;
    if (isKeywordInput) {
      setKeyword(value);
    } else {
      setAlarm(value);
    }
  };

  const onClickRecentSearch = () => {
    setIsRecommendKeyword(false);
  };

  const onClickChevronLeft = () => {
    setIsKeywordInput(false);
    setIsAlarmInput(false);
  };

  const onClickHashButton = useCallback(() => {
    setIsKeywordInput(false);
    setIsAlarmInput(false);
    setIsRegisterKeyword(false);
    if (isAlarmInput) {
      if (selectedAlarmList) {
        const list = [...selectedAlarmList, alarm];
        setSelectedAlarmList(list);
      } else {
        const list = [alarm];
        setSelectedAlarmList(list);
      }
    } else if (isKeywordInput) {
      registeredKeyword.forEach((item) => {
        console.log(item.name === keyword);
        if (item.name === keyword) {
          setIsRegisterKeyword(true);
        }
      });
      setKeyword(keyword);
    }
  }, [keyword, isAlarmInput, registeredKeyword, selectedAlarmList, alarm]);

  const onClickKeyword = (name) => {
    setKeyword(name);
  };

  const onClickSite = (name) => {
    setAlarm(name);
  };

  useEffect(() => {
    if (keyword !== '' && keyword !== ' ') {
      dispatch(getKeywordRecommendation(keyword));
    }
  }, [keyword]);

  useEffect(() => {
    if (alarm !== '' && alarm !== ' ') {
      dispatch(getSiteRecommendation(alarm));
    }
  }, [alarm]);

  useEffect(() => {
    dispatch(inquiry());
  }, []);

  return (
    <Container>
      <Header>
        <ChevronLeft onClick={onClickChevronLeft} src="/asset/Chevron-left.svg" />
        <KeywordSearch
          onChange={onChangeKeywordInput}
          value={isKeywordInput ? keyword : alarm}
          placeholder={isKeywordInput ? '키워드 입력' : '알림받을 대상 입력'}
        ></KeywordSearch>
        <SearchButton onClick={onClickHashButton}>
          <img src="/asset/HashtagWhite.svg" />
        </SearchButton>
      </Header>

      {keywordRecommendationList.length < 2 && siteRecommendationList.length === 0 ? (
        <>
          <RecentSearch onClick={onClickRecentSearch}>최근 검색</RecentSearch>
          <RecommendKeyword onClick={onClickRecommendKeyword}>추천 키워드</RecommendKeyword>
          <UnderBar></UnderBar>
          <UnderBarBalck isRecommendKeyword={isRecommendKeyword}></UnderBarBalck>
          <List>
            {keywords.map((item) => {
              return <Item key={item.id}>{item.name}</Item>;
            })}
          </List>
        </>
      ) : (
        <>
          <KeywordList>
            {isKeywordInput &&
              keywordRecommendationList.map((item, index) => {
                return (
                  <KeywordItem onClick={() => onClickKeyword(item)} key={index}>
                    <HashImage src="/asset/HashtagBlack.svg" />
                    <span>{item}</span>
                  </KeywordItem>
                );
              })}
            {isAlarmInput &&
              siteRecommendationList.map((item, index) => {
                return (
                  <KeywordItem onClick={() => onClickSite(item)} key={index}>
                    <HashImage src="/asset/HashtagBlack.svg" />
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
