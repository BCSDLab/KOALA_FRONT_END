import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { refresh } from 'store/auth';
import theme from './theme';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import AuthPage from 'pages/AuthPage';
import Login from 'components/Auth/Login';
import FindId from 'components/Auth/FindId';
import FindPw from 'components/Auth/FindPw';
import RegisterDoc from 'components/Auth/RegisterDoc';
import Register from 'components/Auth/Register';
import ChangePw from 'components/Auth/ChangePw';
import MainPage from 'pages/MainPage';
import { setTokenOnHeader } from 'api/logined';
import { getCookie } from 'components/Shared/Cookies';
import MyPage from 'pages/MyPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('refresh_token');
    setTokenOnHeader(token);
    dispatch(refresh());
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
        <Routes>
          <Route path="mypage" element={<MyPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
