import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changingNickname } from 'store/myPage';
import styled from 'styled-components';
import * as S from './styles';

const EditNickname = (props) => {
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();

  const editName = () => {
    dispatch(changingNickname(nickname));
  };

  const nicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setNickname(props.userNickname);
  }, [props.userNickname]);

  return (
    <>
      <S.StyledEditNickname>
        <S.EditNicknameInput value={nickname || ''} onChange={nicknameHandler} error={props.change} />
        <S.EditButton onClick={editName}>
          <S.EditImg src="/asset/pencil.svg" alt="pencil" />
        </S.EditButton>
      </S.StyledEditNickname>
      {!props.change && <ErrorText>이미 존재하는 닉네임입니다.</ErrorText>}
    </>
  );
};

export default EditNickname;
const ErrorText = styled.div`
  height: 18px;
  margin: 4px 5px 16px 16px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  text-align: left;
  color: ${(props) => props.theme.colors.yellow};
`;
