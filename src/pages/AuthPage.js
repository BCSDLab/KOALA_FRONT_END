import React from 'react';
import AuthTemplate from 'components/Auth';
import { Outlet } from 'react-router';

const AuthPage = () => (
  <AuthTemplate>
    <Outlet />
  </AuthTemplate>
);

export default AuthPage;
