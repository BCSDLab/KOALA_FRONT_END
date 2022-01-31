import React, { Fragment } from 'react';
import KeywordHeader from '../KeywordHeader';
import { WEEK } from 'constant';
import * as s from './styles';

const KeywordSetting = () => {
  return (
    <>
      <KeywordHeader title={'키워드 환경설정'} />
      <s.NotifyContainer>
        <s.NotifyCheckBox></s.NotifyCheckBox>
        <s.NotifyCheckBoxTitle>모든 키워드 알람 끄기</s.NotifyCheckBoxTitle>
      </s.NotifyContainer>
      <s.VibrationContaienr>
        <s.VibrationCheckBox></s.VibrationCheckBox>
        <s.VibrationCheckBoxTitle>모든 키워드 진동 끄기</s.VibrationCheckBoxTitle>
        <s.VibrationContent>해당 기능은 모바일 앱에서만 작동합니다.</s.VibrationContent>
      </s.VibrationContaienr>
      <s.DisturbTitle>방해 금지 모드 설정</s.DisturbTitle>
      <s.DisturbContainer>
        {WEEK.map((item) => {
          return (
            <Fragment key={item.id}>
              <s.DisturbCheckBox></s.DisturbCheckBox>
              <span>{item.day}</span>
            </Fragment>
          );
        })}
      </s.DisturbContainer>
      <s.DisturbTimeStart placeholder="0 0 : 0 0"></s.DisturbTimeStart>
      <s.MinusImage src="/asset/minus.svg" />
      <s.DisturbTimeEnd placeholder="2 4 : 0 0"></s.DisturbTimeEnd>
      <s.SelectTitle>알림음 선택</s.SelectTitle>
      <s.SelectBox>
        <s.SelectMenu>기본음</s.SelectMenu>
        <s.ChevronDownImage src="asset/chevron-down.svg" />
      </s.SelectBox>
      <s.BrowserTitle>Web 브라우저 알림</s.BrowserTitle>
      <s.BrowserCheckContainer>
        <s.ChromeImage src="asset/chrome.png" />
        <s.ChromeName>Chrome</s.ChromeName>
        <s.ChromeCheckBox></s.ChromeCheckBox>
      </s.BrowserCheckContainer>
      <s.SaveButton>저장</s.SaveButton>
      <s.CancelButton>취소</s.CancelButton>
    </>
  );
};

export default KeywordSetting;
