import React, { useCallback, useState } from 'react';
import { getCookie, setCookie } from '../Shared/Cookies';
import * as S from './styles';

const AutoLogin = () => {
  const isAutoLogedIn = getCookie('isAuto');
  const [isAuto, setIsAuto] = useState(isAutoLogedIn); //만약 true일 시 그 계정에 대한 리프레시 토큰의 유효기간을 1개월로 증가시킨다.
  //자동로그인 체크 여부도 쿠키로 같이 저장한다. 로그인시 자동로그인을 체크하면 isAuto를 true(저장기한 1개월)로 하고 로그인시 쿠키에 저장하는 리프레시 토큰의 기간을 1개월로 연장
  //마이페이지에서 자동 로그인 체크시 isAuto를 true로 한다.

  const check = useCallback(() => {
    setIsAuto((prev) => !prev);
    setCookie('isAuto', isAuto, {
      path: '/',
      expire: 86400 * 30,
    });
  });
  return (
    <S.AutoLoginContent>
      <S.AutoLoginTitle>자동로그인 </S.AutoLoginTitle>
      <S.AutoLoginCheck onClick={check} src={isAuto ? '/asset/CheckCircleOn.svg' : '/asset/CheckCircleOff.svg'} />
    </S.AutoLoginContent>
  );
};

export default AutoLogin;
