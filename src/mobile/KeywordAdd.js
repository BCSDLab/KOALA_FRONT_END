import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import InputKeyword from './KeywordInput';
import { createKeyword } from 'store/modifyKeyword';
import { useDispatch } from 'react-redux';
import { changeSiteName } from 'components/Keyword/utils';

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
  border: ${(props) => (props.isRegisterKeyword ? `1px solid #ffd25d` : '1px solid #eee')};
  position: relative;
`;

const AlarmSearchContainer = styled.div`
  height: 40px;
  border: ${(props) => (props.checkAlarm ? '1px solid #ffd25d' : '1px solid #eee')};
  margin-top: 24px;
  position: relative;
`;

const HashImage = styled.img`
  margin-top: 10px;
  margin: 10px 16px 0px 16px;
  margin-right: 16px;
`;

const KeywordInput = styled.input`
  width: 300px;
  background-color: #fff;
  height: 18px;
  border: none;
`;

const SearchImage = styled.img`
  margin-top: 10px;
  margin: 10px 16px 0px 16px;
  margin-right: 16px;
`;

const SearchInput = styled.input`
  width: 300px;
  background-color: #fff;
  height: 18px;
  border: none;
`;

const AlarmContainer = styled.div`
  width: 360px;
  height: ${(props) => (props.isNormalAlarm ? '163px' : '254px')};
  margin-top: 20px;
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
  color: ${(props) => (props.isNormalAlarm ? '#222' : '#c4c4c4')};
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

const AlarmList = styled.ul`
  width: 360px;
  height: ${(props) => (props.isNormalAlarm ? '180px' : '80px')};
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const AlarmItem = styled.li`
  width: 343px;
  min-height: 50px;
  background-color: #eee;
  display: flex;
  padding-left: 16px;
  position: relative;
  align-items: center;
  margin-top: 10px;
`;

const DeleteIcon = styled.img`
  position: absolute;
  right: 8px;
  top: 17px;
`;

const RegisteredKeyword = styled.span`
  color: #ffd25d;
  height: 3px;
`;

const WarningAlarm = styled(RegisteredKeyword)``;

const RegisteredIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const KeywordAdd = () => {
  const [isNormalAlarm, setIsNormalAlarm] = useState(false);
  const [isKeywordInput, setIsKeywordInput] = useState(false);
  const [isAlarmInput, setIsAlarmInput] = useState(false);
  const [isSilentMode, setIsSilentMode] = useState(false);
  const [isVibrationMode, setIsVibrationMode] = useState(false);
  const [selectedAlarmList, setSelectedAlarmList] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [isRegisterKeyword, setIsRegisterKeyword] = useState(false);

  const [alarm, setAlarm] = useState('');

  const dispatch = useDispatch();

  const onClickNormalAlarm = () => {
    setIsNormalAlarm(true);
  };

  const onClickImportantAlarm = () => {
    setIsNormalAlarm(false);
  };

  const onClickKeywordInput = () => {
    setIsKeywordInput(true);
    setIsAlarmInput(false);
  };

  const onClickAlarmInput = () => {
    setIsAlarmInput(true);
    setIsKeywordInput(false);
  };

  const onClickDeleteIcon = (name) => {
    const list = [];

    selectedAlarmList.forEach((item) => {
      if (item !== name) {
        list.push(item);
      }
    });

    setSelectedAlarmList(list);
  };

  const onClickSlientMode = () => {
    setIsSilentMode((prev) => !prev);
    setIsVibrationMode(false);
  };

  const onClickVibrationMode = () => {
    setIsVibrationMode((prev) => !prev);
    setIsSilentMode(false);
  };

  const onClickCompeleteButton = useCallback(() => {
    const data = {
      alarmCycle: 15,
      alarmMode: isNormalAlarm ? 1 : 0,
      isImportant: 0,
      silentMode: isSilentMode ? 1 : 0,
      untilPressOkButton: 0,
      vibrationMode: isVibrationMode ? 1 : 0,
      name: keyword,
      siteList: selectedAlarmList.map((item) => changeSiteName(item)),
    };

    dispatch(createKeyword(data));

    setIsNormalAlarm(false);
    setIsKeywordInput(false);
    setIsAlarmInput(false);
    setSelectedAlarmList([]);
    setKeyword('');
    setAlarm('');
  }, [selectedAlarmList, keyword, isNormalAlarm]);

  return (
    <>
      {!isKeywordInput && !isAlarmInput && (
        <>
          <Container>
            <Header>
              <ChovernLeft src="/asset/chevron-left.svg" />
              <Title>키워드 추가하기</Title>
              <Compelete onClick={onClickCompeleteButton}>완료</Compelete>
            </Header>
            <InputContainer>
              <KeywordInputContainer onClick={onClickKeywordInput} isRegisterKeyword={isRegisterKeyword}>
                <HashImage src="/asset/Hashtagblack.svg" />
                <KeywordInput
                  placeholder="키워드 입력"
                  disabled
                  value={keyword.length !== 0 ? keyword : ''}
                ></KeywordInput>
                {isRegisterKeyword && <RegisteredIcon src="/asset/exclamation.svg" />}
              </KeywordInputContainer>
              {isRegisterKeyword && <RegisteredKeyword>이미 등록된 키워드 입니다.</RegisteredKeyword>}
              <AlarmSearchContainer
                onClick={onClickAlarmInput}
                checkAlarm={selectedAlarmList && selectedAlarmList.length === 0}
              >
                <SearchImage src="/asset/searchblack.svg" />
                <SearchInput
                  placeholder="알람받을 대상 입력"
                  disabled
                  value={alarm.length !== 0 ? alarm : ''}
                ></SearchInput>
                {selectedAlarmList && selectedAlarmList.length === 0 && <RegisteredIcon src="/asset/exclamation.svg" />}
              </AlarmSearchContainer>
              {selectedAlarmList && selectedAlarmList.length === 0 && (
                <WarningAlarm>알림받을 대상을 반드시 선택해 주세요.</WarningAlarm>
              )}
            </InputContainer>

            {selectedAlarmList && (
              <AlarmList isNormalAlarm={isNormalAlarm}>
                {selectedAlarmList !== '' &&
                  selectedAlarmList.map((item, index) => {
                    return (
                      <AlarmItem key={index}>
                        <span>{item}</span>
                        <DeleteIcon onClick={() => onClickDeleteIcon(item)} src="/asset/x.svg" />
                      </AlarmItem>
                    );
                  })}
              </AlarmList>
            )}

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
                  <FirstButton
                    onClick={onClickSlientMode}
                    src={isSilentMode ? '/asset/ToggleOn.svg' : '/asset/ToggleOff.svg'}
                  />
                  <SecondButton
                    onClick={onClickVibrationMode}
                    src={isVibrationMode ? '/asset/ToggleOn.svg' : '/asset/ToggleOff.svg'}
                  />
                </>
              )}
            </AlarmContainer>
          </Container>
        </>
      )}
      {(isKeywordInput || isAlarmInput) && (
        <>
          <InputKeyword
            isKeywordInput={isKeywordInput}
            isAlarmInput={isAlarmInput}
            setIsAlarmInput={setIsAlarmInput}
            setIsKeywordInput={setIsKeywordInput}
            setSelectedAlarmList={setSelectedAlarmList}
            selectedAlarmList={selectedAlarmList}
            setKeyword={setKeyword}
            setAlarm={setAlarm}
            alarm={alarm}
            keyword={keyword}
            setIsRegisterKeyword={setIsRegisterKeyword}
          />
        </>
      )}
    </>
  );
};

export default KeywordAdd;
