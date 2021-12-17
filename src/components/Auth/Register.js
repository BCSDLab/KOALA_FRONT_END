import React, { useState } from 'react';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import PwdInput from 'components/Auth/PwdInput';

const RegisterForm = () => {
  const [account, setAccount] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');

  const submitCreate = (e) => {
    e.preventDefault();
    console.log({ account, pwd, checkPwd, email, nickName });
  };

  const insertAccount = (e) => {
    setAccount(e.target.value);
  };
  const insertPwd = (e) => {
    setPwd(e.target.value);
  };
  const insertPwdCheck = (e) => {
    setCheckPwd(e.target.value);
  };
  const insertEmail = (e) => {
    setEmail(e.target.value);
  };
  const insertNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <form onSubmit={submitCreate}>
      <S.Title>회원가입</S.Title>
      <S.StyledInput name="account" value={account} onChange={insertAccount} placeholder="아이디" />
      <PwdInput name="pwd" value={pwd} onChange={insertPwd} placeholder="비밀번호 입력" />
      <PwdInput name="checkPwd" value={checkPwd} onChange={insertPwdCheck} placeholder="비밀번호 확인" />
      <S.StyledInput name="email" value={email} onChange={insertEmail} placeholder="이메일" />
      <S.StyledInput name="nickName" value={nickName} onChange={insertNickName} placeholder="닉네임" />
      <Button>다음</Button>
    </form>
  );
};

export default RegisterForm;
