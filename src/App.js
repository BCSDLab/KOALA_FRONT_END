import React from 'react';
// eslint-disable-next-line sort-imports
import './App.css';
import { Route, Routes } from 'react-router';
// eslint-disable-next-line sort-imports
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

function App() {
  return (
    <div>
      <LoginPage />
      <Routes>
        <Route component={LoginPage} path="/login" exact />
        <Route component={RegisterPage} path="/register" exact />
      </Routes>
    </div>
  );
}

export default App;
