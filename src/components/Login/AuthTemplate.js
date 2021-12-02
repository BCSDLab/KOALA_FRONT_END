import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div``;

// eslint-disable-next-line react/prop-types
const AuthTemplate = ({ children }) => <AuthTemplateBlock>{children}</AuthTemplateBlock>;

export default AuthTemplate;
