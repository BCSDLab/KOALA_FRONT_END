import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import AuthPage from 'pages/AuthPage';
import AuthMainForm from 'components/Auth/AuthMainForm';
import IdFindForm from 'components/Auth/IdFindForm';
import PwdFindForm from 'components/Auth/PwdFindForm';
import RegisterDocForm from 'components/Auth/RegisterDocForm';
import RegisterForm from 'components/Auth/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthPage />}>
        <Route index element={<AuthMainForm />} />
        <Route path="register" element={<RegisterDocForm />} />
        <Route path="registerform" element={<RegisterForm />} />
        <Route path="idfind" element={<IdFindForm />} />
        <Route path="pwdfind" element={<PwdFindForm />} />
      </Route>
    </Routes>
  );
}

export default App;
