import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Auth.scss';

const Auth = () => (
  <div className="auth-page">
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
