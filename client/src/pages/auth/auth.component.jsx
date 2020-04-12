import React, { useState } from 'react';

import { default as LoginForm } from '../../containers/login-form.container';
import { default as RegisterForm } from '../../containers/register-form.container';

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