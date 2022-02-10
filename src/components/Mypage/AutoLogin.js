import React, { useCallback, useState } from 'react';
import * as S from './styles';

const AutoLogin = () => {
  const [isAuto, setIsAuto] = useState(JSON.parse(localStorage.getItem('isAuto')));

  const check = () => {
    if (isAuto === null || isAuto === false) {
      localStorage.setItem('isAuto', true);
    } else {
      localStorage.setItem('isAuto', false);
    }
    setIsAuto((prev) => !prev);
  };

  return (
    <S.AutoLoginContent>
      <S.AutoLoginTitle>자동로그인 </S.AutoLoginTitle>
      <S.AutoLoginCheck src={isAuto ? '/asset/CheckCircleOn.svg' : '/asset/CheckCircleOff.svg'} onClick={check} />
    </S.AutoLoginContent>
  );
};

export default AutoLogin;
