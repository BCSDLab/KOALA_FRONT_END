import React, { useState, useEffect } from 'react';
import * as S from './styles';

const EditNickName = ({ userNickName }) => {
  const [nickName, setNickName] = useState('');
  const editName = () => {
    dispatch(changeNickName(nickName));
  };

  const nickNameHandler = (e) => {
    setNickName(e.target.value);
  };
  useEffect(() => {
    setNickName(userNickName);
  }, [userNickName]);

  return (
    <S.StyledEditNickName onSubmit={editName}>
      <S.EditNickNameInput value={nickName || ''} onChange={nickNameHandler} />
      <S.EditButton>
        <S.EditImg src="/asset/pencil.svg" alt="pencil" />
      </S.EditButton>
    </S.StyledEditNickName>
  );
};

export default EditNickName;
