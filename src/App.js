import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import AuthPage from 'pages/AuthPage';
import AuthMainForm from 'components/Login/AuthMainForm';
import IdFindForm from 'components/Login/IdFindForm';
import PwdFindForm from 'components/Login/PwdFindForm';
import RegisterDocForm from 'components/Login/RegisterDocForm';
import RegisterForm from 'components/Login/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthPage />}>
        <Route index element={<AuthMainForm />} />
        <Route path="register/*" element={<RegisterDocForm />}>
          <Route path="registerform" index element={<RegisterForm />} />
        </Route>
        <Route path="idfind" element={<IdFindForm />} />
        <Route path="pwdfind" element={<PwdFindForm />} />
      </Route>
    </Routes>
  );
}

export default App;
