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


const KeywordList = () => {
    return(
        <>
            <UserContainer>
                <Username>uko05068님</Username>
                <LoginButton>로그아웃</LoginButton>
            </UserContainer>
            <Title>키워드 알림</Title>

        </>
    );
}

export default KeywordList;