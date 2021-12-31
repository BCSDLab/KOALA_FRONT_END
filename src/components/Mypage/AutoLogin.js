import React from 'react';
import styled from 'styled-components';

const AutoLoginContent = styled.div`
  display: flex;
  width: 304px;
  height: 21px;
  margin: 0px 0px 32px 80px;
`;
const AutoLoginTitle = styled.div`
  width: 65px;
  height: 21px;
  margin: 0px 0px 32px 0px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #999;
`;
const AutoLoginCheck = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 223px;
  padding-top: 2px;
  padding-bottom: 3px;
  object-fit: contain;
`;

const AutoLogin = () => {
  return (
    <AutoLoginContent>
      <AutoLoginTitle>자동로그인 </AutoLoginTitle>
      <AutoLoginCheck src="/asset/CheckCircle.svg" />
    </AutoLoginContent>
  );
};

export default AutoLogin;
