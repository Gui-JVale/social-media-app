import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';

import RegisterForm from '../components/general/register-form/register-form.component';

const CREATE_USER = gql`
  mutation createUser (
    $email: String!
    $username: String! 
    $password: String!
    $confirmPassword: String!
    $picture: String!
  ) {
    createUser (
      createUserInput: {
        email: $email
        username: $username
        password: $password
        confirmPassword: $confirmPassword
        picture: $picture
      }
    ){
      id
      email
      username
      firstName
      lastName
      createdAt
      picture
    }
  }
`;


const RegisterFormContainer = ({ history }) => {
  const [createUser] = useMutation(CREATE_USER, {
    update() {
      return history.push('/');
    }
  });

  return (
    <RegisterForm 
      register={ (email, username, picture, password, confirmPassword) => 
        createUser({ variables: { email, username, picture, password, confirmPassword }})} 
    />
  )
};

export default withRouter(RegisterFormContainer);