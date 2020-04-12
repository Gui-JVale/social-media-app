import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import LoginForm from '../components/general/login-form/login-form.component';

const LOGIN_USER = gql`
  mutation login (
    $username: String!, $password: String!
  ) {
    login(username: $username, password: $password) {
      id
      username
      profilePicture
    }
  }
`;


const LoginFormContainer = () => {
  const [login] = useMutation(LOGIN_USER);
  return <LoginForm login={ (username, password) => login({ variables: { username, password }})} />
};

export default LoginFormContainer;