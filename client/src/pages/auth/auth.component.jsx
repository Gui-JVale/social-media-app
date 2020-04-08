import React, { useState } from 'react';

import { default as LoginForm } from '../../components/general/login-form/login-form.container';
import { default as RegisterForm } from '../../components/general/register-form/register-form.container';

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(true)
  return (
    isLoginPage ? (
      <div className="login-page">
        <LoginForm />
        <p>
          First Time?
          <button onClick={() => setIsLoginPage(!isLoginPage)}>Register</button>
        </p>
      </div>
    ) : (
      <div className="register-page">
        <RegisterForm />
        <p>
          Already Have an Account?
          <button onClick={() => setIsLoginPage(!isLoginPage)}>Log in</button>
        </p>
      </div>
    )
  );

}
  

export default AuthPage;