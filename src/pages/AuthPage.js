import React from 'react';
import Auth from 'components/Auth';
import { Outlet } from 'react-router';

const AuthPage = () => (
  <Auth>
    <Outlet />
  </Auth>
);

export default AuthPage;
