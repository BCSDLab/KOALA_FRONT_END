import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { refresh } from 'store/auth';
import AuthPage from 'pages/AuthPage';
import Login from 'components/Auth/Login';
import FindId from 'components/Auth/FindId';
import FindPw from 'components/Auth/FindPw';
import RegisterDoc from 'components/Auth/RegisterDoc';
import Register from 'components/Auth/Register';
import ChangePw from 'components/Auth/ChangePw';
import MainPage from 'pages/mainPage';
import { setRefreshOnHeader } from 'api/logined';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setRefreshOnHeader();
    dispatch(refresh());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} exact />
      <Route path="auth/*" element={<AuthPage />}>
        <Route index element={<Login />} />
        <Route path="createLog" element={<RegisterDoc />} />
        <Route path="createAccount" element={<Register />} />
        <Route path="findId" element={<FindId />} />
        <Route path="findPw" element={<FindPw />} />
        <Route path="changePw" element={<ChangePw />} />
      </Route>
    </Routes>
  );
};

export default App;
