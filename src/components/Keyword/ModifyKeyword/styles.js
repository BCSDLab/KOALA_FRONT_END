
import styled from "styled-components";

export const HashtagContainer = styled.div`
    width:1092px;
    height:48px;
    border:1px solid #eee;
    display:flex;
    align-items:center;
    padding-left:24px;
    position:absolute;
    left:588px;
    top:212px;
`;

export const HashtageImage = styled.img`
    width:20px;
    height:20px;
    margin-right:8px;
`;

export const InputKeyword = styled.div`
    width:1040px;
    border:none;
`;

export const SearchContainer = styled(HashtagContainer)`
    width:1092px;
    top:276px;
    
    ${props => {
        if(!props.show){
            return `
                border:1px solid #222222;
                border-bottom:none;
            `;
        }else {
            if(props.alreadyRegister){
                return `
                    border:1.5px solid #ffd25d;
                `;
            }
        }
    }}
`;

export const RecommendItem = styled.li`
    width:1079px;
    height:37px;
    padding-left:37px;
    line-height:37px;
    &:hover {
        background-color:#eeeeee;
    }
`;


export const RecommendContainer = styled.ul`
    padding-left:none;
    width:1116px;
    border:1px solid #222222;
    border-top:none;
    position:absolute;
    background-color:white;
    left:588px;
    top:325px;
    z-index:1;
    display : ${props => {
        return props.show?'none':'block'
    }};
`;

export const AlreadyRegisterMessage = styled.span`
    color: #ffd25d;
    height:15px;
    font-size:11px;
    position:absolute;
    left:200px;
    display:${props => props.alreadyRegister?'block':'none'};
`;

export const SearchImage = styled(HashtageImage)`
`;

export const InputSite = styled.input`
    width:1040px;
    border:none;
`;

export const SiteContainer = styled(HashtagContainer)`
    top:335px;
    height:117px;
    background-color:#eee;
    padding:10px 12px;
`;

export const SiteList = styled.ul`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`;

export const SiteItem = styled.li`
    height:21px;
    display:flex;
    align-items:center;
`;

export const SiteName = styled.span`
    margin-right:4px;
`;

export const CloseBtn = styled.button`
    display:flex;
    align-items:center;
    margin-right:36px;
`;

export const XImage = styled.img`    
`;

export const ImportantContainer = styled.div`
    height:16px;
    display:flex;
    position:absolute;
    left:590px;
    top:501px;
    align-items:center;
`;  

export const NormalContainer = styled(ImportantContainer)`
    top:530px;
`;

export const CheckBox = styled.div`
    min-width:14px;
    height:14px;
    margin-right:8px;
    border-radius:3px;
    border:1px solid #c4c4c4;
`;

export const CheckBoxTitle = styled.span`
    min-width:55px;
    font-size:14px;
    color:#999999;
    margin-right:24px;
`;

export const CheckBoxContent = styled.span`
    min-width:241px;
    font-size:11px;
    color:#999999;
`;

export const SettingContainer = styled(HashtagContainer)`
    height:159px;
    left:588px;
    top:570px;
    display:flex;
    flex-direction:column;
`;

export const ModeContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin:16px 0px 32px 0px;
`;

export const SlientMode = styled(CheckBoxTitle)`
    margin-right:8px;
`;

export const SlientCheckBox = styled(CheckBox)`
    margin-right:32px;
`;

export const VibrationCheckBox = styled(CheckBox)`
    margin-right:24px;
`;

export const SettingContent = styled(CheckBoxContent)`
`;

export const AlarmContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const AlarmTitle = styled.span`
    margin-bottom:16px;
`;

export const AlarmType = styled.ul`
    display:flex;
`;

export const Type = styled.li`
    color: #c4c4c4;
    margin-right:48px;
`;

export const EditButton = styled.button`
    width: 80px;
    height: 32px;
    background: #222;
    color: #fff;
    position:absolute;
    top:834px;
    left:1018px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

export const CancelButton = styled(EditButton)`
    left:1142px;
`;