import React from 'react';
import styled from 'styled-components';
import SideNavbar from 'components/SideNavbar';
import LoginButton from 'components/Shared/LoginButton';
import { MENU_ITEM } from 'constant';
import theme from 'theme';

const PageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  width: 1280px;
  height: 989px;
  margin: 121px 0px 0px 138px;
  margin-left: 138px;
  display: flex;
  flex-direction: column;
`;

const MainContentTitle = styled.span`
  font-size: 18px;
  margin-bottom: 32px;
`;

const SiteSelectBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  border-bottom: 1.5px solid ${theme.colors.lightgray};
  position: relative;
  margin-bottom: 38.3px;
`;

const SiteSelectList = styled.ul`
  padding-left: 0px;
  display: flex;
`;

const SiteSelectItem = styled.li`
  margin-right: 40px;
  font-size: 16px;
  color: ${theme.colors.black};
`;

const SiteSelectUnderBar = styled.div`
  width: 32px;
  height: 8px;
  background-color: ${theme.colors.black};
  position: absolute;
  bottom: -5px;
  left: -1px;
`;

const DataFilterBar = styled.div`
  width: 100%;
  margin-left: 13px;
  display: flex;
  align-items: center;
`;

const CheckContainer = styled.div`
  min-width: 95px;
  height: 18px;
  display: flex;
  flex-direction: space-between;
`;

const CheckBox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid ${theme.colors.lightgray};
  border-radius: 3px;
  margin-right: 24px;
`;

const CheckTitle = styled.span`
  font-size: 12px;
`;

const FilterMenus = styled.ul`
  min-width: 366px;
  height: 34px;
  margin-left: 40px;
  display: flex;
`;

const FilterMenu = styled.li`
  min-width: ${(props) => props.width}px;
  font-size: 12px;
  color: ${theme.colors.gray};
  padding: 8px;
  margin-right: ${(props) => props.marginRight}px;
  border: 1px solid ${theme.colors.lightgray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterMenuIcon = styled.img`
  width: 15px;
  height: auto;
`;

const FilterMenuName = styled.span``;

const SearchBar = styled.div`
  width: 766px;
  display: flex;
`;

const InputText = styled.input`
  width: 665px;
  height: 34px;
  border: none;
  background-color: ${theme.colors.lightgray};
  padding-left: 16px;
`;

const SearchButton = styled.div`
  width: 101px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black};
  height: 34px;
`;

const SearchTitle = styled.span`
  color: ${theme.colors.white};
  margin-right: 8px;
`;

const SearchIcon = styled.img`
  width: 16px;
`;

const AlarmContainer = styled.div`
  width: 100%;
  max-height: 800px;
  margin: 41px 0px 0px 13px;
`;

const AlarmList = styled.ul``;

const AlarmItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1.5px solid ${theme.colors.lightgray};
`;

const AlarmContent = styled.span`
  margin-left: 119px;
  font-size: 12px;
`;

const AlarmReadState = styled.span`
  margin-left: 680px;
  font-size: 12px;
  color: ${theme.colors.gray};
`;

const AlarmTime = styled.span`
  margin-left: 24px;
  font-size: 12px;
`;

const FILTER_MENU = [
  { title: '읽은 알람', id: 1, width: 63, marginRight: 10 },
  { title: '읽지 않은 알람', id: 2, width: 88, marginRight: 10 },
  { title: '보관함으로 이동', id: 3, imageUrl: '/asset/inbox-in.svg', width: 116, marginRight: 10 },
  { title: '삭제', id: 4, imageUrl: '/asset/trash.svg', width: 59, marginRight: 0 },
];

const dummy = [
  {
    name: '아우누리',
    id: 1,
    content: '이유정장학재단_이유정장학금 장학생 선정안내',
    read: '읽지 않음',
    time: '8/15 - 18:30',
  },
];

const KeywordNotifyPage = () => {
  return (
    <PageContainer>
      <LoginButton></LoginButton>
      <SideNavbar></SideNavbar>
      <MainContent>
        <MainContentTitle>키워드 알람</MainContentTitle>
        <SiteSelectBar>
          <SiteSelectList>
            {MENU_ITEM.map((menu) => {
              return (
                <SiteSelectItem key={menu.id} width={menu.width}>
                  {menu.title}
                </SiteSelectItem>
              );
            })}
          </SiteSelectList>
          <SiteSelectUnderBar></SiteSelectUnderBar>
        </SiteSelectBar>
        <DataFilterBar>
          <CheckContainer>
            <CheckBox></CheckBox>
            <CheckTitle>전체 선택</CheckTitle>
          </CheckContainer>
          <FilterMenus>
            {FILTER_MENU.map((menu) => {
              return (
                <FilterMenu key={menu.id} marginRight={menu.marginRight}>
                  {menu.imageUrl ? <FilterMenuIcon src={menu.imageUrl} /> : <></>}
                  <FilterMenuName>{menu.title}</FilterMenuName>
                </FilterMenu>
              );
            })}
          </FilterMenus>
          <SearchBar>
            <InputText placeholder="알림 대상/알림 내용/키워드 입력"></InputText>
            <SearchButton>
              <SearchTitle>검색하기</SearchTitle>
              <SearchIcon src={'/asset/search.svg'} />
            </SearchButton>
          </SearchBar>
        </DataFilterBar>
        <AlarmContainer>
          <AlarmList>
            {dummy.map((item) => {
              return (
                <AlarmItem key={item.id}>
                  <CheckContainer>
                    <CheckBox></CheckBox>
                    <CheckTitle>{item.name}</CheckTitle>
                    <AlarmContent>{item.content}</AlarmContent>
                    <AlarmReadState>{item.read}</AlarmReadState>
                    <AlarmTime>{item.time}</AlarmTime>
                  </CheckContainer>
                </AlarmItem>
              );
            })}
          </AlarmList>
        </AlarmContainer>
      </MainContent>
    </PageContainer>
  );
};

export default KeywordNotifyPage;
