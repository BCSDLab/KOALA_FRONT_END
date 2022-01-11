import React,{useCallback} from "react";
import * as s from './styles';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const KeywordHeader = ({title,toggle}) => {

    const user = useSelector((state)=>state.auth);

    return(
        <>
            <s.UserContainer toggle={toggle}>
                {user.isLoggedIn&&<s.Username>test</s.Username>}
                <s.LoginButton onClick={onClickLoggedInButton}>{user.isLoggedIn?'로그아웃':'로그인'}</s.LoginButton>
            </s.UserContainer>
            <s.Title toggle={toggle}>{title}</s.Title>
        </>
    );
}

export default KeywordHeader;