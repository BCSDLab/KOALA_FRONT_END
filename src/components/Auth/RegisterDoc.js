import React, { useState, useCallback } from 'react';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import { useNavigate } from 'react-router';
import { CREATE_ACCOUNT } from 'constant/path';

const RegisterDoc = ({ checked }) => {
  const navigate = useNavigate();
  const [checkedList, setCheckedLists] = useState([]);
  const dataLists = [
    { id: 1, text: '개인정보 이용약관(필수)' },
    { id: 2, text: 'koala 이용약관(필수)' },
  ];

  const onCheckedAll = useCallback((checked) => {
    if (checked) {
      setCheckedLists(dataLists.map(({ id }) => id));
    } else {
      setCheckedLists([]);
    }
  }, []);

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
    <div>
      <S.Title>회원가입</S.Title>
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
          약관 전체 동의
        </S.Agree>
      </S.AllAgree>
      {dataLists.map((list) => (
        <S.Agree>
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
        <p>커뮤니티 이용규칙</p>
        한강 서비스 이용약관은 bcsd lab에서 서비스를 제공함에 있어, 이용자간의 관리, 의무 및 책임 사항 등을 목적으로
        합니다
      </S.AuthDoc>
      {checkedList.length && checkedList.length === dataLists.length ? (
        <Button onClick={onClick}>다음</Button>
      ) : (
        <Button style={{ background: 'gray' }}>다음</Button>
      )}
    </div>
  );
};

export default RegisterDoc;
