import styled from 'styled-components';

export const HashtagContainer = styled.div`
  width: 1092px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.colors.lightgray};
  display: flex;
  align-items: center;
  padding-left: 24px;
  position: absolute;
  left: 588px;
  top: 212px;
`;

export const ImportantContainer = styled.div`
  height: 16px;
  display: flex;
  position: absolute;
  left: ${(props) => (props.toggle ? '590px' : '455px')};
  top: 501px;
  align-items: center;
  cursor: pointer;
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    top: 461px;
  }
`;

export const NormalContainer = styled(ImportantContainer)`
  top: 530px;
  cursor: pointer;
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    top: 490px;
  }
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
  left: ${(props) => (props.toggle ? '590px' : '455px')};
  top: 570px;
  display: flex;
  border: 1.5px solid ${(props) => props.theme.colors.yellow};
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    width: 700px;
    top: 530px;
  }
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
  color: ${(props) => props.theme.colors.yellow};
  position: absolute;
  left: ${(props) => (props.toggle ? '585px' : '453px')};
  top: 736px;
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    top: 696px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
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

export const EditButton = styled.button`
  width: 80px;
  height: 32px;
  background: #222;
  color: #fff;
  position: absolute;
  top: 834px;
  left: ${(props) => (props.toggle ? '1018px' : '883px')};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    left: ${(props) => (props.toggle ? '818px' : '683px')};
    top: 754px;
  }
`;

export const CancelButton = styled(EditButton)`
  left: ${(props) => (props.toggle ? '1142px' : '1007px')};
`;
