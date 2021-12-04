import React from 'react';
import AuthMainForm from 'components/Login/AuthMainForm';
import AuthTemplate from 'components/Login';
import { Outlet } from 'react-router';

const AuthPage = () => (
  <AuthTemplate>
    <Outlet />
  </AuthTemplate>
);

export default AuthPage;
