import styled from 'styled-components';
import theme from 'theme';

export const HashtagContainer = styled.div`
  width: calc(100% - 26px);
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.lightgray};
  padding-left: 24px;
  margin-bottom: 16px;

  ${(props) => {
    if (props.alreadyRegister) {
      return `
        border:1.5px solid ${theme.colors.yellow}; 
      `;
    }
    if (!props.keyword) {
      return `
                  border:1px solid ${theme.colors.darkgray};
                  border-bottom: none;
              `;
    }
  }}}
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    position: static;
    width: calc(100% - 18px);
    left: 0;
    top: 0;
    height: 38px;
    padding: 0 0 0 16px;
    ${(props) => {
      if (props.alreadyRegister) {
        return `
          border:1px solid ${theme.colors.yellow}; 
        `;
      }
      if (!props.keyword) {
        return `
                border:1px solid ${theme.colors.darkgray};
            `;
      }
    }}
  }
`;

export const HashtageImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    margin-right: 16px;
  }
`;

export const InputKeyword = styled.input`
  width: 100%;
  display: block;
  border: none;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    font-size: 12px;
  }
`;

export const SearchContainer = styled.div`
  width: calc(100% - 26px);
  height: 48px;
  padding-left: 24px;
  align-items: center;
  border: 1px solid ${theme.colors.lightgray};
  display: flex;
  margin-bottom: 8px;
  ${(props) => {
    if (!props.show) {
      return `
                border:1px solid ${theme.colors.darkgray};
                border-bottom: none;
            `;
    }
    if (props.alreadyRegister) {
      return `
                border:1.5px solid ${theme.colors.yellow};
                width: auto;
                `;
    }
  }}}
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    position: static;
    width: calc(100% - 18px);
    height: 38px;
    padding: 0 0 0 16px;
    margin: 0;
    ${(props) => {
      if (!props.show) {
        return `
                  border:1px solid ${theme.colors.darkgray};
                  border-bottom: none;
              `;
      }
      if (props.alreadyRegister) {
        return `
                  border:1.5px solid ${theme.colors.yellow};
                  margin-bottom: 8px;
                  `;
      }
    }}
  }
`;

export const RecommendItem = styled.li`
  width: 1079px;
  height: 37px;
  padding-left: 37px;
  line-height: 37px;
  &:hover {
    background-color: ${theme.colors.lightgray};
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: calc(100% - 16px);
    padding-left: 16px;
    background-color: ${(props) => props.theme.colors.white};
    margin-bottom: 8px;
  }
`;

export const RecommendSiteContainer = styled.ul`
  display: ${(props) => {
    return props.show ? 'none' : 'block';
  }};
  padding-left: none;
  width: calc(100% - 102px);
  border: 1px solid ${theme.colors.darkgray};
  border-top: none;
  background-color: white;
  position: absolute;
  top: 112px;
  z-index: 20;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
    position: static;
    display: ${(props) => {
      return props.show ? 'none' : 'block';
    }};
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const RecommendKeywordContainer = styled.ul`
  width: calc(100% - 102px);
  padding-left: none;
  border: ${(props) => (props.isRegisterKeyword ? 'none' : `1px solid ${theme.colors.darkgray}`)};
  border-top: none;
  background-color: white;
  position: absolute;
  top: 48px;
  z-index: 100;
  display: ${(props) => (props.show ? 'none' : 'block')};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    position: static;
    display: none;
  }
`;

export const AlreadyRegisterMessage = styled.span`
  color: #ffd25d;
  height: 16px;
  font-size: 11px;
  display: ${(props) => (props.alreadyRegister ? 'block' : 'none')};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    height: 11px;
    display: ${(props) => (props.alreadyRegister ? 'block' : 'none')};
    position: absolute;
    top: 95px;
    left: 16px;
  }
`;

export const AlreadyRegisterKeyword = styled.span`
  color: #ffd25d;
  height: 15px;
  font-size: 11px;
  display: ${(props) => (props.alreadyRegister ? 'block' : 'none')};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    font-size: 11px;
    display: ${(props) => (props.alreadyRegister ? 'block' : 'none')};
    position: absolute;
    top: 40px;
    left: 16px;
  }
`;

export const SearchImage = styled(HashtageImage)``;

export const InputSite = styled.input`
  width: 100%;
  border: none;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    width: 100%;
  }
`;

export const SiteContainer = styled.div`
  width: calc(100% - 24px);
  height: 117px;
  background-color: #eee;
  padding: 10px 12px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    background-color: ${(props) => props.theme.colors.white};
    width: 100%;
    position: static;
    overflow: hidden;
    height: auto;
    margin: 0 0 32px 0;
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

export const XImage = styled.img`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

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
                background-image:url('/asset/Check.svg');
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const CheckBoxContent = styled.span`
  min-width: 241px;
  font-size: 11px;
  color: #999999;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const SettingContainer = styled.div`
  width: 1092px;
  height: 159px;
  border: 1.5px solid #eee;
  padding-left: 24px;
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

export const SettingContent = styled(CheckBoxContent)`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

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
      return `${theme.colors.darkgray}`;
    } else {
      return `${theme.colors.silver}`;
    }
  }};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;

export const EditButton = styled.button`
  width: 80px;
  height: 32px;
  background: ${theme.colors.darkgray};
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
