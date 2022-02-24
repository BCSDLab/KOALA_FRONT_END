import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getOAuthToken, socialLogin } from 'store/auth';
import { uuid } from 'api/logined';
import { KAKAO } from '.';
import AlertModal from 'components/Shared/AlertModal';
const Kakao = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, isOAuthTrue } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);
  const [modalDesc, setModalDesc] = useState('');

  const code = new URL(window.location.href).searchParams.get('code');

  let deviceToken;
  if (!localStorage.getItem('user_token')) {
    deviceToken = uuid();
    localStorage.setItem('user_token', `webuser+${deviceToken}`);
  } else {
    deviceToken = localStorage.getItem('user_token');
  }

  useEffect(async () => {
    await dispatch(
      getOAuthToken({
        method: 'GET',
        uri: KAKAO.OAUTH_URI,
        clientId: KAKAO.CLIENT_ID,
        redirectUri: KAKAO.REDIRECT_URI,
        code,
      })
    );
  }, []);

  useEffect(async () => {
    if (isOAuthTrue) {
      await dispatch(socialLogin({ snsType: 'kakao', deviceToken }));
    }
  }, [isOAuthTrue]);

  useEffect(() => {
    if (!isLoggedIn) {
      setModalDesc(`카카오 로그인 오류`);
      setVisible(true);
    } else {
      setModalDesc('홈 화면으로 돌아갑니다.');
      setVisible(true);
    }
  }, [isLoggedIn]);

  const onConfirm = () => {
    navigate('/auth');
  };

  return (
    <>
      <p> 카카오 로그인중...</p>

      <AlertModal
        type="confirm"
        title={`카카오 로그인에 ${isLoggedIn ? '성공' : '실패'}했습니다.`}
        desc={modalDesc}
        confirmText={isLoggedIn ? '확인' : '돌아가기'}
        onConfirm={onConfirm}
        visible={visible}
      />
    </>
  );
};

export default Kakao;
