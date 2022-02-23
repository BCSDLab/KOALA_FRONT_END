import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socialLogin } from 'store/auth';
import { uuid } from 'api/logined';
import AlertModal from 'components/Shared/AlertModal';

const Naver = (props) => {
  const dispatch = useDispatch();
  const { authError, errorCode, isLoggedIn } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);
  const [modalDesc, setModalDesc] = useState('');

  let accessToken = new URL(window.location.href).hash.split('&')[0].split('=')[1];

  let deviceToken;
  if (!localStorage.getItem('user_token')) {
    deviceToken = uuid();
    localStorage.setItem('user_token', `webuser+${deviceToken}`);
  } else {
    deviceToken = localStorage.getItem('user_token');
  }

  const onConfirm = () => {
    setVisible(false);
    window.close();
  };

  useEffect(() => {
    if (errorCode) {
      const ErrorMessage = authError.response.data.errorMessage;
      setModalDesc(`${errorMessage} (${errorCode})`);
      setVisible(true);
      return;
    }

    if (errorCode === '' && isLoggedIn) {
      setModalDesc('홈화면으로 돌아갑니다.');
      setVisible(true);
    }
  }, [errorCode, isLoggedIn]);

  useEffect(async () => {
    await dispatch(socialLogin({ snsType: 'naver', deviceToken, accessToken }));
  }, []);

  return (
    <>
      <p> 네이버 로그인중...</p>

      <AlertModal
        type="confirm"
        title={`네이버 로그인에 ${isLoggedIn ? '성공' : '실패'}했습니다.`}
        desc={modalDesc}
        confirmText="닫기"
        onConfirm={onConfirm}
        visible={visible}
      />
    </>
  );
};

export default Naver;
