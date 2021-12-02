import React from 'react';
// eslint-disable-next-line sort-imports
import AuthMainForm from 'components/Login/AuthMainForm';
import AuthTemplate from 'components/Login/AuthTemplate';

function RegisterPage() {
  return (
    <AuthTemplate>
      <AuthMainForm />
    </AuthTemplate>
  );
}

export default RegisterPage;
