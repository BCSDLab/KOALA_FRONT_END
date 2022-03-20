import React, { Fragment } from 'react';
import KeywordHeader from '../KeywordHeader';
import { WEEK } from 'constant';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import * as s from './styles';

const SettingKeyword = () => {
  const { isOpen } = useSelector((state) => state.toggle);

  return (
    <>
      <KeywordHeader title={'키워드 환경설정'} />
      <ErrorText toggle={isOpen}>※ 해당 기능은 모바일 앱에서만 사용할 수 있습니다.</ErrorText>
      <SettingKeywordContent>
        <s.NotifyContainer toggle={isOpen}>
          <s.NotifyCheckBox></s.NotifyCheckBox>
          <s.NotifyCheckBoxTitle>모든 키워드 알람 끄기</s.NotifyCheckBoxTitle>
        </s.NotifyContainer>
        <s.VibrationContaienr toggle={isOpen}>
          <s.VibrationCheckBox></s.VibrationCheckBox>
          <s.VibrationCheckBoxTitle>모든 키워드 진동 끄기</s.VibrationCheckBoxTitle>
        </s.VibrationContaienr>
        <s.DisturbTitle toggle={isOpen}>방해 금지 모드 설정</s.DisturbTitle>
        <s.DisturbContainer toggle={isOpen}>
          {WEEK.map((item) => {
            return (
              <Fragment key={item.id}>
                <s.DisturbCheckBox></s.DisturbCheckBox>
                <s.DisturbDay>{item.day}</s.DisturbDay>
              </Fragment>
            );
          })}
        </s.DisturbContainer>
        <Timer toggle={isOpen}>
          <s.DisturbTimeStart placeholder="0 0 : 0 0"></s.DisturbTimeStart>
          <s.MinusImage src="/asset/minus.svg" />
          <s.DisturbTimeEnd placeholder="2 4 : 0 0"></s.DisturbTimeEnd>
        </Timer>
      </SettingKeywordContent>
    </>
  );
};
const Timer = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: calc(424px + 14px);
  height: 48px;
  position: absolute;
  left: ${(props) => (props.toggle ? '596px' : '461px')};
  top: 470px;
`;

const SettingKeywordContent = styled.div`
  color: #c4c4c4;
`;

const ErrorText = styled.div`
  font-size: 11px;
  text-align: left;
  position: absolute;
  color: ${(props) => props.theme.colors.yellow};
  top: 129px;
  left: ${(props) => (props.toggle ? '616px' : '481px')};
`;

export default SettingKeyword;
