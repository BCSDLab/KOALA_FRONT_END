import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSiteRecommendation } from 'store/modifyKeyword';
import { getRecommendationSite } from 'store/modifyKeyword';

const Container = styled.div`
  width: calc(100% - 32px);
  height: calc(100% + 100px);
  padding: 0 16px;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 0;
  z-index: 1;
  color: black;
`;

const Header = styled.div`
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

const KeywordSearch = styled.input`
  width: calc(100% - 84px);
  height: 40px;
  flex-grow: 0;
  padding: 0 0 0 16px;
  border: 0;
  background-color: ${(props) => props.theme.colors.lightgray};
`;

const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  flex-grow: 0;
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.darkgray};
`;

const OptionBar = styled.div`
  display: flex;
  margin-top: 17px;
  height: 32px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const RecentSearch = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.darkgray};
  margin-right: 45px;
`;

const RecommendSite = styled.span`
  f
  nt-size: 12px;
  color: ${(props) => props.theme.colors.darkgray};
`;

const UnderBarBalck = styled.div`
  width: 38px;
  height: 3px;
  background-color: ${(props) => props.theme.colors.darkgray};
  position: absolute;
  top: 110px;
  left: ${(props) => (props.isRecommendSite ? '116px' : '24px')};
`;

const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-top: 16px;
`;

const Item = styled.li`
  margin-bottom: 16px;
`;

const KeywordList = styled(List)`
  top: 112px;
`;

const KeywordItem = styled(Item)`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.lightgray};
  position: relative;
  display: flex;
  align-items: center;
`;

const HashImage = styled.img`
  margin-left: 16px;
  margin-right: 5px;
`;

const InputSite = ({
  setIsMobileSite,
  onClickRecommendItem,
  serchedSites,
  setserchedSites,
  setSite,
  site,
  setAlreadyRegisterItem,
}) => {
  const [isRecommendSite, setIsRecommendSite] = useState(false);
  const dispatch = useDispatch();
  const { siteRecommendationList } = useSelector((state) => state.modifyKeyword);
  const { recommendationSiteList } = useSelector((state) => state.modifyKeyword);

  const onClickChevronLeft = () => {
    setIsMobileSite(false);
  };
  const onChangeSiteInput = (e) => {
    const { value } = e.target;
    setSite(value);
    setAlreadyRegisterItem(false);
  };

  const onClickRecommendSites = () => {
    setIsRecommendSite(true);
  };
  const onClickRecentSearch = () => {
    setIsRecommendSite(false);
  };

  const onClickHashButton = (site) => {
    const newSite = site;
    if (0 > serchedSites.indexOf(newSite)) {
      serchedSites.unshift(newSite);
      if (serchedSites.length > 3) {
        serchedSites.pop();
      }
    }
    setSite('');
    setIsMobileSite(false);
  };

  useEffect(() => {
    if (site !== '' && site !== ' ') {
      dispatch(getSiteRecommendation(site));
    }
    dispatch(getRecommendationSite());
  }, [site]);

  useEffect(() => {
    localStorage.setItem('serchedSites', JSON.stringify(serchedSites));
  }, [serchedSites]);
  return (
    <Container>
      <Header>
        <BackButton onClick={onClickChevronLeft}>
          <BackImage src="/asset/BackButton.svg" />
        </BackButton>
        <KeywordSearch onChange={onChangeSiteInput} value={site} placeholder="알림받을 사이트 검색"></KeywordSearch>
        <SearchButton onClick={(site) => onClickRecommendItem}>
          <img src="/asset/HashtagWhite.svg" />
        </SearchButton>
      </Header>

      {site.length === 0 ? (
        <>
          <OptionBar>
            <RecentSearch onClick={onClickRecentSearch}>최근 검색</RecentSearch>
            <RecommendSite onClick={onClickRecommendSites}>추천 대상</RecommendSite>
            <UnderBarBalck isRecommendSite={isRecommendSite}></UnderBarBalck>
          </OptionBar>
          <List>
            {!isRecommendSite ? (
              <>
                {serchedSites.map((item, index) => {
                  return <Item key={index}>{item}</Item>;
                })}
              </>
            ) : (
              <>
                {recommendationSiteList.map((item, index) => {
                  return <Item key={index}>{item}</Item>;
                })}
              </>
            )}
          </List>
        </>
      ) : (
        <KeywordList>
          {siteRecommendationList.map((item, index) => {
            return (
              <KeywordItem onClick={onClickRecommendItem} key={index}>
                <HashImage src="/asset/Hashtagblack.svg" />
                <span>{item}</span>
              </KeywordItem>
            );
          })}
        </KeywordList>
      )}
    </Container>
  );
};

export default InputSite;
