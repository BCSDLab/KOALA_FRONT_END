import React from 'react';
import styled from 'styled-components';

const MobileConfig = (props) => {
  return (
    <ConfigContainer>
      <ConfigTitle>{props.title}</ConfigTitle> <ConfigContent>{props.content}</ConfigContent>
    </ConfigContainer>
  );
};
const ConfigContainer = styled.div`
  width: 328px;
  height: 50px;
`;
const ConfigTitle = styled.div`
  margin-bottom: 8px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.darkgray};
`;
const ConfigContent = styled.div`
  font-family: NotoSansCJKKR;
  font-size: 12px;
  text-align: left;
  color: ${(props) => props.theme.colors.gray};
`;

export default MobileConfig;
