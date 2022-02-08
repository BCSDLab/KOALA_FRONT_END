import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import TitleSection from 'components/Shared/TitleSection';
import { CREATE_ACCOUNT } from 'constant';

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

  return (
    <S.ContentWrapper>
      <TitleSection />

      <S.ContentSection>
        <S.ContentDescSection>
          <S.DescTitle>약관 동의</S.DescTitle>
          <S.DescText>원활한 사용을 위하여 필수 약관 동의가 필요합니다.</S.DescText>
        </S.ContentDescSection>

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

        <S.BottomProgressBar>
          <S.ProgressBarSection>
            <S.ProgressCircle isOnProgress={true} />
            <S.ProgressCircle />
          </S.ProgressBarSection>

          <NextButton onClick={onClick} disabled={checkedList.length !== dataLists.length} type="button">
            다음
          </NextButton>
        </S.BottomProgressBar>
      </S.ContentSection>
    </S.ContentWrapper>
  );
};

export default RegisterDoc;
