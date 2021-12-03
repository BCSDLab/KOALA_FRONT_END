import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
