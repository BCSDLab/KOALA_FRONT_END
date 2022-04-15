import styled from 'styled-components';

export const HashtagContainer = styled.div`
  width: 1092px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.colors.lightgray};
  display: flex;
  align-items: center;
  padding-left: 24px;
`;

export const ImportantContainer = styled.div`
  height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const NormalContainer = styled(ImportantContainer)`
  cursor: pointer;
  margin-bottom: 0px;
`;

export const CheckBox = styled.div`
  min-width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  cursor: pointer;

  ${(props) => {
    if (props.isNormalAlarm || props.isImportantAlarm || props.isVibrationAlarm || props.isSlientAlarm) {
      return `
                background-image:url('/asset/check_black.svg');
                background-color: ${props.theme.colors.silver};
                background-position:center;
            `;
    } else {
      return `
                background-image:none;
            `;
    }
  }}
`;

export const CheckBoxTitle = styled.span`
  min-width: 55px;
  font-size: 14px;
  color: #999999;
  margin-right: 24px;
  cursor: pointer;
`;

export const CheckBoxContent = styled.span`
  min-width: 241px;
  font-size: 11px;
  color: #999999;
`;

export const SettingContainer = styled(HashtagContainer)`
  height: 159px;
  width: calc(100% - 24px);
  display: flex;
  border: 1.5px solid ${(props) => props.theme.colors.yellow};
  flex-direction: column;
`;

export const ModeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0px 32px 0px;
`;

export const SlientMode = styled(CheckBoxTitle)`
  margin-right: 8px;
`;

export const SlientCheckBox = styled(CheckBox)`
  margin-right: 32px;
`;

export const VibrationCheckBox = styled(CheckBox)`
  margin-right: 24px;
`;

export const SettingContent = styled(CheckBoxContent)``;

export const ErrorText = styled.div`
  font-size: 11px;
  text-align: left;
  margin-top: 16px;
  margin-bottom: 96px;
  color: ${(props) => props.theme.colors.yellow};
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AlarmContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AlarmTitle = styled.span`
  margin-bottom: 16px;
`;

export const AlarmType = styled.ul`
  display: flex;
`;

export const Type = styled.li`
  cursor: pointer;
  margin-right: 48px;
  color: ${(props) => {
    if (props.checkId === props.alarmTerm) {
      return `#222222`;
    } else {
      return `#c4c4c4`;
    }
  }};
`;
export const SubmitContainer = styled.div`
  width: 224px;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  width: 80px;
  height: 32px;
  background: #222;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export const CancelButton = styled(EditButton)``;

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 0 24px 0;
  flex-direction: column;
`;
