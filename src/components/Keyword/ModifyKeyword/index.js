import React, { useCallback, useEffect, useState } from 'react';
import KeywordHeader from '../KeywordHeader';
import { getSiteRecommendation } from 'store/modifyKeyword';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { MEDIA_QUERIES } from 'constant';
import useMatchMedia from 'hooks/useMatchMedia';
import KeywordAlarm from '../KeywordAlarm';
import KeywordInput from '../Mobile/KeywordInput';

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
          <KeywordInput
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
          <MobileAlarm>
            <AlarmContent>
              <AlarmHeader>
                <AlramHeaderContent>중요알림</AlramHeaderContent>
                <NotSelect>일반알림</NotSelect>
              </AlarmHeader>
              <AlarmInner>
                <AlramContentLine>
                  <AlarmInnerMain>무음모드 알림</AlarmInnerMain>
                  <AlarmInnerOption>
                    <ToggleImage src="/asset/ToggleOff.svg" />
                  </AlarmInnerOption>
                </AlramContentLine>
                <AlramContentLine>
                  <AlarmInnerMain>진동모드 알림</AlarmInnerMain>
                  <AlarmInnerOption>
                    <ToggleImage src="/asset/ToggleOff.svg" />
                  </AlarmInnerOption>
                </AlramContentLine>
                <AlramContentLine>
                  <AlarmInnerMain>확인 버튼 누를 때까지 알림</AlarmInnerMain>
                  <AlarmInnerOption>
                    <ToggleImage src="/asset/ToggleOff.svg" />
                  </AlarmInnerOption>
                </AlramContentLine>
                <AlramContentLine>
                  <AlarmInnerMain>알림주기</AlarmInnerMain>
                  <AlarmInnerOption>
                    0시간
                    <ArrowImage src="/asset/chevron-right.svg" />
                  </AlarmInnerOption>
                </AlramContentLine>
              </AlarmInner>
            </AlarmContent>
            <ErrorText>알림은 앱에서만 설정할 수 있습니다.</ErrorText>
          </MobileAlarm>
        )}
      </S.ModifyKeywordContent>
    </>
  );
};

export default ModifyKeyword;

const MobileAlarm = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
`;
const AlarmContent = styled.div`
  width: 100%;
  height: 254px;
  border: solid 1px #ffd25d;
`;

const AlarmHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
`;
const AlramHeaderContent = styled.div`
  width: 50%;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
`;
const NotSelect = styled(AlramHeaderContent)`
  background-color: #fff;
  color: #c4c4c4;
`;
const AlramContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  margin-bottom: 19px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  text-align: left;
  color: #c4c4c4;
`;
const AlarmInner = styled.div`
  padding: 24px 16px;
`;
const AlarmInnerMain = styled.div`
  width: 234px;
`;
const AlarmInnerOption = styled.div`
  width: 62px;
`;
const ToggleImage = styled.img`
  width: 48px;
  height: 24px;
  margin-left: 16px;
`;
const ArrowImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  object-fit: contain;
`;
const ErrorText = styled.div`
  font-size: 11px;
  font-weight: 500;
  text-align: left;
  color: #ffd25d;
`;

const MobileSiteSerach = styled.div`
  width: calc(100% - 32px);
  height: calc(100% + 100px);
  padding: 0 16px;
  background-color: white;
  position: absolute;
  top: 0;
  z-index: 1;
  color: black;
`;
const MobileHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  margin-top: 21.6px;
`;

const BackButton = styled.button``;

const BackImage = styled.img`
  position: absolute;
  left: 8px;
  top: 29.6px;
  background-color: ${(props) => props.theme.colors.white};
`;
const MobileSearchSiteInput = styled.input`
  width: calc(100% - 84px);
  height: 40px;
  flex-grow: 0;
  padding: 0 0 0 16px;
  margin-left: 44px;
  border: 0;
  background-color: #eee;
`;

const MobileSearchSiteButton = styled.button`
  width: 40px;
  height: 40px;
  flex-grow: 0;
  color: white;
  padding: 10px;
  font-size: 20px;
  background-color: #222;
`;
const HashtagImg = styled.img`
  width: 20px;
  height: 20px;
`;

const MobileSerchBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 17px;
`;
