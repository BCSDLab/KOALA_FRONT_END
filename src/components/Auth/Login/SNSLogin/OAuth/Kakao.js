import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { kakaoLogin, socialLogin } from 'store/auth';
import { uuid } from 'api/logined';
import AlertModal from 'components/Shared/AlertModal';

const Kakao = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authError, errorCode, isLoggedIn, isKakaoAuthTrue } = useSelector((state) => state.auth);
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
    await dispatch(kakaoLogin({ deviceToken, code }));
  }, []);

  useEffect(async () => {
    if (isKakaoAuthTrue) {
      await dispatch(socialLogin({ snsType: 'kakao', deviceToken }));
    }
  }, [isKakaoAuthTrue]);

  useEffect(() => {
    if (authError) {
      setModalDesc(`카카오 로그인 오류`);
      setVisible(true);
      return;
    }

    if (authError === null && isLoggedIn) {
      setModalDesc('홈 화면으로 돌아갑니다.');
      setVisible(true);
    }
  }, [authError]);

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
        confirmText="돌아가기"
        onConfirm={onConfirm}
        visible={visible}
      />
    </>
  );
};

export default Kakao;
