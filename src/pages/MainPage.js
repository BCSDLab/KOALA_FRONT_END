import React from 'react';
import useAuth from 'hooks/useAuth';
import KeywordPage from './KeywordPage';

const mainPage = () => {
  useAuth();

  return <KeywordPage />;
};

export default mainPage;
