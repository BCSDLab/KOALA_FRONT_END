import React from 'react';
import { useContext, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeAlarmTerm, changeSiteName } from '../utils';
import { patchModifyKeyword } from 'store/modifyKeyword';
import { AlarmContext } from 'context/KeywordAlarmContext';
import * as S from './styles';

const KeywordSubmit = () => {
  const dispatch = useDispatch();

  const {
    isNormalAlarm,
    isImportantAlarm,
    alarmTerm,
    selectRecommendItem,
    setIsNormalAlarm,
    setIsImportantAlarm,
    setIsSlientAlarm,
    setIsVibrationAlarm,
    setAlarmTerm,
    setSelectRecommendItem,
  } = useContext(AlarmContext);

  const onClickModifyButton = useCallback(() => {
    const data = {
      alarmCycle: changeAlarmTerm(alarmTerm),
      alarmMode: isNormalAlarm ? 1 : 0,
      isImportant: isImportantAlarm ? 1 : 0,
      name: '키워드',
      siteList: selectRecommendItem.map((item) => changeSiteName(item)),
    };

    dispatch(patchModifyKeyword(data.name, data));

    setIsNormalAlarm(false);
    setIsImportantAlarm(false);
    setIsSlientAlarm(false);
    setIsVibrationAlarm(false);
    setAlarmTerm(false);
    setSelectRecommendItem([]);
  }, [alarmTerm, isNormalAlarm, isImportantAlarm, selectRecommendItem]);

  return (
    <>
      <S.EditButton onClick={onClickModifyButton}>수정</S.EditButton>
      <S.CancelButton>취소</S.CancelButton>
    </>
  );
};

export default KeywordSubmit;
