import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import PwdInput from 'components/Auth/Shared/PwdInput';
import CommonInput from 'components/Auth/Shared/CommonInput';
import { ACCOUNT_ERROR, EMAIL_ERROR, NICKNAME_ERROR } from 'constant';
import { signUp } from 'store/auth';
import TitleSection from 'components/Shared/TitleSection';
import useMatchMedia from 'hooks/useMatchMedia';
import theme from 'theme';

const ContentDescSection = styled(S.ContentDescSection)`
  margin-bottom: 24px;
`;

const NextButton = styled(Button)`
  margin-top: 0;
`;

const queries = ['(max-width: ' + theme.deviceSizes.mobileL + ')'];

const RegisterForm = () => {
  const dispatch = useDispatch();
  const errorCode = useSelector((state) => state.auth.errorCode);

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');

  const [accountMessage, setAccountMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [nickNameMessage, setNickNameMessage] = useState('');

  const [isAccount, setIsAccount] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isNickName, setIsNickName] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const [mobile] = useMatchMedia(queries);

  const onSubmit = (e) => {
    e.preventDefault();
    const find_email = email;
    dispatch(signUp({ account, password, find_email, nickName }));
  };

  const onChangeAccount = (e) => {
    const accountRegex = /^(?=.*[a-z,-_, 0-9]).{4,20}$/;
    const accountCurrent = e.target.value;
    setAccount(accountCurrent);
    if (!accountRegex.test(accountCurrent)) {
      setAccountMessage('4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용가능합니다');
      setIsAccount(false);
    } else {
      setAccountMessage('');
      setIsAccount(true);
    }
  };
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,18}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요');
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('');
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage('비밀번호가 다릅니다');
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (!emailRegex.test(currentEmail)) {
      setEmailMessage('이메일 형식이 일치하지 않습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  }, []);

  const onChangeNickName = useCallback((e) => {
    setNickName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNickNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
      setIsNickName(false);
    } else {
      setNickNameMessage('');
      setIsNickName(true);
    }
  }, []);

  useEffect(() => {
    if (isAccount && isPassword && isPasswordConfirm && isEmail && isNickName) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isAccount, isPassword, isPasswordConfirm, isEmail, isNickName]);

  useEffect(() => {
    if (errorCode == ACCOUNT_ERROR) {
      setAccountMessage('이미 존재하는 계정입니다.');
      setIsAccount(false);
    } else if (errorCode == NICKNAME_ERROR) {
      setNickNameMessage('이미 존재하는 닉네임입니다.');
      setIsNickName(false);
    } else if (errorCode == EMAIL_ERROR) {
      setEmailMessage('이미 존재하는 이메일 입니다.');
      setIsEmail(false);
    }
  }, [errorCode]);

  return (
    <S.ContentWrapper>
      <TitleSection title="회원가입" />
      <S.ContentSection>
        <ContentDescSection>
          <S.DescTitle>회원정보 입력</S.DescTitle>
          <S.DescText>사용할 회원 정보를 입력해주세요.</S.DescText>
        </ContentDescSection>

        <form onSubmit={onSubmit}>
          <CommonInput
            name="account"
            value={account}
            onChange={onChangeAccount}
            placeholder="아이디"
            error={accountMessage}
            isError={accountMessage !== ''}
            errorMessage={accountMessage}
          />
          <PwdInput
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder={mobile ? '비밀번호 (영문, 숫자, 특수기호 포함 8자~15자)' : '비밀번호 입력'}
            error={passwordMessage}
            isError={passwordMessage !== ''}
            errorMessage={passwordMessage}
          />
          <PwdInput
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            placeholder="비밀번호 확인"
            error={passwordConfirmMessage}
            isError={passwordConfirmMessage !== ''}
            errorMessage={passwordConfirmMessage}
          />
          <CommonInput
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일"
            error={emailMessage}
            isError={emailMessage !== ''}
            errorMessage={emailMessage}
          />
          <CommonInput
            name="nickName"
            value={nickName}
            onChange={onChangeNickName}
            placeholder="닉네임"
            error={nickNameMessage}
            isError={nickNameMessage !== ''}
            errorMessage={nickNameMessage}
          />

          <S.BottomProgressBar>
            <S.ProgressBarSection>
              <S.ProgressCircle />
              <S.ProgressCircle isOnProgress={true} />
            </S.ProgressBarSection>

            <NextButton disabled={isDisabled} type={isDisabled ? 'button' : 'submit'}>
              다음
            </NextButton>
          </S.BottomProgressBar>
        </form>
      </S.ContentSection>
    </S.ContentWrapper>
  );
};

export default RegisterForm;
