import React from 'react';
import styled from 'styled-components';

const StyledEditNickName = styled.div`
  display: flex;
  position: relative;
  width: 304px;
  height: 28.3px;
  margin: 2.8px 0px 24px 80px;
`;

const EditNickNameInput = styled.input`
  background-image: url('/asset/pencil.svg');
  background-position-y: center;
  background-position-x: 280px;
  background-repeat: no-repeat;
  width: 304px;
  padding-bottom: 7.3px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4; ;
`;

const EditNickName = () => {
  return (
    <StyledEditNickName>
      <EditNickNameInput placeholder="코알라" />
    </StyledEditNickName>
  );
};

export default EditNickName;
