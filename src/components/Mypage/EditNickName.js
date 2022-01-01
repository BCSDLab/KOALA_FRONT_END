import React, { useState } from 'react';
import * as S from './styles';

const EditNickName = ({ userNickName }) => {
  const [nickName, setNickName] = useState(`${userNickName}`);
  const EditName = () => {
    dispatch(changeNickName(nickName));
  };

  const nickNameHandler = (e) => {
    setNickName(e.target.value);
  };

  return (
    <S.StyledEditNickName onSubmit={EditName}>
      <S.EditNickNameInput value={nickName} onChange={nickNameHandler} />
      <S.EditButton>
        <S.EditImg src="/asset/pencil.svg" alt="pencil" />
      </S.EditButton>
    </S.StyledEditNickName>
  );
};

export default EditNickName;
