import React from 'react';
import styled from 'styled-components';

const AlertForm = () => {
  return (
    <MobileAlertForm>
      <AlertContainer>
        <AlertHeader>
          <ImportantAlert>중요알림</ImportantAlert>
          <GeneralAlert>일반알림</GeneralAlert>
        </AlertHeader>
        <AlarmInner>
          <AlramContentLine>
            <AlarmInnerMain>무음모드 알림</AlarmInnerMain>
            <AlarmInnerOption>
              <ToggleImage src="/asset/ToggleOff.svg" />
            </AlarmInnerOption>
          </AlramContentLine>
          <AlramContentLine>
            <AlarmInnerMain>진동모드 알림</AlarmInnerMain>
            <AlarmInnerOption>
              <ToggleImage src="/asset/ToggleOff.svg" />
            </AlarmInnerOption>
          </AlramContentLine>
          <AlramContentLine>
            <AlarmInnerMain>확인 버튼 누를 때까지 알림</AlarmInnerMain>
            <AlarmInnerOption>
              <ToggleImage src="/asset/ToggleOff.svg" />
            </AlarmInnerOption>
          </AlramContentLine>
          <AlramContentLine>
            <AlarmInnerMain>알림주기</AlarmInnerMain>
            <AlarmInnerOption>
              0시간
              <ArrowImage src="/asset/chevron-right.svg" />
            </AlarmInnerOption>
          </AlramContentLine>
        </AlarmInner>
      </AlertContainer>
      <ErrorText>알림은 앱에서만 설정할 수 있습니다.</ErrorText>
    </MobileAlertForm>
  );
};

export default AlertForm;

const MobileAlertForm = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
`;
const AlertContainer = styled.div`
  width: 100%;
  height: 254px;
  border: 1px solid ${(props) => props.theme.colors.yellow};
`;

const AlertHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;
const AlertHeaderContent = styled.div`
  width: 50%;
  height: 48px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImportantAlert = styled(AlertHeaderContent)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.silver};
`;
const GeneralAlert = styled(AlertHeaderContent)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.silver};
`;

const AlramContentLine = styled.div`
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
const AlarmInner = styled.div`
  padding: 24px 16px;
`;
const AlarmInnerMain = styled.div`
  width: 234px;
`;
const AlarmInnerOption = styled.div`
  width: 62px;
`;
const ToggleImage = styled.img`
  width: 48px;
  height: 24px;
  margin-left: 16px;
`;
const ArrowImage = styled.img`
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
