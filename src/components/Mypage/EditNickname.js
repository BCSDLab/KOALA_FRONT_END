import React, { useState, useEffect } from 'react';
import * as S from './styles';

const EditNickname = ({ userNickname }) => {
  const [nickname, setNickname] = useState('');
  const editName = () => {
    dispatch(changeNickname(nickName));
  };

  const nicknameHandler = (e) => {
    setNickname(e.target.value);
  };
  useEffect(() => {
    setNickname(userNickname);
  }, [userNickname]);

  return (
    <S.StyledEditNickname onSubmit={editName}>
      <S.EditNicknameInput value={nickname || ''} onChange={nicknameHandler} />
      <S.EditButton>
        <S.EditImg src="/asset/pencil.svg" alt="pencil" />
      </S.EditButton>
    </S.StyledEditNickname>
  );
};

export default EditNickname;
