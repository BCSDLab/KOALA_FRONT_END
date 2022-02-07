import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import { useNavigate } from 'react-router';
import { CREATE_ACCOUNT } from 'constant';

const RegisterDocWrapper = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    background-color: ${(props) => props.theme.colors.white};
    width: inherit;
    top: 0;
    position: absolute;
  }
`;

const BackButton = styled.button`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: block;
    width: 24px;
    height: 24px;
    background: url(/asset/chevron-left.svg);
    background-size: 24px;
    left: 8px;
    position: absolute;
  }
`;

const RegisterDocSection = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    top: 62px;
    position: relative;
  }
`;

const RegisterDocDescSection = styled.section`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: block;
    margin-top: 24px;
    margin-bottom: 9px;
    position: relative;
  }
`;

const Title = styled.p`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.darkgray};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

const Desc = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  color: ${(props) => props.theme.colors.gray}; ;
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 40px;
`;

const ProcessBarSection = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: center;
`;

const ProgressCircle = styled.div`
  background-color: ${({ isOnProgress, ...props }) =>
    isOnProgress ? props.theme.colors.yellow : props.theme.colors.silver};
  width: 8px;
  height: 8px;
  flex-grow: 0;
  margin: 0 16px 0 0;
  border-radius: 100%;

  :last-child {
    margin: 0;
  }
`;

const NextButton = styled(Button)`
  margin-top: 0;
`;

const RegisterDoc = ({ checked }) => {
  const navigate = useNavigate();
  const [checkedList, setCheckedLists] = useState([]);
  const dataLists = [
    { id: 1, text: '개인정보 이용약관 (필수)' },
    { id: 2, text: 'koala 이용약관 (필수)' },
  ];

  const onCheckedAll = (checked) => {
    if (checked) {
      setCheckedLists(dataLists.map(({ id }) => id));
    } else {
      setCheckedLists([]);
    }
  };

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !== list));
      }
    },
    [checkedList]
  );

  const onClick = () => {
    navigate(CREATE_ACCOUNT);
  };

  const shiftBack = () => {
    navigate(-1);
  };

  return (
    <RegisterDocWrapper>
      <S.Title>
        <BackButton onClick={shiftBack} />
        회원가입
      </S.Title>

      <RegisterDocSection>
        <RegisterDocDescSection>
          <Title>약관 동의</Title>
          <Desc>원활한 사용을 위하여 필수 약관 동의가 필요합니다.</Desc>
        </RegisterDocDescSection>

        <S.AllAgree>
          <S.Agree>
            <S.CheckDotLabel>
              <S.CheckDot
                type="checkbox"
                onChange={(e) => onCheckedAll(e.target.checked)}
                checked={checkedList.length && checkedList.length === dataLists.length}
              />
              <S.CustomCheckDot checked={checked}></S.CustomCheckDot>
            </S.CheckDotLabel>
            <S.AgreeText>약관 전체 동의</S.AgreeText>
          </S.Agree>
        </S.AllAgree>

        {dataLists.map((list, index) => (
          <S.Agree key={index}>
            <S.CheckDotLabel>
              <S.CheckDot
                type="checkbox"
                onChange={(e) => onCheckedElement(e.target.checked, list.id)}
                checked={checkedList.includes(list.id) ? true : false}
              />
              <S.CustomCheckDot checked={checked}></S.CustomCheckDot>
            </S.CheckDotLabel>
            <S.AgreeText>{list.text}</S.AgreeText>
            <S.Drop src="/asset/dropDown.svg" alt="drop" />
          </S.Agree>
        ))}
        <S.AuthDoc>
          <p>제1조(목적)</p>
          한강 서비스 이용약관은 bcsd lab에서 서비스를 제공함에 있어, 이용자간의 관리, 의무 및 책임 사항 등을 목적으로
          합니다
          <br />
          <br />
          <p>커뮤니티 이용규칙</p>
          한강 서비스 이용약관은 bcsd lab에서 서비스를 제공함에 있어, 이용자간의 관리, 의무 및 책임 사항 등을 목적으로
          합니다
        </S.AuthDoc>

        <Bottom>
          <ProcessBarSection>
            <ProgressCircle isOnProgress={true} />
            <ProgressCircle />
          </ProcessBarSection>

          <NextButton onClick={onClick} disabled={checkedList.length !== dataLists.length} type="button">
            다음
          </NextButton>
        </Bottom>
      </RegisterDocSection>
    </RegisterDocWrapper>
  );
};

export default RegisterDoc;
