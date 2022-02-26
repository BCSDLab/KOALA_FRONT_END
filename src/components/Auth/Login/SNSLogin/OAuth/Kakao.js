import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getOAuthToken, socialLogin } from 'store/auth';
import { uuid } from 'api/logined';
import { KAKAO } from '.';
import styled from 'styled-components';
import * as S from '../../../styles';
import AlertModal from 'components/Shared/AlertModal';

const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  alignitems: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    padding: 0 16px;
  }
`;

const Box = styled.div`
  width: 368px;
  padding-top: 200px;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    padding-top: 54px;
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    padding-top: 48px;
    width: 328px;
  }
`;

const MainLogo = styled(S.MainLogo)`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: flex;
  }
`;

const Kakao = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, isOAuthTrue } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);
  const [modalDesc, setModalDesc] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalConfirmText, setModalConfirmText] = useState('');
  const [seconds, setSeconds] = useState(parseInt('00'));

  const code = new URL(window.location.href).searchParams.get('code');

  let deviceToken;
  if (!localStorage.getItem('user_token')) {
    deviceToken = uuid();
    localStorage.setItem('user_token', `webuser+${deviceToken}`);
  } else {
    deviceToken = localStorage.getItem('user_token');
  }

  const onConfirm = () => {
    navigate('/auth');
  };

  useEffect(() => {
    dispatch(
      getOAuthToken({
        uri: KAKAO.OAUTH_URI,
        clientId: KAKAO.CLIENT_ID,
        redirectUri: KAKAO.REDIRECT_URI,
        code,
      })
    );
  }, []);

  useEffect(() => {
    if (isOAuthTrue) {
      dispatch(socialLogin({ snsType: 'kakao', deviceToken }));
    }
  }, [isOAuthTrue]);

  useEffect(() => {
    if (!isLoggedIn) {
      setModalTitle('카카오 로그인에 실패했습니다.');
      setModalDesc(`카카오 로그인 오류`);
      setModalConfirmText('돌아가기');
    } else {
      setModalTitle('카카오 로그인에 성공했습니다.');
      setModalDesc('3초 뒤에 홈 화면으로 돌아갑니다.');
      setModalConfirmText('홈으로');
      setSeconds('3');
    }

    if (isLoggedIn === isOAuthTrue) setVisible(true);
  }, [isLoggedIn]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
        setModalDesc(seconds + '초 뒤에 홈 화면으로 돌아갑니다.');
      }
      if (parseInt(seconds) === 0) {
        setModalDesc('홈 화면으로 돌아갑니다.');
        clearInterval(countdown);
        // navigate('/auth');
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <AuthTemplateBlock>
      <Box>
        <MainLogo>
          <S.MainLogoImg />
        </MainLogo>

        <p> 카카오 로그인중...</p>

        <AlertModal
          type="confirm"
          title={modalTitle}
          desc={modalDesc}
          confirmText={modalConfirmText}
          onConfirm={onConfirm}
          visible={visible}
        />
      </Box>
    </AuthTemplateBlock>
  );
};

export default Kakao;
