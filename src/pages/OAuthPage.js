import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Google from 'components/Auth/Login/SNSLogin/OAuth/Google';
import Naver from 'components/Auth/Login/SNSLogin/OAuth/Naver';
import Kakao from 'components/Auth/Login/SNSLogin/OAuth/Kakao';

const OAuthPage = () => (
  <Routes>
    <Route path="google" element={<Google />} />
    <Route path="naver" element={<Naver />} />
    <Route path="kakao" element={<Kakao />} />
  </Routes>
);

export default OAuthPage;
