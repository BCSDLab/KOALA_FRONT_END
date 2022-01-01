import React, { useCallback, useState } from 'react';
import * as S from './styles';

const AutoLogin = () => {
  const [isAuto, setIsAuto] = useState(false);

  const check = useCallback(() => {
    setIsAuto((prev) => !prev);
  });
  return (
    <S.AutoLoginContent>
      <S.AutoLoginTitle>자동로그인 </S.AutoLoginTitle>
      <S.AutoLoginCheck onClick={check} src={isAuto ? '/asset/CheckCircleOn.svg' : '/asset/CheckCircleOff.svg'} />
    </S.AutoLoginContent>
  );
};

export default AutoLogin;
