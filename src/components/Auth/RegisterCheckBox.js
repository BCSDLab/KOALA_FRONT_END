import React, { useState, useCallback } from 'react';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';

const CheckDotLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
`;

const CheckDot = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const CustomCheckDot = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-right: 20px;
  border: solid 1px #c4c4c4;
  transition: all 150ms;
  ${CheckDot}:checked + & {
    border: solid 1px #ffd25d;
    background-color: #ffd25d;
  }
`;

const RegisterCheckBox = ({ checked, ...props }) => {
  const [checkedList, setCheckedLists] = useState([]);
  const dataLists = [
    { id: 1, text: '개인정보 이용약관(필수)' },
    { id: 2, text: 'koala 이용약관(필수)' },
  ];

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        dataLists.forEach((list) => checkedListArray.push(list.id));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [dataLists]
  );

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

  return (
    <div>
      <S.AllAgree>
        <S.Agree>
          <CheckDotLabel>
            <CheckDot
              type="checkbox"
              onChange={(e) => onCheckedAll(e.target.checked)}
              checked={checkedList.length === 0 ? false : checkedList.length === dataLists.length ? true : false}
              {...props}
            />
            <CustomCheckDot checked={checked}></CustomCheckDot>
          </CheckDotLabel>
          약관 전체 동의
        </S.Agree>
      </S.AllAgree>
      {dataLists.map((list) => (
        <S.Agree>
          <CheckDotLabel>
            <CheckDot
              type="checkbox"
              onChange={(e) => onCheckedElement(e.target.checked, list.id)}
              checked={checkedList.includes(list.id) ? true : false}
              {...props}
            />
            <CustomCheckDot checked={checked}></CustomCheckDot>
          </CheckDotLabel>
          <S.AgreeText>{list.text}</S.AgreeText>
          <S.Drop src="/asset/dropDown.svg" alt="drop" />
        </S.Agree>
      ))}
    </div>
  );
};

export default RegisterCheckBox;
