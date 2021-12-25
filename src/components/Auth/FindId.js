import React, { useState, useCallback, useEffect } from 'react';
import AuthNumber from 'components/Shared/AuthNumber';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import styled from 'styled-components';

const IdfForm = styled.div`
  margin-bottom: 120px;
`;

const StyledInput = styled(S.StyledInput)`
  background-image: ${({ error }) => (error ? `url('/asset/inputError.svg')` : 'none')};
  background-position-y: center;
  background-position-x: 332px;
  background-repeat: no-repeat;
`;

/**
 * TODO:
 * - [x] 이메일 형식 검사 스타일
 * - [] 이메일 전송 후 disabled 처리
 * @returns
 */
const FindId = () => {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');

  const [isDisabled, setIsDisabled] = useState(false);

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 일치하지 않습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  }, []);

  const errorStyle = { border: '1px solid #ffd25d' };

  useEffect(() => {
    if (isEmail && isEmailConfirmed) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isEmail, isEmailConfirmed]);

  return (
    <div>
      <form>
        <IdfForm>
          <S.Title>아이디 찾기</S.Title>
          <StyledInput
            name="email"
            value={email}
            onChange={onChangeEmail}
            style={emailMessage ? errorStyle : null}
            placeholder="이메일 입력 (인증번호가 전송됩니다.)"
            error={emailMessage != ''}
          />
          <S.InputErrorText>{emailMessage}</S.InputErrorText>

          <AuthNumber isEmail={isEmail} />
        </IdfForm>

        {isDisabled ? (
          <Button type="submit">다음</Button>
        ) : (
          <Button style={{ background: '#c4c4c4' }} disabled={true} type="button">
            다음
          </Button>
        )}
      </form>
    </div>
  );
};

export default FindId;
