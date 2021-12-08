import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router';
import { getCookie } from 'components/Shared/Cookies';
import AuthPage from 'pages/AuthPage';
import AuthMainForm from 'components/Auth/AuthMainForm';
import IdFindForm from 'components/Auth/IdFindForm';
import PwdFindForm from 'components/Auth/PwdFindForm';
import RegisterDocForm from 'components/Auth/RegisterDocForm';
import RegisterForm from 'components/Auth/RegisterForm';
import PwdChange from 'components/Auth/PwdChange';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const check = getCookie('refresh_token');
    console.log(check);

    axios
      .post('https://api.stage.koala.im/user/refresh', null, {
        headers: {
          Authorization: `Bearer ${check}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <Routes>
      <Route path="auth/*" element={<AuthPage />}>
        <Route index element={<AuthMainForm />} />
        <Route path="register" element={<RegisterDocForm />} />
        <Route path="registerform" element={<RegisterForm />} />
        <Route path="idfind" element={<IdFindForm />} />
        <Route path="pwdfind" element={<PwdFindForm />} />
        <Route path="pwdchange" element={<PwdChange />} />
      </Route>
    </Routes>
  );
};

export default App;
