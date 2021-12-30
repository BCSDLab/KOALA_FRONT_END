import React from 'react';
import styled from 'styled-components';

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
    width:1284px;
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
        </>
    );
}

export default KeywordList;