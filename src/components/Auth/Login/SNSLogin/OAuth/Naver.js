import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMatchMedia from 'hooks/useMatchMedia';
import { useNavigate } from 'react-router';
import { socialLogin } from 'store/auth';
import { uuid } from 'api/logined';
import styled from 'styled-components';
import * as S from '../../../styles';
import AlertModal from 'components/Shared/AlertModal';
import { setNoneBearerTokenOnHeader } from 'api/logined';

const MainLogo = styled(S.MainLogo)`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: flex;
  }
`;

const queries = ['(max-width: 450px)'];
const Naver = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);
  const [modalDesc, setModalDesc] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalConfirmText, setModalConfirmText] = useState('');
  const [seconds, setSeconds] = useState(parseInt('00'));
  const [mobile] = useMatchMedia(queries);

  const token = new URL(window.location.href).hash.split('#')[1].split('&')[0].split('=')[1];

  let deviceToken;
  if (!localStorage.getItem('user_token')) {
    deviceToken = uuid();
    localStorage.setItem('user_token', `webuser+${deviceToken}`);
  } else {
    deviceToken = localStorage.getItem('user_token');
  }

  const onConfirm = () => {
    setVisible(false);
    navigate('/auth');
  };

  useEffect(async () => {
    setNoneBearerTokenOnHeader(token);
    await dispatch(socialLogin({ snsType: 'naver', deviceToken }));
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setModalTitle('네이버 로그인에 실패했습니다.');
      setModalDesc(`네이버 로그인 오류`);
      setModalConfirmText('돌아가기');
    } else {
      setModalTitle('네이버 로그인에 성공했습니다.');
      setModalDesc('3초 뒤에 홈 화면으로 돌아갑니다.');
      setModalConfirmText('홈으로');
      setSeconds('3');
    }

    setVisible(true);
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
        navigate('/auth');
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <>
      {mobile && (
        <MainLogo>
          <S.MainLogoImg />
        </MainLogo>
      )}
      <p> 네이버 로그인중...</p>

      <AlertModal
        type="confirm"
        title={modalTitle}
        desc={modalDesc}
        confirmText={modalConfirmText}
        onConfirm={onConfirm}
        visible={visible}
      />
    </>
  );
};

export default Naver;
