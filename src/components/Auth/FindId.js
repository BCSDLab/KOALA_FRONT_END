import React, { useState, useCallback, useEffect } from 'react';
import AuthNumber from 'components/Shared/AuthNumber';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import IdInput from 'components/Auth/Shared/IdInput';
import styled from 'styled-components';

const IdfForm = styled.div`
  margin-bottom: 120px;
`;

const NextButton = styled(Button)`
  margin-top: 0;
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
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
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

  useEffect(() => {
    setIsDisabled(!isEmail);
  }, [isEmail]);

  return (
    <div>
      <form>
        <IdfForm>
          <S.Title>아이디 찾기</S.Title>
          <IdInput
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 입력 (인증번호가 전송됩니다.)"
            isError={emailMessage !== ''}
            errorMessage={emailMessage}
          />
          <AuthNumber isEmail={isEmail} />
        </IdfForm>

        <NextButton disabled={isDisabled}>다음</NextButton>
      </form>
    </div>
  );
};

export default FindId;
