import React, { useState, useCallback } from 'react';
import { changeAlarmTerm, changeSiteName } from '../utils';
import { ALARM_TERM } from 'constant';
import { patchModifyKeyword, createKeyword } from 'store/modifyKeyword';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as S from './styles';

const KeywordAlarm = ({
  selectRecommendItem,
  setSelectRecommendItem,
  setRecommendKeyword,
  setSelectRecommendKeyword,
  buttonText,
  keywordName,
}) => {
  const [isNormalAlarm, setIsNormalAlarm] = useState(false);
  const [isImportantAlarm, setIsImportantAlarm] = useState(false);
  const [isSlientAlarm, setIsSlientAlarm] = useState(false);
  const [isVibrationAlarm, setIsVibrationAlarm] = useState(false);
  const [alarmTerm, setAlarmTerm] = useState(null);

  const { isOpen } = useSelector((state) => state.toggle);

  const dispatch = useDispatch();

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

  const onClickModifyButton = useCallback(() => {
    setIsNormalAlarm(false);
    setIsImportantAlarm(false);
    setIsSlientAlarm(false);
    setIsVibrationAlarm(false);
    setAlarmTerm(false);
    setSelectRecommendItem([]);
    if (buttonText == '등록') {
      setRecommendKeyword(undefined);
      setSelectRecommendKeyword(undefined);
    }

    const data = {
      alarmCycle: changeAlarmTerm(alarmTerm),
      alarmMode: isNormalAlarm ? 1 : 0,
      isImportant: isImportantAlarm ? 1 : 0,
      name: keywordName,
      siteList: selectRecommendItem.map((item) => changeSiteName(item)),
    };

    if (buttonText === '수정') {
      dispatch(patchModifyKeyword(data.name, data));
    } else {
      dispatch(createKeyword(data));
    }
  }, [alarmTerm, isNormalAlarm, isImportantAlarm, selectRecommendItem]);

  return (
    <>
      <S.ImportantContainer toggle={isOpen} onClick={onClickImportantAlarm}>
        <S.CheckBox isImportantAlarm={isImportantAlarm}></S.CheckBox>
        <S.CheckBoxTitle>중요 알림</S.CheckBoxTitle>
        <S.CheckBoxContent>중요알림 기능은 모바일 앱에서만 확인할 수 있습니다.</S.CheckBoxContent>
      </S.ImportantContainer>
      <S.NormalContainer toggle={isOpen} onClick={onClickNormalAlarm}>
        <S.CheckBox isNormalAlarm={isNormalAlarm}></S.CheckBox>
        <S.CheckBoxTitle>일반 알림</S.CheckBoxTitle>
      </S.NormalContainer>
      <S.SettingContainer toggle={isOpen}>
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
      <S.EditButton toggle={isOpen} onClick={onClickModifyButton}>
        {buttonText}
      </S.EditButton>
      <S.CancelButton toggle={isOpen}>취소</S.CancelButton>
    </>
  );
};

export default KeywordAlarm;
