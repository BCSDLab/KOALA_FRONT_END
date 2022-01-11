import React from "react";
import * as s from './styles';

const KeywordHeader = ({title,toggle}) => {
    return(
        <>
            <s.UserContainer toggle={toggle}>
                <s.Username>uko05068님</s.Username>
                <s.LoginButton>로그아웃</s.LoginButton>
            </s.UserContainer>
            <s.Title toggle={toggle}>{title}</s.Title>
        </>
    );
}

export default KeywordHeader;