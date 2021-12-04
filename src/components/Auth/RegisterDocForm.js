import React from 'react';
import Button from 'components/Shared/Button';
import CircleCheckBox from 'components/Shared/CircleCheckBox';
//import * as S from 'components/Auth/styles';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 35px;
`;

const Agree = styled.div`
  font-size: 14px;
  padding-left: 20px;
  padding-bottom: 24px;
  display: flex;
  text-align: left;
`;

const AllAgree = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid #eee;
`;

const AgreeText = styled.div`
  width: 350px;
`;

const Drop = styled.img`
  width: 20px;
  height: 20px;
`;

const AuthDoc = styled.div`
  font-size: 12px;
  height: 166px;
  border: 1px solid #c4c4c4;
  padding: 16px;
`;

const RegisterDocForm = () => {
  return (
    <div>
      <Title>회원가입</Title>
      <AllAgree>
        <Agree>
          <CircleCheckBox />
          약관 전체동의
        </Agree>
      </AllAgree>
      <Agree>
        <CircleCheckBox />
        <AgreeText>개인정보 이용약관(필수)</AgreeText>
        <Drop src="/asset/dropDown.svg" alt="drop" />
      </Agree>

      <Agree>
        <CircleCheckBox />
        <AgreeText>koala 이용약관(필수)</AgreeText>
        <Drop src="/asset/dropDown.svg" alt="drop" />
      </Agree>
      <AuthDoc>
        <p>제1조(목적)</p>
        한강 서비스 이용약관은 bcsd lab에서 서비스를 제공함에 있어, 이용자간의 관리, 의무 및 책임 사항 등을 목적으로
        합니다
        <p>커뮤니티 이용규칙</p>
        한강 서비스 이용약관은 bcsd lab에서 서비스를 제공함에 있어, 이용자간의 관리, 의무 및 책임 사항 등을 목적으로
        합니다
      </AuthDoc>
      <Button>다음</Button>
    </div>
  );
};

export default RegisterDocForm;
