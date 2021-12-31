import React from 'react';
import styled from 'styled-components';
import keywordList from './dummy';

const UserContainer = styled.div`
    position:absolute;
    right:80px;
    top:40px;
`;

const Username = styled.span`
    line-height:32px;
    margin-right:16px;
`;

const LoginButton = styled.button`
    width: 80px;
    height: 32px;
    background: #222;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

const Title = styled.span`
    font-size:18px;
    min-width:87px;
    position:absolute;
    top:121px;
    left:488px;
`;

const Menu = styled.nav`
    min-width:1323px;
    height:24px;
    padding-bottom:15.3px;
    justify-content:space-between;
    position:absolute;
    border-bottom:1.5px solid #eeeeee;
    left:488px;
    top:180px;
`; 

const Item = styled.span`
    font-size:16px;
    margin-right:40px;
`;

const ItemUnderBar = styled.div`
    width:32px;
    height:8px;
    background-color:#222222;
    position:absolute;
    left:488px;
    top:216px;
`;

const FilterList = styled.nav`
    min-width:1310px;
    height:36px;
    display:flex;
    align-items:center;
    font-size:12px;
    position:absolute;
    left:501px;
    top:263px;

    .read,
    .notread {
        margin-right:15px;
    }

    .goStore {
        margin-right:10px;
        display:flex;
        align-items:center;
    }

    .delete {
        margin-right:24px;
        display:flex;
        align-items:center;
    }
`;

const CheckBox = styled.div`
    width:16px;
    height:16px;
    margin-right:24px;
    border-radius:3px;
    border:1px solid #c4c4c4;
`;

const CheckBoxTitle = styled.span`
    font-size:12px;
    margin-right:40px;
`;

const FilterItem = styled.span`
    padding:8px;
    border:1px solid #eee;
    color:#999999;
`;

const FilterItemImage = styled.img`
    margin-right:5px;
`;

const SearchInput = styled.input`
    width:665px;
    padding:8px;
    border:none;
    background-color:#eeeeee;
`;

const SearchButton = styled.button`
    width:101px;
    height:34px;
    padding:8px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:12px;
    background-color:#222222;
    color:#ffffff;
`;

const SearchImage = styled.img`
    margin-left:8px;
`;

const MainList = styled.div`
    min-width:1310px;
    position:absolute;
    left:501px;
    top:320px;
`;

const MainItem = styled.div`
    display:flex;
    padding-bottom:15px;
    margin-bottom:15px;
    border-bottom:1.5px solid #eeeeee;
`;

const MainCheckBox = styled(CheckBox)`
`;
const MainCheckBoxTitle = styled(CheckBoxTitle)`
    margin-right:125px;
`;
const MainContent = styled.div`
    font-size:12px;
    margin-right:729px;
`;

const MainReadState = styled(MainContent)`
    min-width:47px;
    text-align:center;
    color:#999999;
    margin-right:24px;
`;

const MainPeriod = styled(MainContent)`
    margin-right:0px;
`;

const KeywordList = () => {
    return(
        <>
            <UserContainer>
                <Username>uko05068님</Username>
                <LoginButton>로그아웃</LoginButton>
            </UserContainer>
            <Title>키워드 알림</Title>
            <Menu>
                <Item>전체</Item>
                <Item>아우누리</Item>
                <Item>아우미르</Item>
                <Item>대신 전해드립니다-koreatech</Item>
            </Menu>
            <ItemUnderBar></ItemUnderBar>
            <FilterList>
                <CheckBox className='checkBox'></CheckBox>
                <CheckBoxTitle className='checkTitle'>전체 선택</CheckBoxTitle>
                <FilterItem className='read'>읽은 알림</FilterItem>
                <FilterItem className='notread'>읽지 않은 알림</FilterItem>
                <FilterItem className='goStore'>
                    <FilterItemImage src='/asset/inbox-in.svg' alt='inbox-in'></FilterItemImage>
                    <span>보관함으로 이동</span>
                </FilterItem>
                <FilterItem className='delete'>
                    <FilterItemImage src='/asset/trash.svg' alt='trash'></FilterItemImage>
                    <span>삭제</span>
                </FilterItem>
                <SearchInput placeholder='알림대상/알림내용/키워드 입력'></SearchInput>
                <SearchButton>
                    <span>검색하기</span>
                    <SearchImage src='/asset/search.svg'></SearchImage>
                </SearchButton>
            </FilterList>
            <MainList>
                {keywordList.map((item)=>{
                    return(
                    <MainItem key={item.id}>
                        <MainCheckBox></MainCheckBox>
                        <MainCheckBoxTitle>{item.title}</MainCheckBoxTitle>
                        <MainContent>{item.content}</MainContent>
                        <MainReadState>{item.readState}</MainReadState>
                        <MainPeriod>{item.period}</MainPeriod>
                    </MainItem>
                    );
                })}
            </MainList>
        </>
    );
}

export default KeywordList;