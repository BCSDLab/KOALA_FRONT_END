import { Routes, Route } from 'react-router-dom';
import SideNavbar from 'components/SideNavbar';
import ChatPage from 'pages/ChatPage';
import HistoryPage from 'pages/HistoryPage';
import KeywordPage from 'pages/KeywordPage';
import MyPage from 'pages/MyPage';
import AuthPage from 'pages/AuthPage';
import AuthMainForm from 'components/Auth/AuthMainForm';
import IdFindForm from 'components/Auth/IdFindForm';
import PwdFindForm from 'components/Auth/PwdFindForm';
import RegisterDocForm from 'components/Auth/RegisterDocForm';
import RegisterForm from 'components/Auth/RegisterForm';
import PwdChange from 'components/Auth/PwdChange';
import styled from 'styled-components';
import 'App.css';

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => (
  <Main>
    <SideNavbar />
    <Routes>
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/keyword" element={<KeywordPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="auth/*" element={<AuthPage />}>
        <Route index element={<AuthMainForm />} />
        <Route path="register" element={<RegisterDocForm />} />
        <Route path="registerform" element={<RegisterForm />} />
        <Route path="idfind" element={<IdFindForm />} />
        <Route path="pwdfind" element={<PwdFindForm />} />
        <Route path="pwdchge" element={<PwdChange />} />
      </Route>
    </Routes>
  </Main>
);


export default App;
