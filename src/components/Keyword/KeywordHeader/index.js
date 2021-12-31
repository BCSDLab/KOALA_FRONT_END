import React from "react";
import * as s from './styles';

const KeywordHeader = () => {
    return(
        <>
            <s.UserContainer>
                <s.Username>uko05068님</s.Username>
                <s.LoginButton>로그아웃</s.LoginButton>
            </s.UserContainer>
            <s.Title>키워드 알림</s.Title>
        </>
    );
}

export default KeywordHeader;