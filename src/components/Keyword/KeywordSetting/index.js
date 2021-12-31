import React from "react";
import KeywordHeader from "../KeywordHeader";
import styled from "styled-components";

const NotifyContainer = styled.div`
    display:flex;
    align-items:center;
    position:absolute;
    left:596px;
    top:232px;
`;

const VibrationContaienr = styled(NotifyContainer)`
    top:275px;
`;

const NotifyCheckBox = styled.div`
    min-width:14px;
    height:14px;
    margin-right:8px;
    border-radius:3px;
    border:1px solid #c4c4c4;
`;

const NotifyCheckBoxTitle = styled.div`
    min-width:126px;
    height:21px;
    font-size:14px;
    color:#999999;
    margin-right:24px;
`;

const VibrationContent = styled.div`
    width:199px;
    font-size:11px;
    color:#999999;
`;

const VibrationCheckBox = styled(NotifyCheckBox)`
`;

const VibrationCheckBoxTitle = styled(NotifyCheckBoxTitle)`
`;

const KeywordSetting = () => {
    return(
        <>
            <KeywordHeader title={'키워드 환경설정'}/>
            <NotifyContainer>
                <NotifyCheckBox></NotifyCheckBox>
                <NotifyCheckBoxTitle>모든 키워드 알람 끄기</NotifyCheckBoxTitle>
            </NotifyContainer>
            <VibrationContaienr>
                <VibrationCheckBox></VibrationCheckBox>
                <VibrationCheckBoxTitle>모든 키워드 진동 끄기</VibrationCheckBoxTitle>
                <VibrationContent>해당 기능은 모바일 앱에서만 작동합니다.</VibrationContent>
            </VibrationContaienr>
        </>
    )
}

export default KeywordSetting;