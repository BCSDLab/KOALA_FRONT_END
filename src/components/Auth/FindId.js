import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LOGIN } from '../../constant';
import AuthNumberForm from './Shared/AuthNumberForm';
import { authFindId, setFindAccount, resetAuthState } from 'store/auth';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';
import EmailForm from './Shared/EmailForm';

const IdfForm = styled.div`
  margin-bottom: 120px;
`;
const NextButton = styled(Button)`
  margin-top: 0;
`;
const FindAccountText = styled.div`
  height: 24px;
  margin-bottom: 216px;
`;

/**
 * TODO:
 * - [x] 이메일 형식 검사 스타일
 * - [x] 가입 하지 않은 이메일 알림
 * - [x] 이메일 전송 후 다음 버튼 활성화
 * @returns
 */
const FindId = () => {
  const [email, setEmail] = useState('');
  const [secret, setSecret] = useState('');

  const [isEmailError, setIsEmailError] = useState(true);
  const [isAuthNumError, setIsAuthNumError] = useState(true);

  const emailRef = useRef();
  const authRef = useRef();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeEmail = (validatedData) => {
    setIsEmailError(validatedData.isError);
    setEmail(validatedData.value);
  };
  const onChangeAuth = (validatedData) => {
    setIsAuthNumError(validatedData.isError);
    setSecret(validatedData.value);
  };
  const authClick = () => {
    dispatch(authFindId(email, secret));
  };
  const completeClick = () => {
    dispatch(resetAuthState());
    navigate(LOGIN);
  };

  useEffect(() => {
    if (auth.authSuccess) {
      dispatch(setFindAccount(email));
    }
  }, [auth.authSuccess]);

  return (
    <div>
      <S.Title>아이디 찾기</S.Title>
      {!auth.authSuccess ? (
        <>
          <form>
            <IdfForm>
              <EmailForm ref={emailRef} onChange={onChangeEmail} />
              <AuthNumberForm
                type="ACCOUNT"
                ref={authRef}
                email={email}
                isEmailError={isEmailError}
                onChange={onChangeAuth}
              />
            </IdfForm>
          </form>
          {isEmailError || isAuthNumError ? (
            <NextButton style={{ background: 'gray' }} disabled={true} type="button">
              다음
            </NextButton>
          ) : (
            <NextButton onClick={authClick}>다음</NextButton>
          )}
        </>
      ) : (
        <>
          <FindAccountText>아이디는 {auth.blindAccount}입니다.</FindAccountText>
          <NextButton onClick={completeClick}>완료</NextButton>
        </>
      )}
    </div>
  );
};

export default FindId;
