import React, { useCallback, useEffect, useState } from 'react';
import KeywordHeader from '../KeywordHeader';
import { getSiteRecommendation, getKeywordRecommendation } from 'store/modifyKeyword';
import { inquiry } from 'store/keyword';
import SiteInput from '../Mobile/InputSite';
import AlertForm from '../Mobile/AlertForm';
import { debounce } from 'lodash';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import KeywordAlarm from '../KeywordAlarm';
import KeywordInput from '../Mobile/InputKeyword';
import useMatchMedia from 'hooks/useMatchMedia';
import { queries } from 'constant';
import styled from 'styled-components';

const AddKeywordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AddkeywordContent = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: calc(100% - 32px);
    height: calc(100% - 61px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 85px;
    padding: 0 16px;
  }
`;

const AddKeyword = () => {
  const [site, setSite] = useState('');
  const [isMobileSite, setIsMobileSite] = useState(false);
  const [isMobileKeyword, setIsMobileKeyword] = useState(false);
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
  const { isOpen } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const [mobile, desktop] = useMatchMedia(queries);

  const delayKeywordInput = useCallback(
    debounce((value) => {
      dispatch(getKeywordRecommendation(value));
    }, 500),
    []
  );
  const delaySiteInput = useCallback(
    debounce((value) => {
      dispatch(getSiteRecommendation(value));
    }, 500),
    []
  );
  const onChangeRecommendKeyword = (e) => {
    const { value } = e.target;
    setIsRegisterKeyword(false);
    delayKeywordInput(value);
    setRecommendKeyword(value);
    setSelectRecommendKeyword('');
  };
  const mobileSearchKeyword = () => {
    setIsMobileKeyword((prev) => !prev);
  };
  const mobileSearchSite = () => {
    setIsMobileSite((prev) => !prev);
  };
  const onChangeSite = (e) => {
    delaySiteInput(e.target.value);
    setSite(e.target.value);
    setIsRegisterItem(false);
  };

  const addRecommendSite = useCallback(
    (e) => {
      let { innerText: value } = e.target;

      if (!selectRecommendItem.includes(value)) {
        setSelectRecommendItem([...selectRecommendItem, value]);
        setSite('');
      } else {
        setSite('');
        setIsRegisterItem(true);
      }
      setIsMobileSite(false);
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
      setIsMobileKeyword(false);
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

  return (
    <AddKeywordContainer>
      <KeywordHeader title={'키워드 추가하기'} />
      <AddkeywordContent>
        <S.HashtagContainer toggle={isOpen} keyword={recommendKeyword === ''} alreadyRegister={isRegisterKeyword}>
          <S.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image" />
          {desktop ? (
            <S.InputKeyword
              placeholder="키워드 입력"
              onChange={onChangeRecommendKeyword}
              value={(selectRecommendKeyword === '' ? recommendKeyword : selectRecommendKeyword) || ''}
            ></S.InputKeyword>
          ) : (
            <S.InputKeyword placeholder="키워드 입력" defaultValue={recommendKeyword} onClick={mobileSearchKeyword} />
          )}
          <S.AlreadyRegisterKeyword alreadyRegister={isRegisterKeyword}>
            이미 등록한 키워드입니다.
          </S.AlreadyRegisterKeyword>
        </S.HashtagContainer>
        <S.RecommendKeywordContainer show={recommendKeyword === ''} toggle={isOpen}>
          {recommendKeywords.length !== 0 &&
            recommendKeywords.map((item, index) => {
              return (
                <S.RecommendItem onClick={() => onClickRecommendKeyword(item)} key={index}>
                  {item}
                </S.RecommendItem>
              );
            })}
        </S.RecommendKeywordContainer>
        <S.SearchContainer show={site === ''} alreadyRegister={isRegisterItem} toggle={isOpen}>
          <S.SearchImage src="/asset/searchblack.svg" alt="search_image" />
          {desktop ? (
            <S.InputSite
              placeholder="알림받을 사이트 검색"
              value={site}
              onChange={onChangeSite}
              alreadyRegister={isRegisterItem}
            />
          ) : (
            <S.InputSite placeholder="알림받을 사이트 검색" defaultValue={site} onClick={mobileSearchSite} />
          )}
          <S.AlreadyRegisterMessage alreadyRegister={isRegisterItem}>
            이미 등록한 사이트입니다.
          </S.AlreadyRegisterMessage>
        </S.SearchContainer>
        <S.RecommendSiteContainer show={site === ''} alreadyRegister={isRegisterItem} toggle={isOpen}>
          {recommendList.length !== 0 &&
            recommendList.map((item, index) => {
              return (
                <S.RecommendItem onClick={addRecommendSite} key={index}>
                  {item}
                </S.RecommendItem>
              );
            })}
        </S.RecommendSiteContainer>
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
        {isMobileKeyword && (
          <KeywordInput
            setKeyword={setRecommendKeyword}
            keyword={recommendKeyword}
            selectRecommendKeyword={selectRecommendKeyword}
            setSelectRecommendKeyword={setSelectRecommendKeyword}
            setAlreadyRegisterItem={setIsRegisterKeyword}
            setSelectedRecommendItem={setSelectRecommendKeyword}
            setIsMobileKeyword={setIsMobileKeyword}
            onClickRecommendItem={onClickRecommendKeyword}
          />
        )}
        {isMobileSite && (
          <SiteInput
            setSite={setSite}
            site={site}
            setAlreadyRegisterItem={setIsRegisterItem}
            setSelectedRecommendItem={setSelectRecommendItem}
            setIsMobileSite={setIsMobileSite}
            onClickRecommendItem={addRecommendSite}
          />
        )}
        {!mobile ? (
          <KeywordAlarm
            buttonText={'등록'}
            keywordName={selectRecommendKeyword}
            selectRecommendItem={selectRecommendItem}
            setSelectRecommendItem={setSelectRecommendItem}
            setRecommendKeyword={setRecommendKeyword}
            setSelectRecommendKeyword={setSelectRecommendKeyword}
          />
        ) : (
          <AlertForm
            buttonText={'등록'}
            keywordName={selectRecommendKeyword}
            selectRecommendItem={selectRecommendItem}
            setSelectRecommendItem={setSelectRecommendItem}
            setRecommendKeyword={setRecommendKeyword}
            setSelectRecommendKeyword={setSelectRecommendKeyword}
          />
        )}
      </AddkeywordContent>
    </AddKeywordContainer>
  );
};

export default AddKeyword;
