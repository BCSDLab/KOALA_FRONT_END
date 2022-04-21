import styled from 'styled-components';

export const ModifyKeywordContent = styled.div`
  padding-left: 100px;
  width: calc(100% - 100px + 26px);
  position: relative;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: calc(100% - 32px);
    height: calc(100% - 61px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 85px;
    padding: 0 16px;
  }
`;

export const HashtagContainer = styled.div`
  width: calc(100% - 26px);
  height: 48px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  padding-left: 24px;
  margin-bottom: 16px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    position: static;
    width: calc(100% - 16px);
    padding-left: 16px;
    height: 40px;
    margin-bottom: 16px;
  }
`;

export const HashtageImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    margin-right: 19px;
  }
`;

export const InputKeyword = styled.div`
  width: 100%;
  border: none;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
  }
`;

export const SearchContainer = styled(HashtagContainer)`
  width: calc(100% - 24px);

  ${(props) => {
    if (!props.show) {
      return `
                border:1px solid ${props.theme.colors.darkgray};
                border-bottom:none;
            `;
    } else {
      props.alreadyRegister && `border:1.5px solid ${props.theme.colors.yellow};`;
    }
  }}
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: calc(100% - 16px);
    top: 0;
    ${(props) => {
      if (!props.show) {
        return `
                border:1px solid ${props.theme.colors.darkgray};
                border-bottom:none;
            `;
      } else {
        props.alreadyRegister && `border:1.5px solid ${props.theme.colors.yellow};`;
      }
    }}
    margin-bottom: 0;
  }
`;

export const RecommendItem = styled.li`
  width: 100%;
  height: 37px;
  padding-left: 37px;
  line-height: 37px;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightgray};
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: calc(100% - 16px);
    padding-left: 16px;
    background-color: ${(props) => props.theme.colors.white};
    margin-bottom: 8px;
  }
`;

export const RecommendContainer = styled.ul`
  padding-left: none;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.darkgray};
  border-top: none;
  background-color: white;
  z-index: 1;
  display: ${(props) => {
    return props.show ? 'none' : 'block';
  }};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    position: static;
    display: ${(props) => {
      return props.show ? 'none' : 'block';
    }};
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const AlreadyRegisterMessage = styled.span`
  color: #ffd25d;
  height: 15px;
  font-size: 11px;
  display: ${(props) => (props.alreadyRegister ? 'block' : 'none')};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const SearchImage = styled(HashtageImage)``;

export const InputSite = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 0;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const SiteContainer = styled(HashtagContainer)`
  height: 117px;
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.lightgray};
  padding: 10px 12px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    background-color: ${(props) => props.theme.colors.white};
    width: 100%;
    overflow: hidden;
    height: auto;
    padding: 0;
    border: 0;
    border-top: 8px;
  }
`;

export const SiteList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    display: flex;
    flex-direction: column;
  }
`;

export const SiteItem = styled.li`
  height: 21px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: calc(100% - 24px);
    padding-left: 16px;
    padding-right: 8px;
    margin-top: 8px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.lightgray};
  }
`;

export const SiteName = styled.span`
  margin-right: 4px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 94%;
    height: calc(40px - 22px);
    font-family: NotoSansCJKKR;
    margin: 0;
    font-size: 12px;
    text-align: left;
    padding: 11px 0;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 36px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }
`;

export const XImage = styled.img``;

export const ImportantContainer = styled.div`
  height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const NormalContainer = styled(ImportantContainer)`
  top: 530px;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const CheckBox = styled.div`
  min-width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.silver};
  cursor: pointer;

  ${(props) => {
    if (props.isNormalAlarm || props.isImportantAlarm || props.isVibrationAlarm || props.isSlientAlarm) {
      return `
                background-image:url('/asset/check.svg');
                background-position:center;
            `;
    } else {
      return `
                background-image:none;
            `;
    }
  }}
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const CheckBoxTitle = styled.span`
  min-width: 55px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  margin-right: 24px;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const CheckBoxContent = styled.span`
  min-width: 241px;
  font-size: 11px;
  color: ${(props) => props.theme.colors.gray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const SettingContainer = styled(HashtagContainer)`
  height: 159px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const ModeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0px 32px 0px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const SlientMode = styled(CheckBoxTitle)`
  margin-right: 8px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const SlientCheckBox = styled(CheckBox)`
  margin-right: 32px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const VibrationCheckBox = styled(CheckBox)`
  margin-right: 24px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const SettingContent = styled(CheckBoxContent)``;

export const AlarmContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const AlarmTitle = styled.span`
  margin-bottom: 16px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const AlarmType = styled.ul`
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const Type = styled.li`
  cursor: pointer;
  margin-right: 48px;
  color: ${(props) => {
    if (props.checkId === props.alarmTerm) {
      return `${props.theme.colors.darkgray}`;
    } else {
      return `${props.theme.colors.gray}`;
    }
  }};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const EditButton = styled.button`
  width: 80px;
  height: 32px;
  background: #222;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const CancelButton = styled(EditButton)`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;
