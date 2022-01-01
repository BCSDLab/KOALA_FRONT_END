import React,{Fragment} from "react";
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

const NotifyCheckBoxTitle = styled.span`
    min-width:126px;
    height:21px;
    font-size:14px;
    color:#999999;
    margin-right:24px;
`;

const MinusImage = styled.img`
    position:absolute;
    left:796px;
    top:482px;
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

const DisturbTitle = styled.span`
    min-width:113px;
    position:absolute;
    left:596px;
    top:350px;
`;

const DisturbContainer = styled.ul`
    min-width:1092px;
    height:68px;
    border:1.5px solid #eee;
    position:absolute;
    left:596px;
    top:386px;
    display:flex;
    align-items:center;
`;

const DisturbCheckBox = styled.div`
    min-width:14px;
    height:14px;
    margin-right:8px;
    border-radius:3px;
    border:1px solid #c4c4c4;
    margin: 0px 8px 0px 15px;
`;

const DisturbTimeStart = styled.input`
    position:absolute;
    left:596px;
    top:470px;
    min-width:180px;
    height:48px;
    border: 1.5px solid #eee;
    text-align:center;
    line-height:48px;
    font-size:15px;
    &:after {
        width:12px;
        height:1px;
        color:
    }
`;

const DisturbTimeEnd = styled(DisturbTimeStart)`
    left:840px;
`;

const SelectTitle = styled.span`
    width:68px;
    position:absolute;
    left:596px;
    top:590px;
`;

const SelectBox = styled.div`
    min-width:180px;
    height:48px;
    border: 1.5px solid #eee;
    position:absolute;
    left:596px;
    top:627px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const SelectMenu = styled.span` 
    margin-left:16px;
`;

const ChevronDownImage = styled.img`
    margin-right:8px;
`;

const BrowserTitle = styled(NotifyCheckBoxTitle)`
    position:absolute;
    top:747px;
    left:596px;
    color:#222222;
`;

const BrowserCheckContainer = styled.div`
    display:flex;
    align-items:center;
    position:absolute;
    left:596px;
    top:792px;
`;

const ChromeImage = styled.img`
    width:21px;
    height:21px;
    margin-right:8px;
`;

const ChromeName = styled.span`
    margin-right:32px;
`;

const ChromeCheckBox = styled(NotifyCheckBox)`

`;

const SaveButton =  styled.button`
    width: 80px;
    height: 32px;
    background: #222;
    color: #fff;
    position:absolute;
    top:1014px;
    left:1018px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

const CancelButton = styled(SaveButton)`
    left:1142px;
`;

const WEEK = [
    {id:0,day:"월요일"},
    {id:1,day:"화요일"},
    {id:2,day:"수요일"},
    {id:3,day:"목요일"},
    {id:4,day:"금요일"},
    {id:5,day:"토요일"},
    {id:6,day:"일요일"},
    {id:7,day:"공휴일"},
];

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
            <DisturbTitle>방해 금지 모드 설정</DisturbTitle>
            <DisturbContainer>
                {WEEK.map((item)=>{
                    return(
                        <Fragment key={item.id}>
                            <DisturbCheckBox></DisturbCheckBox>
                            <span>{item.day}</span>
                        </Fragment>
                    );
                })}
            </DisturbContainer>
            <DisturbTimeStart placeholder="0 0 : 0 0"></DisturbTimeStart>
            <MinusImage src="/asset/minus.svg"/>
            <DisturbTimeEnd placeholder="2 4 : 0 0"></DisturbTimeEnd>
            <SelectTitle>알림음 선택</SelectTitle>
            <SelectBox>
                <SelectMenu>기본음</SelectMenu>
                <ChevronDownImage src="asset/chevron-down.svg"/>
            </SelectBox>
            <BrowserTitle>Web 브라우저 알림</BrowserTitle>
            <BrowserCheckContainer>
                <ChromeImage src="asset/chrome.png"/>
                <ChromeName>Chrome</ChromeName>
                <ChromeCheckBox></ChromeCheckBox>
            </BrowserCheckContainer>
            <SaveButton>저장</SaveButton>
            <CancelButton>취소</CancelButton>
        </>
    )
}

export default KeywordSetting;