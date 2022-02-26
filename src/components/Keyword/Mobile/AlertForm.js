import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { changeSiteName } from '../utils';
import { patchModifyKeyword, createKeyword } from 'store/modifyKeyword';
import styled from 'styled-components';

const AlertForm = ({
  selectRecommendItem,
  setSelectRecommendItem,
  setRecommendKeyword,
  setSelectRecommendKeyword,
  buttonText,
  keywordName,
}) => {
  const dispatch = useDispatch();
  const { keywordInfo } = useSelector((state) => state.modifyKeyword);
  const navigate = useNavigate();
  const onClickModifyButton = () => {
    setSelectRecommendItem([]);
    if (buttonText == '등록') {
      setRecommendKeyword(undefined);
      setSelectRecommendKeyword(undefined);
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
  };
  return (
    <MobileNoticeForm>
      <NoticeContainer>
        <NoticeHeader>
          <ImportantNotice>중요알림</ImportantNotice>
          <GeneralNotice>일반알림</GeneralNotice>
        </NoticeHeader>
        <NoticeContent>
          <ContentLine>
            <NoticeTitle>무음모드 알림</NoticeTitle>
            <NoticeOption>
              <ToggleImage src="/asset/ToggleOff.svg" />
            </NoticeOption>
          </ContentLine>
          <ContentLine>
            <NoticeTitle>진동모드 알림</NoticeTitle>
            <NoticeOption>
              <ToggleImage src="/asset/ToggleOff.svg" />
            </NoticeOption>
          </ContentLine>
          <ContentLine>
            <NoticeTitle>확인 버튼 누를 때까지 알림</NoticeTitle>
            <NoticeOption>
              <ToggleImage src="/asset/ToggleOff.svg" />
            </NoticeOption>
          </ContentLine>
          <ContentLine>
            <NoticeTitle>알림주기</NoticeTitle>
            <NoticeOption>
              {keywordInfo.alarmCycle ? keywordInfo.alarmCycle : '30'}분
              <DropDownImage src="/asset/chevron-right.svg" />
            </NoticeOption>
          </ContentLine>
        </NoticeContent>
      </NoticeContainer>
      <ErrorText>알림은 앱에서만 설정할 수 있습니다.</ErrorText>
      <ModifyCompleteButton onClick={onClickModifyButton}>완료</ModifyCompleteButton>
    </MobileNoticeForm>
  );
};

export default AlertForm;

const MobileNoticeForm = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
`;
const NoticeContainer = styled.div`
  width: 100%;
  height: 254px;
  border: 1px solid ${(props) => props.theme.colors.yellow};
`;

const NoticeHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;
const HeaderContent = styled.div`
  width: 50%;
  height: 48px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImportantNotice = styled(HeaderContent)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.silver};
`;
const GeneralNotice = styled(HeaderContent)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.silver};
`;

const ContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  margin-bottom: 19px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  text-align: left;
  color: ${(props) => props.theme.colors.silver};
`;
const NoticeContent = styled.div`
  padding: 24px 16px;
`;
const NoticeTitle = styled.div`
  width: 234px;
`;
const NoticeOption = styled.div`
  width: 62px;
`;
const ToggleImage = styled.img`
  width: 48px;
  height: 24px;
  margin-left: 16px;
`;
const DropDownImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  object-fit: contain;
`;
const ErrorText = styled.div`
  font-size: 11px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.yellow};
`;
const ModifyCompleteButton = styled.div`
  position: absolute;
  top: 20.3px;
  right: 24px;
  width: 26px;
  height: 21px;
  font-size: 14px;
  text-align: right;
  color: ${(props) => props.theme.colors.gray};
`;
