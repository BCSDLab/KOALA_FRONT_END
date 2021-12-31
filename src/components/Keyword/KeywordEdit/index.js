import React from "react";
import styled from "styled-components";
import KeywordHeader from "../KeywordHeader";

const HashtagContainer = styled.div`
    width:1092px;
    height:48px;
    border:1px solid #eee;
    display:flex;
    align-items:center;
    padding-left:24px;
    position:absolute;
    left:588px;
    top:212px;
`;

const HashtageImage = styled.img`
    width:20px;
    height:20px;
    margin-right:8px;
`;

const InputKeyword = styled.input`
    width:1040px;
    border:none;
`;

const SearchContainer = styled(HashtagContainer)`
    width:1092px;
    top:276px;
`;

const SearchImage = styled(HashtageImage)`
`;

const InputSite = styled(InputKeyword)`
`;

const SiteContainer = styled(HashtagContainer)`
    top:335px;
    height:117px;
    background-color:#eee;
    padding:10px 12px;
`;

const SiteList = styled.ul`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`;

const SiteItem = styled.li`
    height:21px;
    display:flex;
    align-items:center;
`;

const SiteName = styled.span`
    margin-right:4px;
`;

const CloseBtn = styled.button`
    display:flex;
    align-items:center;
    margin-right:36px;
`;

const XImage = styled.img`    
`;

const ImportantContainer = styled.div`
    height:16px;
    display:flex;
    position:absolute;
    left:590px;
    top:501px;
    align-items:center;
`;  

const NormalContainer = styled(ImportantContainer)`
    top:530px;
`;

const CheckBox = styled.div`
    min-width:14px;
    height:14px;
    margin-right:8px;
    border-radius:3px;
    border:1px solid #c4c4c4;
`;

const CheckBoxTitle = styled.span`
    min-width:55px;
    font-size:14px;
    color:#999999;
    margin-right:24px;
`;

const CheckBoxContent = styled.span`
    min-width:241px;
    font-size:11px;
    color:#999999;
`;

const SettingContainer = styled(HashtagContainer)`
    height:159px;
    left:588px;
    top:570px;
    display:flex;
    flex-direction:column;
`;

const ModeContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin:16px 0px 32px 0px;
`;

const SlientMode = styled(CheckBoxTitle)`
    margin-right:8px;
`;

const SlientCheckBox = styled(CheckBox)`
    margin-right:32px;
`;

const VibrationCheckBox = styled(CheckBox)`
    margin-right:24px;
`;

const SettingContent = styled(CheckBoxContent)`
`;

const AlarmContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;

const AlarmTitle = styled.span`
    margin-bottom:16px;
`;

const AlarmType = styled.ul`
    display:flex;
`;

const Type = styled.li`
    color: #c4c4c4;
    margin-right:48px;
`;

const EditButton = styled.button`
    width: 80px;
    height: 32px;
    background: #222;
    color: #fff;
    position:absolute;
    top:834px;
    left:1018px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

const CancelButton = styled(EditButton)`
    left:1142px;
`;

const KeywordEdit = () => {
    return(
        <>
            <KeywordHeader title={"키워드 수정하기"}/>
            <HashtagContainer>
                <HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image"/>
                <InputKeyword></InputKeyword>
            </HashtagContainer>
            <SearchContainer>
                <SearchImage src="/asset/searchblack.svg" alt="search_image"/>
                <InputSite placeholder="알림받을 사이트 검색"></InputSite>
            </SearchContainer>
            <SiteContainer>
                <SiteList>
                    <SiteItem>
                        <SiteName>아우누리</SiteName>
                        <CloseBtn>
                            <XImage src="/asset/x.svg" alt="x_image"/>
                        </CloseBtn>
                        <SiteName>에브리타임</SiteName>
                        <CloseBtn>
                            <XImage src="/asset/x.svg" alt="x_image"/>
                        </CloseBtn>
                        <SiteName>페이스북 - 디자인공학과 학생회</SiteName>
                        <CloseBtn>
                            <XImage src="/asset/x.svg" alt="x_image"/>
                        </CloseBtn>
                    </SiteItem>
                </SiteList>
            </SiteContainer>
            <ImportantContainer>
                <CheckBox></CheckBox>
                <CheckBoxTitle>중요 알림</CheckBoxTitle>
                <CheckBoxContent>중요알림 기능은 모바일 앱에서만 확인할 수 있습니다.</CheckBoxContent>
            </ImportantContainer>
            <NormalContainer>
                <CheckBox></CheckBox>
                <CheckBoxTitle>일반 알림</CheckBoxTitle>
            </NormalContainer>
            <SettingContainer>
                <ModeContainer>
                    <SlientMode>무음모드에도 알림</SlientMode>
                    <SlientCheckBox></SlientCheckBox>
                    <SlientMode>진동 알림</SlientMode>
                    <VibrationCheckBox></VibrationCheckBox>
                    <SettingContent>무음모드에도 알림,진동 알림 기능은 모바일 앱에서만 적용이 가능합니다.</SettingContent>
                </ModeContainer>
                <AlarmContainer>
                    <AlarmTitle>알람주기</AlarmTitle>
                    <AlarmType>
                        <Type>5분</Type>
                        <Type>10분</Type>
                        <Type>15분</Type> 
                        <Type>30분</Type>
                        <Type>1시간</Type>
                        <Type>2시간</Type> 
                        <Type>4시간</Type>
                    </AlarmType>
                </AlarmContainer>
            </SettingContainer>
            <EditButton>수정</EditButton>
            <CancelButton>취소</CancelButton>
        </>
    );
}

export default KeywordEdit;