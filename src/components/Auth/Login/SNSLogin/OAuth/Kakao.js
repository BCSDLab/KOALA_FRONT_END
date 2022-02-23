import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { kakaoLogin } from 'store/auth';
import { uuid } from 'api/logined';
import AlertModal from 'components/Shared/AlertModal';

const Kakao = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authError, errorCode, isLoggedIn } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const code = new URL(window.location.href).searchParams.get('code');

  let deviceToken;
  if (!localStorage.getItem('user_token')) {
    deviceToken = uuid();
    localStorage.setItem('user_token', `webuser+${deviceToken}`);
  } else {
    deviceToken = localStorage.getItem('user_token');
  }

  useEffect(async () => {
    await dispatch(kakaoLogin({ snsType: 'kakao', deviceToken, code }));
    console.log({ code });
  }, []);

  useEffect(() => {
    if (errorCode) {
      setErrorMessage(authError.response.data.errorMessage);
      setVisible(true);
      return;
    }

    if (errorCode === '' && isLoggedIn) {
      alert('success');
    }
  }, [errorCode]);

  const onConfirm = () => {
    navigate('/auth');
  };

  return (
    <>
      <p> 카카오 로그인중...</p>

      <AlertModal
        type="confirm"
        title="카카오 로그인에 실패했습니다."
        desc={`${errorMessage} (${errorCode})`}
        confirmText="돌아가기"
        onConfirm={onConfirm}
        visible={visible}
      />
    </>
  );
};

export default Kakao;
