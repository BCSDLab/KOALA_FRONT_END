import styled from 'styled-components';

export const NotifyContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${(props) => (props.toggle ? '596px' : '461px')};
  top: 232px;
`;

export const VibrationContaienr = styled(NotifyContainer)`
  top: 275px;
`;

export const NotifyCheckBox = styled.div`
  min-width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
`;

export const NotifyCheckBoxTitle = styled.span`
  min-width: 126px;
  height: 21px;
  font-size: 14px;
  color: #c4c4c4;
  margin-right: 24px;
`;

export const VibrationCheckBox = styled(NotifyCheckBox)``;

export const VibrationCheckBoxTitle = styled(NotifyCheckBoxTitle)``;

export const DisturbTitle = styled.span`
  min-width: 113px;
  position: absolute;
  left: ${(props) => (props.toggle ? '596px' : '461px')};
  top: 350px;
`;

export const DisturbContainer = styled.ul`
  width: 1092px;
  height: 68px;
  border: 1.5px solid #eee;
  position: absolute;
  left: ${(props) => (props.toggle ? '596px' : '461px')};
  top: 386px;
  display: flex;
  align-items: center;
  @media screen and (min-width: ${(props)=>props.theme.deviceSizes.tablet}){
    width: 800px;
  
  }
`;

export const DisturbCheckBox = styled.div`
  min-width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  margin: 0px 8px 0px 15px;
`;

export const DisturbDay = styled.span`
  margin-right: 24px;
  white-space: nowrap;
  @media screen and (min-width: ${(props)=>props.theme.deviceSizes.tablet}){
   margin-right: 12px;
  }
`;

export const DisturbTimeStart = styled.input`
  width: 180px;
  height: 48px;
  border: 1.5px solid #eee;
  text-align: center;
  line-height: 48px;
  font-size: 15px;
  &:after {
    width: 12px;
    height: 1px;
  }
`;

export const MinusImage = styled.img`
  width: 24px;
  height: 23px;
  margin: 12px 20px 13px;
`;

export const DisturbTimeEnd = styled(DisturbTimeStart)``;
