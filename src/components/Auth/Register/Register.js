import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import PwdInput from 'components/Auth/Shared/PwdInput';
import CommonInput from 'components/Auth/Shared/CommonInput';
import { ACCOUNT_ERROR, EMAIL_ERROR, NICKNAME_ERROR, LOGIN } from 'constant';
import { signUp } from 'store/auth';
import TitleSection from 'components/Shared/TitleSection';
import useMatchMedia from 'hooks/useMatchMedia';
import theme from 'theme';
import AlertModal from 'components/Shared/AlertModal';

const ContentDescSection = styled(S.ContentDescSection)`
  margin-bottom: 24px;
`;

const NextButton = styled(Button)`
  margin-top: 0;
`;

const queries = ['(max-width: ' + theme.deviceSizes.mobileL + ')'];
const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorCode, authError } = useSelector((state) => state.auth);

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const [accountMessage, setAccountMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [nicknameMessage, setNicknameMessage] = useState('');

  const [isAccount, setIsAccount] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isNickname, setIsNickname] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [mobile] = useMatchMedia(queries);

  const onSubmit = (e) => {
    e.preventDefault();
    const find_email = email;
    if (password === passwordConfirm) {
      dispatch(signUp({ account, password, find_email, nickname }));
    } else {
      setPasswordConfirmMessage('??????????????? ????????????');
      setIsPasswordConfirm(false);
    }
  };

  const onConfirm = () => {
    navigate('/auth');
  };

  const onChangeAccount = (e) => {
    const accountRegex = /^(?=.*[a-z,-_, 0-9]).{4,20}$/;
    const accountCurrent = e.target.value;
    setAccount(accountCurrent);
    if (!accountRegex.test(accountCurrent)) {
      setAccountMessage('4~20?????? ?????? ?????????, ????????? ????????????(_),(-)??? ?????????????????????');
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
      setPasswordMessage('??????+?????????+???????????? ???????????? 8?????? ?????? ??????????????????');
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
        setPasswordConfirmMessage('??????????????? ????????????');
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
      setEmailMessage('????????? ????????? ???????????? ????????????.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  }, []);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 10) {
      setNicknameMessage('2?????? ?????? 10?????? ???????????? ??????????????????.');
      setIsNickname(false);
    } else {
      setNicknameMessage('');
      setIsNickname(true);
    }
  }, []);

  useEffect(() => {
    if (isAccount && isPassword && isPasswordConfirm && isEmail && isNickname) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isAccount, isPassword, isPasswordConfirm, isEmail, isNickname]);

  useEffect(() => {
    if (errorCode == ACCOUNT_ERROR) {
      setAccountMessage('?????? ????????? ??????????????????.');
      setIsAccount(false);
    } else if (errorCode == NICKNAME_ERROR) {
      setNicknameMessage('?????? ???????????? ??????????????????.');
      setIsNickname(false);
    } else if (errorCode == EMAIL_ERROR) {
      setEmailMessage('?????? ???????????? ????????? ?????????.');
      setIsEmail(false);
    }
    if (errorCode === 201 && isAccount && isPassword && isPasswordConfirm && isEmail && isNickname) {
      setVisible(true);
    }
  }, [errorCode]);

  return (
    <>
      <S.ContentWrapper>
        <TitleSection title="????????????" />
        <S.ContentSection>
          <ContentDescSection>
            <S.DescTitle>???????????? ??????</S.DescTitle>
            <S.DescText>????????? ?????? ????????? ??????????????????.</S.DescText>
          </ContentDescSection>

          <form onSubmit={onSubmit}>
            <CommonInput
              name="account"
              value={account}
              onChange={onChangeAccount}
              placeholder="?????????"
              error={accountMessage}
              isError={accountMessage !== ''}
              errorMessage={accountMessage}
            />
            <PwdInput
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder={mobile ? '???????????? (??????, ??????, ???????????? ?????? 8???~15???)' : '???????????? ??????'}
              error={passwordMessage}
              isError={passwordMessage !== ''}
              errorMessage={passwordMessage}
            />
            <PwdInput
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
              placeholder="???????????? ??????"
              error={passwordConfirmMessage}
              isError={passwordConfirmMessage !== ''}
              errorMessage={passwordConfirmMessage}
            />
            <CommonInput
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="?????????"
              error={emailMessage}
              isError={emailMessage !== ''}
              errorMessage={emailMessage}
            />
            <CommonInput
              name="nickname"
              value={nickname}
              onChange={onChangeNickname}
              placeholder="?????????"
              error={nicknameMessage}
              isError={nicknameMessage !== ''}
              errorMessage={nicknameMessage}
            />

            <S.BottomProgressBar>
              <S.ProgressBarSection>
                <S.ProgressCircle />
                <S.ProgressCircle isOnProgress={true} />
              </S.ProgressBarSection>

              <NextButton disabled={isDisabled} type={isDisabled ? 'button' : 'submit'}>
                ??????
              </NextButton>
            </S.BottomProgressBar>
          </form>
        </S.ContentSection>
      </S.ContentWrapper>
      <AlertModal
        type="confirm"
        title="??????????????? ???????????????."
        desc="???????????????.
              ?????? ?????? Koala??? ????????? ??????????"
        confirmText="??????????????? ??????"
        onConfirm={onConfirm}
        visible={visible}
      />
    </>
  );
};

export default RegisterForm;
