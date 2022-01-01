import React,{useState} from 'react';
import styled from 'styled-components';

const StyledEditNickName = styled.form`
  display: flex;
  position: relative;
  width: 304px;
  height: 28.3px;
  margin: 2.8px 0px 24px 80px;
`;

const EditNickNameInput = styled.input`
  width: 304px;
  padding-bottom: 7.3px;
  border: 0;
  border-bottom: 1.5px solid #c4c4c4; 
`;

const EditButton =styled.button`
  cursor: pointer;
  background-color : #fff;
`
const EditImg = styled.img`
  position: absolute;
  top: 0.9px;
  right: 0px;
`

/*
  TODO:
  [] 기존 닉네임 정보에서 받아온 닉네임 useState nickName에 입력
  [] EditButton 클릭 시 닉네임 변경
*/
const EditNickName = () => {
  const [nickName , setNickName] = useState('')//본인의 원래 아이디를 초기설정 state로
  
  const EditName = () =>{
    dispatch(changeNickName(nickName))
  }

  const nickNameHandler = (e) =>{
    setNickName(e.target.value);
  }

  return (
    <StyledEditNickName onSubmit={EditName}>
      <EditNickNameInput value={nickName} onChange={nickNameHandler}/>
      <EditButton >
        <EditImg src='/asset/pencil.svg' alt="pencil"/>
      </EditButton>
    </StyledEditNickName>
  );
};

export default EditNickName;
