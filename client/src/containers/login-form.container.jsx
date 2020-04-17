import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { LOGIN_USER } from '../graphql/mutations';

import LoginForm from '../components/general/login-form/login-form.component';

const LoginFormContainer = () => {
  const [login] = useMutation(LOGIN_USER);
  return <LoginForm login={ (username, password) => login({ variables: { username, password }})} />
};

export default LoginFormContainer;