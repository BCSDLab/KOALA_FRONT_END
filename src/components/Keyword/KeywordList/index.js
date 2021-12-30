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


const KeywordList = () => {
    return(
        <>
            <UserContainer>
                <Username>uko05068님</Username>
                <LoginButton>로그아웃</LoginButton>
            </UserContainer>
        </>
    );
}

export default KeywordList;