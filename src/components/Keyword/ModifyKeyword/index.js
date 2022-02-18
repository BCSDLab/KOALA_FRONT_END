import React, { useCallback, useEffect, useState } from 'react';
import KeywordHeader from '../KeywordHeader';
import { getSiteRecommendation } from 'store/modifyKeyword';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { MEDIA_QUERIES } from 'constant';
import useMatchMedia from 'hooks/useMatchMedia';
import KeywordAlarm from '../KeywordAlarm';
import SiteInput from '../Mobile/SiteInput';
import AlertForm from '../Mobile/AlertForm';

const ModifyKeyword = () => {
  const [site, setSite] = useState('');
  const [isMobileSite, setIsMobileSite] = useState(false);
  const [recommendList, setRecommendList] = useState([]);
  const [selectRecommendItem, setSelectRecommendItem] = useState([]);
  const [alreadyRegisterItem, setAlreadyRegisterItem] = useState(false);
  const { siteRecommendationList } = useSelector((state) => state.modifyKeyword);
  const dispatch = useDispatch();
  const location = useLocation();
  const keywordName = location.state;
  const { isOpen } = useSelector((state) => state.toggle);
  const [mobile, desktop] = useMatchMedia(MEDIA_QUERIES);

  const searchSite = (e) => {
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
    if (site !== '') {
      dispatch(getSiteRecommendation(site));
    }
  }, [site]);

  useEffect(() => {
    if (siteRecommendationList && siteRecommendationList.length !== 0) {
      if (JSON.stringify(recommendList) !== JSON.stringify(siteRecommendationList)) {
        setRecommendList([...siteRecommendationList]);
      }
    } else {
      setRecommendList([]);
    }
  }, [siteRecommendationList]);

  return (
    <>
      <KeywordHeader title={'키워드 수정하기'} />
      <S.ModifyKeywordContent>
        <S.HashtagContainer toggle={isOpen}>
          <S.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image" />
          <S.InputKeyword>{keywordName}</S.InputKeyword>
        </S.HashtagContainer>
        <S.SearchContainer toggle={isOpen} show={site === ''} alreadyRegister={alreadyRegisterItem}>
          <S.SearchImage src="/asset/searchblack.svg" alt="search_image" />
          {desktop ? (
            <S.InputSite
              placeholder="알림받을 사이트 검색"
              value={site}
              onChange={searchSite}
              alreadyRegister={alreadyRegisterItem}
            />
          ) : (
            <S.InputSite placeholder="알림받을 사이트 검색" value={site} onClick={mobileSearchSite} />
          )}
          <S.AlreadyRegisterMessage alreadyRegister={alreadyRegisterItem}>
            이미 등록한 사이트입니다.
          </S.AlreadyRegisterMessage>
        </S.SearchContainer>
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
          />
        ) : (
          <AlertForm />
        )}
      </S.ModifyKeywordContent>
    </>
  );
};

export default ModifyKeyword;
