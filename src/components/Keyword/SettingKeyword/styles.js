import styled from 'styled-components';

export const NotifyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const VibrationContaienr = styled(NotifyContainer)`
  margin-bottom: 72px;
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

export const DisturbTitle = styled.div`
  min-width: 113px;
  margin-bottom: 16px;
  color: #c4c4c4;
`;

export const DisturbContainer = styled.ul`
  width: 100%;
  height: 68px;
  border: 1.5px solid #eee;
  display: flex;
  color: #c4c4c4;
  align-items: center;
  margin-bottom: 16px;
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
