import React from "react";
import KeywordHeader from "../KeywordHeader";
import * as s from './styles';

const AddKeyword = () => {
    return(
        <>
            <KeywordHeader title={"키워드 추가하기"}/>
            <s.HashtagContainer>
                <s.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image"/>
                <s.InputKeyword></s.InputKeyword>
            </s.HashtagContainer>
            <s.SearchContainer>
                <s.SearchImage src="/asset/searchblack.svg" alt="search_image"/>
                <s.InputSite placeholder="알림받을 사이트 검색"></s.InputSite>
            </s.SearchContainer>
            <s.SiteContainer>
                <s.SiteList>
                    <s.SiteItem>
                        <s.SiteName>아우누리</s.SiteName>
                        <s.CloseBtn>
                            <s.XImage src="/asset/x.svg" alt="x_image"/>
                        </s.CloseBtn>
                        <s.SiteName>에브리타임</s.SiteName>
                        <s.CloseBtn>
                            <s.XImage src="/asset/x.svg" alt="x_image"/>
                        </s.CloseBtn>
                        <s.SiteName>페이스북 - 디자인공학과 학생회</s.SiteName>
                        <s.CloseBtn>
                            <s.XImage src="/asset/x.svg" alt="x_image"/>
                        </s.CloseBtn>
                    </s.SiteItem>
                </s.SiteList>
            </s.SiteContainer>
            <s.ImportantContainer>
                <s.CheckBox></s.CheckBox>
                <s.CheckBoxTitle>중요 알림</s.CheckBoxTitle>
                <s.CheckBoxContent>중요알림 기능은 모바일 앱에서만 확인할 수 있습니다.</s.CheckBoxContent>
            </s.ImportantContainer>
            <s.NormalContainer>
                <s.CheckBox></s.CheckBox>
                <s.CheckBoxTitle>일반 알림</s.CheckBoxTitle>
            </s.NormalContainer>
            <s.SettingContainer>
                <s.ModeContainer>
                    <s.SlientMode>무음모드에도 알림</s.SlientMode>
                    <s.SlientCheckBox></s.SlientCheckBox>
                    <s.SlientMode>진동 알림</s.SlientMode>
                    <s.VibrationCheckBox></s.VibrationCheckBox>
                    <s.SettingContent>무음모드에도 알림,진동 알림 기능은 모바일 앱에서만 적용이 가능합니다.</s.SettingContent>
                </s.ModeContainer>
                <s.AlarmContainer>
                    <s.AlarmTitle>알람주기</s.AlarmTitle>
                    <s.AlarmType>
                        <s.Type>5분</s.Type>
                        <s.Type>10분</s.Type>
                        <s.Type>15분</s.Type> 
                        <s.Type>30분</s.Type>
                        <s.Type>1시간</s.Type>
                        <s.Type>2시간</s.Type> 
                        <s.Type>4시간</s.Type>
                    </s.AlarmType>
                </s.AlarmContainer>
            </s.SettingContainer>
            <s.EditButton>수정</s.EditButton>
            <s.CancelButton>취소</s.CancelButton>
        </>
    );
}

export default AddKeyword;