import React, { Fragment } from 'react';
import KeywordHeader from '../KeywordHeader';
import { WEEK } from 'constant';
import { useSelector } from 'react-redux';
import * as s from './styles';

const SettingKeyword = () => {
  const { isOpen } = useSelector((state) => state.toggle);

  return (
    <>
      <KeywordHeader title={'키워드 환경설정'} />
      <s.NotifyContainer toggle={isOpen}>
        <s.NotifyCheckBox></s.NotifyCheckBox>
        <s.NotifyCheckBoxTitle>모든 키워드 알람 끄기</s.NotifyCheckBoxTitle>
      </s.NotifyContainer>
      <s.VibrationContaienr toggle={isOpen}>
        <s.VibrationCheckBox></s.VibrationCheckBox>
        <s.VibrationCheckBoxTitle>모든 키워드 진동 끄기</s.VibrationCheckBoxTitle>
        <s.VibrationContent>해당 기능은 모바일 앱에서만 작동합니다.</s.VibrationContent>
      </s.VibrationContaienr>
      <s.DisturbTitle toggle={isOpen}>방해 금지 모드 설정</s.DisturbTitle>
      <s.DisturbContainer toggle={isOpen}>
        {WEEK.map((item) => {
          return (
            <Fragment key={item.id}>
              <s.DisturbCheckBox></s.DisturbCheckBox>
              <span>{item.day}</span>
            </Fragment>
          );
        })}
      </s.DisturbContainer>
      <s.DisturbTimeStart toggle={isOpen} placeholder="0 0 : 0 0"></s.DisturbTimeStart>
      <s.MinusImage toggle={isOpen} src="/asset/minus.svg" />
      <s.DisturbTimeEnd toggle={isOpen} placeholder="2 4 : 0 0"></s.DisturbTimeEnd>
      <s.SelectTitle toggle={isOpen}>알림음 선택</s.SelectTitle>
      <s.SelectBox toggle={isOpen}>
        <s.SelectMenu>기본음</s.SelectMenu>
        <s.ChevronDownImage src="/asset/chevron-down.svg" />
      </s.SelectBox>
      <s.BrowserTitle toggle={isOpen}>Web 브라우저 알림</s.BrowserTitle>
      <s.BrowserCheckContainer toggle={isOpen}>
        <s.ChromeImage src="/asset/chrome.png" />
        <s.ChromeName>Chrome</s.ChromeName>
        <s.ChromeCheckBox></s.ChromeCheckBox>
      </s.BrowserCheckContainer>
      <s.SaveButton toggle={isOpen}>저장</s.SaveButton>
      <s.CancelButton toggle={isOpen}>취소</s.CancelButton>
    </>
  );
};

export default SettingKeyword;
