import React, { useState } from 'react';
import styled from 'styled-components';
import InputKeyword from './KeywordInput';

const Container = styled.div`
  width: 360px;
  height: 640px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
  height: 24px;
  line-height: 24px;
  margin-top: 56px;
  padding: 0px 24px 12px 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
`;
const ChovernLeft = styled.img`
  min-width: 24px;
  hegiht: auto;
`;
const Title = styled.span`
  font-size: 16px;
`;
const Compelete = styled.span`
  color: #999;
  font-size: 16px;
  maring-right: 24px;
`;

const InputContainer = styled.div`
  width: 360px;
  height: 108px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-left: 16px;
`;

const KeywordInputContainer = styled.div`
  height: 40px;
  border: 1px solid #eee;
`;

const AlarmSearchContainer = styled.div`
  height: 40px;
  border: 1px solid #eee;
  margin-top: 24px;
`;

const HashImage = styled.img`
  margin-top: 10px;
  margin: 10px 16px 0px 16px;
  margin-right: 16px;
`;

const KeywordInput = styled.input`
  height: 18px;
  border: none;
`;

const SearchImage = styled.img`
  margin-top: 10px;
  margin: 10px 16px 0px 16px;
  margin-right: 16px;
`;

const SearchInput = styled.input`
  height: 18px;
  border: none;
`;

const AlarmContainer = styled.div`
  width: 360px;
  height: ${(props) => (props.isNormalAlarm ? '163px' : '254px')};
  margin-top: 32px;
  margin-left: 16px;
  position: relative;
  border: 1px solid ${(props) => (props.isNormalAlarm ? '#eee' : '#ffd25d')};
`;

const ImportantAlarm = styled.div`
  width: 180px;
  height: 48px;
  background-color: ${(props) => (props.isNormalAlarm ? 'none' : '#c4c4c4')};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const ImportantTtitle = styled.span`
  color: ${(props) => (props.isNormalAlarm ? '#c4c4c4' : '#fff')};
`;

const NormalTitle = styled.span`
  color: #c4c4c4;
`;

const NormalAlarm = styled.div`
  width: 180px;
  height: 48px;
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  background-color: ${(props) => (props.isNormalAlarm ? '#222' : '')};
`;

const SlientMode = styled.span`
  font-size: 16px;
  color: #c4c4c4;
  position: absolute;
  top: 72px;
  left: 16px;
`;
const Vibration = styled(SlientMode)`
  top: 117px;
`;
const CheckAlarm = styled(SlientMode)`
  top: 162px;
`;
const AlarmCycle = styled(SlientMode)`
  top: 207px;
`;

const FirstButton = styled.img`
  position: absolute;
  left: 300px;
  top: 72px;
`;

const SecondButton = styled(FirstButton)`
  position: absolute;
  left: 300px;
  top: 117px;
`;
const ThirdButton = styled(FirstButton)`
  position: absolute;
  left: 300px;
  top: 162px;
`;

const AlarmTime = styled.span`
  font-size: 14px;
  color: #c4c4c4;
  position: absolute;
  bottom: 24px;
  right: 44px;
`;

const AlarmChevron = styled.img`
  position: absolute;
  right: 16px;
  bottom: 24px;
`;

const Message = styled.span`
  font-size: 11px;
  color: #ffd25d;
  position: absolute;
  left: 0px;
  bottom: -20px;
`;

const KeywordAdd = () => {
  const [isNormalAlarm, setIsNormalAlarm] = useState(false);
  const [isKeywordInput, setIsKeywordInput] = useState(false);
  const [keyword, setKeyword] = useState('');

  const onClickNormalAlarm = () => {
    setIsNormalAlarm(true);
  };

  const onClickImportantAlarm = () => {
    setIsNormalAlarm(false);
  };

  const onClickKeywordInput = () => {
    setIsKeywordInput(true);
  };

  return (
    <>
      {!isKeywordInput ? (
        <>
          <Container>
            <Header>
              <ChovernLeft src="/asset/chevron-left.svg" />
              <Title>키워드 추가하기</Title>
              <Compelete>완료</Compelete>
            </Header>
            <InputContainer>
              <KeywordInputContainer onClick={onClickKeywordInput}>
                <HashImage src="/asset/Hashtagblack.svg" />
                <KeywordInput
                  placeholder="키워드 입력"
                  disabled
                  value={keyword.length !== 0 ? keyword : ''}
                ></KeywordInput>
              </KeywordInputContainer>
              <AlarmSearchContainer>
                <SearchImage src="/asset/searchblack.svg" />
                <SearchInput placeholder="알람받을 대상 입력" disabled></SearchInput>
              </AlarmSearchContainer>
            </InputContainer>

            <AlarmContainer isNormalAlarm={isNormalAlarm}>
              <ImportantAlarm onClick={onClickImportantAlarm} isNormalAlarm={isNormalAlarm}>
                <ImportantTtitle isNormalAlarm={isNormalAlarm}>중요알림</ImportantTtitle>
              </ImportantAlarm>
              <NormalAlarm onClick={onClickNormalAlarm} isNormalAlarm={isNormalAlarm}>
                <NormalTitle>일반알림</NormalTitle>
              </NormalAlarm>
              {!isNormalAlarm ? (
                <>
                  <SlientMode>무음모드 알림</SlientMode>
                  <Vibration>진동 알림</Vibration>
                  <CheckAlarm>확인 버튼 누를 때 까지 알림</CheckAlarm>
                  <AlarmCycle>알림 주기</AlarmCycle>
                  <FirstButton src="/asset/ToggleOff.svg" />
                  <SecondButton src="/asset/ToggleOff.svg" />
                  <ThirdButton src="/asset/ToggleOff.svg" />
                  <AlarmTime>0시간</AlarmTime>
                  <AlarmChevron src="/asset/chevron-right.svg" />
                  <Message>중요알림은 앱에서만 이용하실 수 있습니다.</Message>
                </>
              ) : (
                <>
                  <SlientMode isNormalAlarm={isNormalAlarm}>무음모드 알림</SlientMode>
                  <Vibration isNormalAlarm={isNormalAlarm}>진동 알림</Vibration>
                  <FirstButton src="/asset/ToggleOff.svg" />
                  <SecondButton src="/asset/ToggleOff.svg" />
                </>
              )}
            </AlarmContainer>
          </Container>
        </>
      ) : (
        <InputKeyword setIsKeywordInput={setIsKeywordInput} setKeyword={setKeyword} keyword={keyword} />
      )}
    </>
  );
};

export default KeywordAdd;
