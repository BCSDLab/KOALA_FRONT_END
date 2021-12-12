import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router';
import { refresh } from 'store/auth';
import AuthPage from 'pages/AuthPage';
import Login from 'components/Auth/Login';
import IdFind from 'components/Auth/IdFind';
import PwdFind from 'components/Auth/PwdFind';
import RegisterDoc from 'components/Auth/RegisterDoc';
import Register from 'components/Auth/Register';
import PwdChange from 'components/Auth/PwdChange';
import MainPage from 'pages/mainPage';
import { getCookie } from 'components/Shared/Cookies';

const App = () => {
  const dispatch = useDispatch();
  const update = useSelector((state) => state.auth.token);

  useEffect(() => {
    refresh.refresh_token = getCookie('refresh_token');
    console.log(update.refresh_token);
    dispatch(refresh({ update }));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} exact />
      <Route path="auth/*" element={<AuthPage />}>
        <Route index element={<Login />} />
        <Route path="register" element={<RegisterDoc />} />
        <Route path="registerform" element={<Register />} />
        <Route path="idfind" element={<IdFind />} />
        <Route path="pwdfind" element={<PwdFind />} />
        <Route path="pwdchange" element={<PwdChange />} />
      </Route>
    </Routes>
  );
};

export default App;
