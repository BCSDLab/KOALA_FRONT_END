import React, { Fragment } from 'react';
import KeywordHeader from '../KeywordHeader';
import { WEEK } from 'constant';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import * as s from './styles';

const SettingKeyword = () => {
  const { isOpen } = useSelector((state) => state.toggle);

  return (
    <SettingKeywordContainer>
      <KeywordHeader title={'키워드 환경설정'} />
      <SettingKeywordContent>
        <ErrorText toggle={isOpen}>※ 해당 기능은 모바일 앱에서만 사용할 수 있습니다.</ErrorText>
        <s.NotifyContainer toggle={isOpen}>
          <s.NotifyCheckBox />
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
          <s.MinusImage src="/asset/Minus.svg" />
          <s.DisturbTimeEnd placeholder="2 4 : 0 0"></s.DisturbTimeEnd>
        </Timer>
      </SettingKeywordContent>
    </SettingKeywordContainer>
  );
};
const Timer = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: calc(424px + 14px);
  height: 48px;
`;

const SettingKeywordContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 129px;
`;

const SettingKeywordContainer = styled.div`
  width: calc(100% - 367px - 273px)
  color: #c4c4c4;
  display: flex;
  align-items; center;

`;
const ErrorText = styled.div`
  font-size: 11px;
  text-align: left;
  width: auto;
  color: ${(props) => props.theme.colors.yellow};
  margin-bottom: 67px;
  padding-left: 8px;
`;

export default SettingKeyword;
