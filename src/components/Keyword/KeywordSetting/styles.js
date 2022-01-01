import styled from "styled-components";

export const NotifyContainer = styled.div`
    display:flex;
    align-items:center;
    position:absolute;
    left:596px;
    top:232px;
`;

export const VibrationContaienr = styled(NotifyContainer)`
    top:275px;
`;

export const NotifyCheckBox = styled.div`
    min-width:14px;
    height:14px;
    margin-right:8px;
    border-radius:3px;
    border:1px solid #c4c4c4;
`;

export const NotifyCheckBoxTitle = styled.span`
    min-width:126px;
    height:21px;
    font-size:14px;
    color:#999999;
    margin-right:24px;
`;

export const MinusImage = styled.img`
    position:absolute;
    left:796px;
    top:482px;
`;

export const VibrationContent = styled.div`
    width:199px;
    font-size:11px;
    color:#999999;
`;

export const VibrationCheckBox = styled(NotifyCheckBox)`
`;

export const VibrationCheckBoxTitle = styled(NotifyCheckBoxTitle)`
`;

export const DisturbTitle = styled.span`
    min-width:113px;
    position:absolute;
    left:596px;
    top:350px;
`;

export const DisturbContainer = styled.ul`
    min-width:1092px;
    height:68px;
    border:1.5px solid #eee;
    position:absolute;
    left:596px;
    top:386px;
    display:flex;
    align-items:center;
`;

export const DisturbCheckBox = styled.div`
    min-width:14px;
    height:14px;
    margin-right:8px;
    border-radius:3px;
    border:1px solid #c4c4c4;
    margin: 0px 8px 0px 15px;
`;

export const DisturbTimeStart = styled.input`
    position:absolute;
    left:596px;
    top:470px;
    min-width:180px;
    height:48px;
    border: 1.5px solid #eee;
    text-align:center;
    line-height:48px;
    font-size:15px;
    &:after {
        width:12px;
        height:1px;
        color:
    }
`;

export const DisturbTimeEnd = styled(DisturbTimeStart)`
    left:840px;
`;

export const SelectTitle = styled.span`
    width:68px;
    position:absolute;
    left:596px;
    top:590px;
`;

export const SelectBox = styled.div`
    min-width:180px;
    height:48px;
    border: 1.5px solid #eee;
    position:absolute;
    left:596px;
    top:627px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const SelectMenu = styled.span` 
    margin-left:16px;
`;

export const ChevronDownImage = styled.img`
    margin-right:8px;
`;

export const BrowserTitle = styled(NotifyCheckBoxTitle)`
    position:absolute;
    top:747px;
    left:596px;
    color:#222222;
`;

export const BrowserCheckContainer = styled.div`
    display:flex;
    align-items:center;
    position:absolute;
    left:596px;
    top:792px;
`;

export const ChromeImage = styled.img`
    width:21px;
    height:21px;
    margin-right:8px;
`;

export const ChromeName = styled.span`
    margin-right:32px;
`;

export const ChromeCheckBox = styled(NotifyCheckBox)`

`;

export const SaveButton =  styled.button`
    width: 80px;
    height: 32px;
    background: #222;
    color: #fff;
    position:absolute;
    top:1014px;
    left:1018px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

export const CancelButton = styled(SaveButton)`
    left:1142px;
`;