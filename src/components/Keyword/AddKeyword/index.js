import React, { useCallback, useEffect, useState } from 'react';
import KeywordHeader from '../KeywordHeader';
import { getSiteRecommendation, getKeywordRecommendation } from 'store/modifyKeyword';
import { inquiry } from 'store/keyword';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import KeywordAlarm from '../KeywordAlarm';

const AddKeyword = () => {
  const [site, setSite] = useState('');
  const [recommendKeyword, setRecommendKeyword] = useState('');
  const [recommendList, setRecommendList] = useState([]);
  const [recommendKeywords, setRecommendKeywords] = useState([]);
  const [selectRecommendItem, setSelectRecommendItem] = useState([]);
  const [selectRecommendKeyword, setSelectRecommendKeyword] = useState('');
  const [isRegisterItem, setIsRegisterItem] = useState(false);
  const [isRegisterKeyword, setIsRegisterKeyword] = useState(false);

  const userInfo = useSelector((state) => state.auth);
  const { siteRecommendationList, keywordRecommendationList } = useSelector((state) => state.modifyKeyword);
  const { keywords } = useSelector((state) => state.keyword);
  const dispatch = useDispatch();

  const onChangeSite = (e) => {
    setSite(e.target.value);
    setIsRegisterItem(false);
  };

  const onClickRecommendItem = useCallback(
    (e) => {
      let { innerText: value } = e.target;

      if (!selectRecommendItem.includes(value)) {
        setSelectRecommendItem([...selectRecommendItem, value]);
        setSite('');
      } else {
        setSite('');
        setIsRegisterItem(true);
      }
    },
    [selectRecommendItem, site]
  );

  const onClickRecommendKeyword = useCallback(
    (keyword) => {
      setIsRegisterKeyword(false);

      if (!keywords.includes(keyword)) {
        setSelectRecommendKeyword(keyword);
        setRecommendKeywords([]);
      } else {
        setIsRegisterKeyword(true);
      }

      keywords.forEach((item) => {
        if (item.name === keyword) {
          setIsRegisterKeyword(true);
        }
      });
    },
    [keywords]
  );

  const onClickDeleteRecommendItem = useCallback(
    (id) => {
      const newList = selectRecommendItem.filter((item) => item !== selectRecommendItem[id]);
      setSelectRecommendItem(newList);
    },
    [selectRecommendItem]
  );

  const onChangeRecommendKeyword = (e) => {
    const { value } = e.target;
    setIsRegisterKeyword(false);
    setRecommendKeyword(value);
    setSelectRecommendKeyword('');
  };

  useEffect(() => {
    if (site !== '') {
      dispatch(getSiteRecommendation(site));
    }
  }, [site]);

  useEffect(() => {
    if (recommendKeyword !== '') {
      dispatch(getKeywordRecommendation(recommendKeyword));
    }
  }, [recommendKeyword]);

  useEffect(() => {
    if (siteRecommendationList.length !== 0) {
      if (JSON.stringify(recommendList) !== JSON.stringify(siteRecommendationList)) {
        setRecommendList([...siteRecommendationList]);
      }
    } else {
      setRecommendList([]);
    }
  }, [siteRecommendationList]);

  useEffect(() => {
    if (keywordRecommendationList.length !== 0) {
      if (JSON.stringify(recommendKeywords) !== JSON.stringify(keywordRecommendationList)) {
        setRecommendKeywords([...keywordRecommendationList]);
      }
    } else {
      setRecommendKeywords([]);
    }
  }, [keywordRecommendationList]);

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      dispatch(inquiry());
    }
  }, [userInfo.isLoggedIn]);

  return (
    <>
      <KeywordHeader title={'키워드 추가하기'} />
      <S.HashtagContainer keyword={recommendKeyword === ''} alreadyRegister={isRegisterKeyword}>
        <S.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image" />
        <S.InputKeyword
          placeholder="키워드 입력"
          onChange={onChangeRecommendKeyword}
          value={selectRecommendKeyword === '' ? recommendKeyword : selectRecommendKeyword}
        ></S.InputKeyword>
        <S.AlreadyRegisterKeyword alreadyRegister={isRegisterKeyword}>
          이미 등록한 키워드입니다.
        </S.AlreadyRegisterKeyword>
      </S.HashtagContainer>
      <S.RecommendKeywordContainer show={recommendKeyword === ''}>
        {recommendKeywords.length !== 0 &&
          recommendKeywords.map((item, index) => {
            return (
              <S.RecommendItem onClick={() => onClickRecommendKeyword(item)} key={index}>
                {item}
              </S.RecommendItem>
            );
          })}
      </S.RecommendKeywordContainer>
      <S.SearchContainer show={site === ''} alreadyRegister={isRegisterItem}>
        <S.SearchImage src="/asset/searchblack.svg" alt="search_image" />
        <S.InputSite
          placeholder="알림받을 사이트 검색"
          value={site}
          onChange={onChangeSite}
          alreadyRegister={isRegisterItem}
        ></S.InputSite>
        <S.AlreadyRegisterMessage alreadyRegister={isRegisterItem}>이미 등록한 사이트입니다.</S.AlreadyRegisterMessage>
      </S.SearchContainer>
      <S.RecommendSiteContainer show={site === ''} alreadyRegister={isRegisterItem}>
        {recommendList.length !== 0 &&
          recommendList.map((item, index) => {
            return (
              <S.RecommendItem onClick={onClickRecommendItem} key={index}>
                {item}
              </S.RecommendItem>
            );
          })}
      </S.RecommendSiteContainer>
      <S.SiteContainer>
        <S.SiteList>
          {selectRecommendItem.map((item, index) => {
            return (
              <S.SiteItem key={index}>
                <S.SiteName>{item}</S.SiteName>
                <S.CloseBtn onClick={() => onClickDeleteRecommendItem(index)}>
                  <S.XImage src="/asset/x.svg" alt="x_image" />
                </S.CloseBtn>
              </S.SiteItem>
            );
          })}
        </S.SiteList>
      </S.SiteContainer>
      <KeywordAlarm
        buttonText={'등록'}
        selectRecommendItem={selectRecommendItem}
        setSelectRecommendItem={setSelectRecommendItem}
        setRecommendKeyword={setRecommendKeyword}
        setSelectRecommendKeyword={setSelectRecommendKeyword}
      />
    </>
  );
};

export default AddKeyword;
