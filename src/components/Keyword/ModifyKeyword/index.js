import React, { useCallback, useEffect, useState } from 'react';
import KeywordHeader from '../KeywordHeader';
import { getRecommendation } from 'store/modifyKeyword';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import KeywordAlarm from '../KeywordAlarm';
import { AlarmContext } from 'context/KeywordAlarmContext';
import { useContext } from 'react';
import { changeAlarmTerm, changeSiteName } from '../utils';
import { patchModifyKeyword } from 'store/modifyKeyword';

const ModifyKeyword = () => {
  const [site, setSite] = useState('');
  const [recommendList, setRecommendList] = useState([]);
  const [selectRecommendItem, setSelectRecommendItem] = useState([]);
  const [alreadyRegisterItem, setAlreadyRegisterItem] = useState(false);

  const { recommendationList } = useSelector((state) => state.modifyKeyword);
  const dispatch = useDispatch();

  const {
    isNormalAlarm,
    isImportantAlarm,
    alarmTerm,
    setIsNormalAlarm,
    setIsImportantAlarm,
    setIsSlientAlarm,
    setIsVibrationAlarm,
    setAlarmTerm,
  } = useContext(AlarmContext);

  const searchSite = (e) => {
    setSite(e.target.value);
    setAlreadyRegisterItem(false);
  };

  const onClickRecommendItem = useCallback(
    (e) => {
      let { innerText: value } = e.target;

      if (!selectRecommendItem.includes(site)) {
        setSelectRecommendItem([...selectRecommendItem, value]);
        setSite('');
      } else {
        setSite('');
        setAlreadyRegisterItem(true);
      }
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

  const onClickModifyButton = useCallback(() => {
    const data = {
      alarmCycle: changeAlarmTerm(alarmTerm),
      alarmMode: isNormalAlarm ? 1 : 0,
      isImportant: isImportantAlarm ? 1 : 0,
      name: '키워드',
      siteList: selectRecommendItem.map((item) => changeSiteName(item)),
    };

    dispatch(patchModifyKeyword(data.name, data));

    setIsNormalAlarm(false);
    setIsImportantAlarm(false);
    setIsSlientAlarm(false);
    setIsVibrationAlarm(false);
    setAlarmTerm(false);
    setSelectRecommendItem([]);
  }, [alarmTerm, isNormalAlarm, isImportantAlarm, selectRecommendItem]);

  useEffect(() => {
    if (site !== '') {
      dispatch(getRecommendation(site));
    }
  }, [site]);

  useEffect(() => {
    if (recommendationList.length !== 0) {
      if (JSON.stringify(recommendList) !== JSON.stringify(recommendationList)) {
        setRecommendList([...recommendationList]);
      }
    }
  }, [recommendationList]);

  return (
    <>
      <KeywordHeader title={'키워드 수정하기'} />
      <S.HashtagContainer>
        <S.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image" />
        <S.InputKeyword>키워드 테스트</S.InputKeyword>
      </S.HashtagContainer>
      <S.SearchContainer show={site === ''} alreadyRegister={alreadyRegisterItem}>
        <S.SearchImage src="/asset/searchblack.svg" alt="search_image" />
        <S.InputSite
          placeholder="알림받을 사이트 검색"
          value={site}
          onChange={searchSite}
          alreadyRegister={alreadyRegisterItem}
        ></S.InputSite>
        <S.AlreadyRegisterMessage alreadyRegister={alreadyRegisterItem}>
          이미 등록한 사이트입니다.
        </S.AlreadyRegisterMessage>
      </S.SearchContainer>
      <S.RecommendContainer show={site === ''} alreadyRegister={alreadyRegisterItem}>
        {recommendList.length !== 0 &&
          recommendList.map((item, index) => {
            return (
              <S.RecommendItem onClick={onClickRecommendItem} key={index}>
                {item}
              </S.RecommendItem>
            );
          })}
      </S.RecommendContainer>
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
      <KeywordAlarm />
      <S.EditButton onClick={onClickModifyButton}>수정</S.EditButton>
      <S.CancelButton>취소</S.CancelButton>
    </>
  );
};

export default ModifyKeyword;
