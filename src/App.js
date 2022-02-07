import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LOGIN } from './constant';
import { refresh } from 'store/auth';
import { getUserInfo } from 'store/myPage';
import AuthPage from 'pages/AuthPage';
import Login from 'components/Auth/Login/Login';
import FindId from 'components/Auth/Find/FindId';
import FindPw from 'components/Auth/Find/FindPw';
import RegisterDoc from 'components/Auth/Register/RegisterDoc';
import Register from 'components/Auth/Register/Register';
import MainPage from 'pages/mainPage';
import { setTokenOnHeader } from 'api/logined';
import { getCookie } from 'components/Shared/Cookies';
import MyPage from 'pages/MyPage';
import ChatPage from 'pages/ChatPage';
import ChatAuth from 'components/Chat/ChatAuth';
import Unauth from 'components/Chat/Unauth';
import KeywordPage from 'pages/KeywordPage';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import AddKeyword from 'components/Keyword/AddKeyword';
import ModifyKeyword from 'components/Keyword/ModifyKeyword';

const AuthorizedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === null) {
    return <div>로딩중입니다.</div>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={LOGIN} replace={true} />;
};

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const token = getCookie('refresh_token');
    setTokenOnHeader(token);
    dispatch(refresh());
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
    }
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="auth/*" element={<AuthPage />}>
          <Route index element={<Login />} />
          <Route path="createLog" element={<RegisterDoc />} />
          <Route path="createAccount" element={<Register />} />
          <Route path="findId" element={<FindId />} />
          <Route path="findPw" element={<FindPw />} />
        </Route>

        <Route path="keyword/*" element={<KeywordPage />}>
          <Route index element={<KeywordFilterBar />}></Route>
          <Route path="create" element={<AddKeyword />}></Route>
          <Route path="modify" element={<ModifyKeyword />}></Route>
        </Route>
        <Route element={<AuthorizedRoute />}>
          <Route exact path="chat/*" element={<ChatPage />}>
            <Route path="auth" element={<ChatAuth />} />
            <Route path="unauth" element={<Unauth />} />
          </Route>
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
