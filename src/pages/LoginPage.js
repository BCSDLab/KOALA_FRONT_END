import React from 'react';

// eslint-disable-next-line sort-imports
import AuthMainForm from 'components/Login/AuthMainForm';
import AuthTemplate from 'components/Login/AuthTemplate';

const LoginPage = () => (
  <AuthTemplate>
    <AuthMainForm />
  </AuthTemplate>
);

export default LoginPage;
