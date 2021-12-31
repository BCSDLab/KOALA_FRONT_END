import React from "react";
import * as s from './styles';

const KeywordHeader = ({title}) => {
    return(
        <>
            <s.UserContainer>
                <s.Username>uko05068님</s.Username>
                <s.LoginButton>로그아웃</s.LoginButton>
            </s.UserContainer>
            <s.Title>{title}</s.Title>
        </>
    );
}

export default KeywordHeader;