import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EXPIRE_AUTH_NUMBER, NOT_EXIST_ACCOUNT, NOT_MATCH_EMAIL, NOT_SEND_EMAIL, NOT_MATCH_SECRET } from 'constant';
import AuthNumber from 'components/Shared/AuthNumber';
import { authFindId, setFindAccount } from 'store/auth';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import IdInput from 'components/Auth/Shared/IdInput';
import styled from 'styled-components';

const IdfForm = styled.div`
  display: ${({ isView }) => isView && 'none'};
  margin-bottom: 120px;
`;
const NextButton = styled(Button)`
  display: ${({ isView }) => isView && 'none'};
  margin-top: 0;
`;
const FindAccountText = styled.div`
  display: ${({ isView }) => !isView && 'none'};
`;

/**
 * TODO:
 * - [x] 이메일 형식 검사 스타일
 * - [] 가입 하지 않은 이메일 알림
 * - [] 이메일 전송 후 다음 버튼 활성화
 * @returns
 */
const FindId = () => {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [secret, setSecret] = useState('');
  const [secretMessage, setSecretMessage] = useState('');
  const [isSecretError, setIsSecretError] = useState(false);

  const [isView, setIsView] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onChangeEmail = useCallback((e) => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,4}$/i;
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (!emailRegex.test(currentEmail)) {
      setEmailMessage('이메일 형식이 알맞지 않습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  }, []);

  const errorEmail = (change, errorText) => {
    setIsEmailError(change);
    setEmailMessage(errorText);
  };
  const errorSecret = (change, errorText) => {
    setIsSecretError(change);
    setSecretMessage(errorText);
  };
  const authClick = () => {
    dispatch(authFindId(email, secret));
  };

  useEffect(() => {
    setIsDisabled(!isEmail);
  }, [isEmail]);

  useEffect(() => {
    if (auth.errorCode == NOT_EXIST_ACCOUNT) {
      errorEmail(true, '존재하지 않는 계정입니다.');
    } else if (auth.errorCode == NOT_MATCH_EMAIL) {
      errorEmail(true, '가입할 때 설정한 찾기용 이메일과 일치하지 않습니다.');
    } else if (auth.errorCode == NOT_SEND_EMAIL) {
      errorEmail(true, '먼저 이메일을 전송해주세요');
    } else if (auth.errorCode == NOT_MATCH_SECRET) {
      errorSecret(true, '인증번호가 틀렸습니다.');
    } else if (auth.errorCode == EXPIRE_AUTH_NUMBER) {
      errorSecret(true, '인증번호가 만료되었습니다.');
    } else if (auth.authSuccess) {
      setIsView(true);
      dispatch(setFindAccount(email));
      auth.errorCode = null;
      auth.authSuccess = false;
    }
  }, [auth.errorCode, auth.authSuccess]);

  useEffect(() => {}, []);
  return (
    <div>
      <S.Title>아이디 찾기</S.Title>
      <form>
        <IdfForm isView={isView}>
          <IdInput
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 입력 (인증번호가 전송됩니다.)"
            isError={isEmailError}
            errorMessage={emailMessage}
          />
          <AuthNumber
            type="ACCOUNT"
            isEmail={isEmail}
            email={email}
            emailMessage={emailMessage}
            errorEmail={errorEmail}
            secret={secret}
            setSecret={setSecret}
            isSecretError={isSecretError}
            secretMessage={secretMessage}
            errorSecret={errorSecret}
          />
        </IdfForm>
      </form>
      {isDisabled ? (
        <NextButton isView={isView} style={{ background: 'gray' }} disabled={true} type="button">
          다음
        </NextButton>
      ) : (
        <NextButton isView={isView} onClick={authClick}>
          다음
        </NextButton>
      )}
      <FindAccountText isView={isView}>아이디는 {auth.blindAccount}입니다.</FindAccountText>
    </div>
  );
};

export default FindId;
