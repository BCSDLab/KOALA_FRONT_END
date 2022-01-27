import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changingNickname } from 'store/myPage';
import * as S from './styles';

const EditNickname = ({ userNickname }) => {
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();

  const editName = () => {
    dispatch(changingNickname(nickname));
  };

  const nicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setNickname(userNickname);
  }, [userNickname]);

  return (
    <S.StyledEditNickname>
      <S.EditNicknameInput value={nickname || ''} onChange={nicknameHandler} />
      <S.EditButton onClick={editName}>
        <S.EditImg src="/asset/pencil.svg" alt="pencil" />
      </S.EditButton>
    </S.StyledEditNickname>
  );
};

export default EditNickname;
