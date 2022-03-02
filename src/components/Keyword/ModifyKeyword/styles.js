import styled from 'styled-components';

export const ModifyKeywordContent = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
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
  width: 1092px;
  height: 48px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  padding-left: 24px;
  position: absolute;
  left: ${(props) => (props.toggle ? '588px' : '453px')};
  top: 212px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    position: static;
    width: calc(100% - 16px);
    padding-left: 16px;
    height: 40px;
    margin-bottom: 16px;
  }
  @media (min-width: ${(props)=>props.theme.deviceSizes.tablet}) and (max-width: ${(props)=>props.theme.deviceSizes.tabletL}){
   width: 700px;
   top:172px;
  
  }
`;

export const HashtageImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    margin-right: 19px;
  }
`;

export const InputKeyword = styled.div`
  width: 1040px;
  border: none;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 100%;
  }
`;

export const SearchContainer = styled(HashtagContainer)`
  width: 1092px;
  top: 276px;

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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
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
  @media (min-width: ${(props)=>props.theme.deviceSizes.tablet}) and (max-width: ${(props)=>props.theme.deviceSizes.tabletL}){
    width: 700px;
    top: 236px;
  }
`;

export const RecommendItem = styled.li`
  width: 1079px;
  height: 37px;
  padding-left: 37px;
  line-height: 37px;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightgray};
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: calc(100% - 16px);
    padding-left: 16px;
    background-color: ${(props) => props.theme.colors.white};
    margin-bottom: 8px;
  }
  @media (min-width: ${(props)=>props.theme.deviceSizes.tablet}) and (max-width: ${(props)=>props.theme.deviceSizes.tabletL}){
    width: 690px;
  }
 
`;

export const RecommendContainer = styled.ul`
  padding-left: none;
  width: 1116px;
  border: 1px solid ${(props) => props.theme.colors.darkgray};
  border-top: none;
  position: absolute;
  background-color: white;
  left: ${(props) => (props.toggle ? '588px' : '453px')};
  top: 325px;
  z-index: 1;
  display: ${(props) => {
    return props.show ? 'none' : 'block';
  }};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 100%;
    position: static;
    display: ${(props) => {
      return props.show ? 'none' : 'block';
    }};
    background-color: ${(props) => props.theme.colors.white};
  }
  @media (min-width: ${(props)=>props.theme.deviceSizes.tablet}) and (max-width: ${(props)=>props.theme.deviceSizes.tabletL}){
    width: 724px;
    top:285px;
  }
`;

export const AlreadyRegisterMessage = styled.span`
  color: #ffd25d;
  height: 15px;
  font-size: 11px;
  position: absolute;
  left: 200px;
  display: ${(props) => (props.alreadyRegister ? 'block' : 'none')};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const SearchImage = styled(HashtageImage)``;

export const InputSite = styled.input`
  width: 1040px;
  border: none;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
  @media (min-width: ${(props)=>props.theme.deviceSizes.tabletL}) and (max-width: ${(props)=>props.theme.deviceSizes.NoteBook}){
    width: 700px;
  
  }
`;

export const SiteContainer = styled(HashtagContainer)`
  top: 335px;
  height: 117px;
  background-color: ${(props) => props.theme.colors.lightgray};
  padding: 10px 12px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    background-color: ${(props) => props.theme.colors.white};
    width: 100%;
    overflow: hidden;
    height: auto;
    padding: 0;
    border: 0;
    border-top: 8px;
  }
  @media (min-width: ${(props)=>props.theme.deviceSizes.tabletL}) and (max-width: ${(props)=>props.theme.deviceSizes.NoteBook}){
    top: 295px;
  }
  
`;

export const SiteList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: flex;
    flex-direction: column;
  }
 
`;

export const SiteItem = styled.li`
  height: 21px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }
`;

export const XImage = styled.img``;

export const ImportantContainer = styled.div`
  height: 16px;
  display: flex;
  position: absolute;
  left: 590px;
  top: 501px;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }

`;

export const NormalContainer = styled(ImportantContainer)`
  top: 530px;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const CheckBoxTitle = styled.span`
  min-width: 55px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  margin-right: 24px;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const CheckBoxContent = styled.span`
  min-width: 241px;
  font-size: 11px;
  color: ${(props) => props.theme.colors.gray};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const SettingContainer = styled(HashtagContainer)`
  height: 159px;
  left: 588px;
  top: 570px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const ModeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0px 32px 0px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const SlientMode = styled(CheckBoxTitle)`
  margin-right: 8px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const SlientCheckBox = styled(CheckBox)`
  margin-right: 32px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const VibrationCheckBox = styled(CheckBox)`
  margin-right: 24px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const SettingContent = styled(CheckBoxContent)``;

export const AlarmContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const AlarmTitle = styled.span`
  margin-bottom: 16px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const AlarmType = styled.ul`
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const EditButton = styled.button`
  width: 80px;
  height: 32px;
  background: #222;
  color: #fff;
  position: absolute;
  top: 834px;
  left: 1018px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const CancelButton = styled(EditButton)`
  left: 1142px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;
