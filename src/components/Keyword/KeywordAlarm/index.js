import React, { useState, useCallback } from 'react';
import { changeSiteName } from '../utils';
import { ALARM_TERM } from 'constant';
import { useNavigate } from 'react-router';
import { patchModifyKeyword, createKeyword } from 'store/modifyKeyword';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as S from './styles';

const KeywordAlarm = ({
  selectRecommendItem,
  setSelectRecommendItem,
  setRecommendKeyword,
  setSelectRecommendKeyword,
  buttonText,
  keywordName,
  isRegisterKeyword,
  setIsNullKeywordError,
  setIsNullSiteError,
}) => {
  const [isImportantAlarm, setIsImportantAlarm] = useState(false);
  const [isNormalAlarm, setIsNormalAlarm] = useState(true);
  const [isSlientAlarm, setIsSlientAlarm] = useState(true);
  const [isVibrationAlarm, setIsVibrationAlarm] = useState(false);
  const [alarmTerm, setAlarmTerm] = useState(null);
  const { keywordInfo } = useSelector((state) => state.modifyKeyword);
  const { isOpen } = useSelector((state) => state.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickImportantAlarm = () => {
    setIsImportantAlarm((prev) => !prev);
    setIsNormalAlarm(false);
  };

  const onClickNormalAlarm = () => {
    setIsNormalAlarm((prev) => !prev);
    setIsImportantAlarm(false);
  };

  const onClickAlarmTerm = (id) => {
    setAlarmTerm(id);
  };

  const onClickCancle = () => {
    navigate(-1);
    setSelectRecommendItem([]);
  };

  const onClickModifyButton = useCallback(() => {
    if (selectRecommendItem.length === 0) {
      setIsNullSiteError(true);
      return;
    } else if (keywordName === false) {
      setIsNullKeywordError(true);
      return;
    }

    if (isRegisterKeyword) {
      alert('이미 등록된 키워드 입니다');
      return;
    }

    setIsNormalAlarm(false);
    setIsImportantAlarm(false);
    setIsSlientAlarm(false);
    setIsVibrationAlarm(false);
    setAlarmTerm(false);
    setSelectRecommendItem([]);

    if (buttonText == '등록') {
      setRecommendKeyword('');
      setSelectRecommendKeyword('');
    }

    if (buttonText === '수정') {
      const data = {
        alarmCycle: keywordInfo.alarmCycle,
        isImportant: keywordInfo.isImportant,
        name: keywordName,
        silentMode: keywordInfo.silentMode,
        siteList: selectRecommendItem.map((item) => changeSiteName(item)),
        untilPressOkButton: keywordInfo.untilPressOkButton,
        vibrationMode: keywordInfo.vibrationMode,
      };
      dispatch(patchModifyKeyword(data.name, data));
      navigate(-1);
    } else {
      const data = {
        alarmCycle: 30,
        isImportant: 1,
        name: keywordName,
        silentMode: 0,
        siteList: selectRecommendItem.map((item) => changeSiteName(item)),
        untilPressOkButton: 0,
        vibrationMode: 1,
      };
      dispatch(createKeyword(data));
      navigate(-1);
    }
  }, [alarmTerm, isNormalAlarm, isImportantAlarm, selectRecommendItem]);

  return (
    <AlarmFormContainer>
      <S.CheckBoxContainer>
        <S.ImportantContainer toggle={isOpen} onClick={onClickImportantAlarm}>
          <S.CheckBox isImportantAlarm={isImportantAlarm}></S.CheckBox>
          <S.CheckBoxTitle>중요 알림</S.CheckBoxTitle>
          <S.CheckBoxContent>중요알림 기능은 모바일 앱에서만 확인할 수 있습니다.</S.CheckBoxContent>
        </S.ImportantContainer>
        <S.NormalContainer toggle={isOpen} onClick={onClickNormalAlarm}>
          <S.CheckBox isNormalAlarm={isNormalAlarm}></S.CheckBox>
          <S.CheckBoxTitle>일반 알림</S.CheckBoxTitle>
        </S.NormalContainer>
      </S.CheckBoxContainer>

      <S.BottomContainer>
        <S.SettingContainer toggle={isOpen}>
          <S.ModeContainer>
            <S.SlientMode>무음모드에도 알림</S.SlientMode>
            <S.SlientCheckBox isSlientAlarm={isSlientAlarm}></S.SlientCheckBox>
            <S.SlientMode>진동 알림</S.SlientMode>
            <S.VibrationCheckBox isVibrationAlarm={isVibrationAlarm}></S.VibrationCheckBox>
          </S.ModeContainer>
          <S.AlarmContainer>
            <S.AlarmTitle>알람주기</S.AlarmTitle>
            <S.AlarmType>
              {ALARM_TERM.map((item) => {
                return (
                  <S.Type
                    onClick={() => onClickAlarmTerm(item.id)}
                    alarmTerm={alarmTerm}
                    checkId={item.id}
                    key={item.id}
                  >
                    {item.time}
                  </S.Type>
                );
              })}
            </S.AlarmType>
          </S.AlarmContainer>
        </S.SettingContainer>
        <S.ErrorText toggle={isOpen}>※ 알림 기능은 모바일 앱에서만 이용하실 수 있습니다.</S.ErrorText>
      </S.BottomContainer>
      <S.SubmitContainer>
        <S.EditButton toggle={isOpen} onClick={onClickModifyButton}>
          {buttonText}
        </S.EditButton>
        <S.CancelButton onClick={onClickCancle} toggle={isOpen}>
          취소
        </S.CancelButton>
      </S.SubmitContainer>
    </AlarmFormContainer>
  );
};

export default KeywordAlarm;

const AlarmFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.silver};
`;
