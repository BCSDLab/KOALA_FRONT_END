import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ALARM_TERM } from 'constant';
import { AlarmContext } from 'context/KeywordAlarmContext';
import * as S from './styles';

const KeywordAlarm = () => {
  const [isNormalAlarm, setIsNormalAlarm] = useState(false);
  const [isImportantAlarm, setIsImportantAlarm] = useState(false);
  const [isSlientAlarm, setIsSlientAlarm] = useState(false);
  const [isVibrationAlarm, setIsVibrationAlarm] = useState(false);
  const [alarmTerm, setAlarmTerm] = useState(null);

  const onClickImportantAlarm = () => {
    setIsImportantAlarm((prev) => !prev);
    setIsNormalAlarm(false);
  };

  const onClickNormalAlarm = () => {
    setIsNormalAlarm((prev) => !prev);
    setIsImportantAlarm(false);
  };

  const onClickSlientAlarm = () => {
    setIsSlientAlarm((prev) => !prev);
    setIsVibrationAlarm(false);
  };

  const onClickVibrationAlarm = () => {
    setIsVibrationAlarm((prev) => !prev);
    setIsSlientAlarm(false);
  };

  const onClickAlarmTerm = (id) => {
    setAlarmTerm(id);
  };

  return (
    <AlarmContext.Provider
      value={
        (isNormalAlarm,
        isImportantAlarm,
        isSlientAlarm,
        isVibrationAlarm,
        alarmTerm,
        setIsImportantAlarm,
        setIsNormalAlarm,
        setIsSlientAlarm,
        setIsVibrationAlarm,
        setAlarmTerm)
      }
    >
      <S.ImportantContainer onClick={onClickImportantAlarm}>
        <S.CheckBox isImportantAlarm={isImportantAlarm}></S.CheckBox>
        <S.CheckBoxTitle>중요 알림</S.CheckBoxTitle>
        <S.CheckBoxContent>중요알림 기능은 모바일 앱에서만 확인할 수 있습니다.</S.CheckBoxContent>
      </S.ImportantContainer>
      <S.NormalContainer onClick={onClickNormalAlarm}>
        <S.CheckBox isNormalAlarm={isNormalAlarm}></S.CheckBox>
        <S.CheckBoxTitle>일반 알림</S.CheckBoxTitle>
      </S.NormalContainer>
      <S.SettingContainer>
        <S.ModeContainer>
          <S.SlientMode onClick={onClickSlientAlarm}>무음모드에도 알림</S.SlientMode>
          <S.SlientCheckBox onClick={onClickSlientAlarm} isSlientAlarm={isSlientAlarm}></S.SlientCheckBox>
          <S.SlientMode onClick={onClickVibrationAlarm}>진동 알림</S.SlientMode>
          <S.VibrationCheckBox
            onClick={onClickVibrationAlarm}
            isVibrationAlarm={isVibrationAlarm}
          ></S.VibrationCheckBox>
          <S.SettingContent>무음모드에도 알림,진동 알림 기능은 모바일 앱에서만 적용이 가능합니다.</S.SettingContent>
        </S.ModeContainer>
        <S.AlarmContainer>
          <S.AlarmTitle>알람주기</S.AlarmTitle>
          <S.AlarmType>
            {ALARM_TERM.map((item) => {
              return (
                <S.Type onClick={() => onClickAlarmTerm(item.id)} alarmTerm={alarmTerm} checkId={item.id} key={item.id}>
                  {item.time}
                </S.Type>
              );
            })}
          </S.AlarmType>
        </S.AlarmContainer>
      </S.SettingContainer>
    </AlarmContext.Provider>
  );
};

export default KeywordAlarm;
