import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LOGIN } from 'constant';
import MobileTopBar from 'components/Shared/MobileTopBar';
import MobileConfig from 'components/Shared/MobileConfig';
import useMatchMedia from 'hooks/useMatchMedia';
import AuthNumberForm from '../Shared/AuthNumberForm';
import { authFindId, setFindAccount, resetAuthState } from 'store/auth';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';
import EmailForm from '../Shared/EmailForm';

const queries = ['(max-width: 400px)', '(min-width: 800px)'];

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

  const [mobile, desktop] = useMatchMedia(queries);

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
    navigate(LOGIN);
  };

  useEffect(() => {
    if (auth.authSuccess) {
      dispatch(setFindAccount(email));
    }
  }, [auth.authSuccess]);

  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, []);

  return (
    <FindAccountForm>
      {!desktop ? <MobileTopBar content="아이디찾기" /> : <S.Title>아이디 찾기</S.Title>}

      {!auth.authSuccess ? (
        <>
          {' '}
          {!desktop && (
            <MobileConfig title="이메일로 아이디 찾기" content="회원가입시 등록했던 이메일을 입력해주세요." />
          )}
          <FindAccountContainer>
            <SubmitAccountForm>
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
            </SubmitAccountForm>
            <NextButton onClick={authClick} disabled={isEmailError || isAuthNumError} type="button">
              다음
            </NextButton>
          </FindAccountContainer>
        </>
      ) : (
        <FindAccountContainer>
          <FindAccountText>아이디는 {auth.blindAccount}입니다.</FindAccountText>
          <NextButton onClick={completeClick}>완료</NextButton>
        </FindAccountContainer>
      )}
    </FindAccountForm>
  );
};

export default FindId;
const FindAccountForm = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 100%;
    height: 100%;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const FindAccountContainer = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 328px;
    height: 100%;
    padding-top: 24px;
    display: flex;
  }
`;
const SubmitAccountForm = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 328px;
    height: 100%;

    display: flex;
  }
`;
const IdfForm = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 328px;
  }
`;
const NextButton = styled(Button)`
  margin-top: 0;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 328px;
    position: absolute;
    bottom: 40px;
  }
`;
const FindAccountText = styled.div`
  height: 24px;
  margin-bottom: 216px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    font-family: NotoSansCJKKR;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
