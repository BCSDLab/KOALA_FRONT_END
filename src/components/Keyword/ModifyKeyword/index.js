import React, { useCallback, useEffect, useState } from 'react';
import KeywordHeader from '../KeywordHeader';
import { getSiteRecommendation, detailKeyword } from 'store/modifyKeyword';
import { debounce } from 'lodash';
import * as S from './styles';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { changeSite } from '../utils';
import useMatchMedia from 'hooks/useMatchMedia';
import KeywordAlarm from '../KeywordAlarm';
import SiteInput from '../Mobile/InputSite';
import AlertForm from '../Mobile/AlertForm';

const ModifyKeyword = () => {
  const [site, setSite] = useState('');
  const [isMobileSite, setIsMobileSite] = useState(false);
  const [recommendList, setRecommendList] = useState([]);
  const [selectRecommendItem, setSelectRecommendItem] = useState([]);
  const [alreadyRegisterItem, setAlreadyRegisterItem] = useState(false);
  const [isNullSiteError, setIsNullSiteError] = useState(false);
  const [searchedSites, setSearchedSites] = useState(JSON.parse(localStorage.getItem('searchedSites') || '[]'));
  const { siteRecommendationList } = useSelector((state) => state.modifyKeyword);
  const { keywordInfo } = useSelector((state) => state.modifyKeyword);
  const dispatch = useDispatch();
  const location = useLocation();
  const keywordName = location.state;
  const { isOpen } = useSelector((state) => state.toggle);
  const queries = ['(max-width: 1024px)'];
  const [mobile] = useMatchMedia(queries);

  const delayInput = useCallback(
    debounce((value) => {
      dispatch(getSiteRecommendation(value));
    }, 500),
    []
  );

  const searchSite = (e) => {
    delayInput(e.target.value);
    setSite(e.target.value);
    setAlreadyRegisterItem(false);
  };

  const mobileSearchSite = () => {
    setIsMobileSite((prev) => !prev);
  };

  const onClickRecommendItem = useCallback(
    (e) => {
      let { innerText: value } = e.target;

      if (!selectRecommendItem.includes(value)) {
        setSelectRecommendItem([...selectRecommendItem, value]);
        setSite('');
        const newSite = value;
        if (0 > searchedSites.indexOf(newSite)) {
          searchedSites.unshift(newSite);
          if (searchedSites.length > 3) {
            searchedSites.pop();
          }
        }
      } else {
        setSite('');
        setAlreadyRegisterItem(true);
      }
      setIsMobileSite(false);
    },
    [selectRecommendItem, site]
  );

  const onClickDeleteRecommendItem = useCallback(
    (id) => {
      const newList = selectRecommendItem.filter((item) => item !== selectRecommendItem[id]);
      setSelectRecommendItem(newList);
    },
    [selectRecommendItem]
  );

  useEffect(() => {
    if (siteRecommendationList && siteRecommendationList.length !== 0) {
      if (JSON.stringify(recommendList) !== JSON.stringify(siteRecommendationList)) {
        setRecommendList([...siteRecommendationList]);
      }
    } else {
      setRecommendList([]);
    }
  }, [siteRecommendationList]);

  useEffect(() => {
    dispatch(detailKeyword(keywordName));
  }, [keywordName]);

  useEffect(() => {
    const siteList = keywordInfo.siteList;
    if (siteList !== undefined) {
      const site = siteList.map((item) => changeSite(item));
      setSelectRecommendItem([...site]);
    }
  }, [keywordInfo.siteList]);

  return (
    <ModifyKeywordContainer>
      <KeywordHeader title={'키워드 수정하기'} />
      <S.ModifyKeywordContent>
        <S.HashtagContainer toggle={isOpen}>
          <S.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image" />
          <S.InputKeyword>{keywordName}</S.InputKeyword>
        </S.HashtagContainer>
        <S.SearchContainer toggle={isOpen} show={site === ''} alreadyRegister={alreadyRegisterItem}>
          <S.SearchImage src="/asset/searchblack.svg" alt="search_image" />
          {!mobile ? (
            <S.InputSite
              placeholder="알림받을 사이트 검색"
              type="text"
              value={site}
              onChange={searchSite}
              alreadyRegister={alreadyRegisterItem}
            />
          ) : (
            <S.InputSite placeholder="알림받을 사이트 검색" defaultValue={site} onClick={mobileSearchSite} />
          )}
          <S.AlreadyRegisterMessage alreadyRegister={alreadyRegisterItem || isNullSiteError}>
            {alreadyRegisterItem ? '이미 등록한 사이트입니다.' : isNullSiteError && '사이트를 등록해주세요'}
          </S.AlreadyRegisterMessage>
        </S.SearchContainer>
        {!mobile && (
          <S.RecommendContainer toggle={isOpen} show={site === ''} alreadyRegister={alreadyRegisterItem}>
            {recommendList.length !== 0 &&
              recommendList.map((item, index) => {
                return (
                  <S.RecommendItem onClick={onClickRecommendItem} key={index}>
                    {item}
                  </S.RecommendItem>
                );
              })}
          </S.RecommendContainer>
        )}
        <S.SiteContainer toggle={isOpen}>
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
        {isMobileSite && (
          <SiteInput
            setSite={setSite}
            site={site}
            searchedSites={searchedSites}
            setSearchedSites={setSearchedSites}
            setAlreadyRegisterItem={setAlreadyRegisterItem}
            setSelectedRecommendItem={setSelectRecommendItem}
            setIsMobileSite={setIsMobileSite}
            onClickRecommendItem={onClickRecommendItem}
          />
        )}
        {!mobile ? (
          <KeywordAlarm
            buttonText={'수정'}
            selectRecommendItem={selectRecommendItem}
            setSelectRecommendItem={setSelectRecommendItem}
            keywordName={keywordName}
            setIsNullSiteError={setIsNullSiteError}
          />
        ) : (
          <AlertForm
            buttonText={'수정'}
            selectRecommendItem={selectRecommendItem}
            setSelectRecommendItem={setSelectRecommendItem}
            keywordName={keywordName}
            setIsNullSiteError={setIsNullSiteError}
          />
        )}
      </S.ModifyKeywordContent>
    </ModifyKeywordContainer>
  );
};

export default ModifyKeyword;

const ModifyKeywordContainer = styled.div`
  width: ${(props) => (props.toggle ? 'calc(100vw - 350px - 240px - 138px)' : 'calc(100vw - 80px - 375px - 273px)')};
  min-width: 700px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    min-width: 300px;
  }
`;
