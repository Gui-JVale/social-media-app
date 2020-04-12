import React, { useState } from 'react'; 
import { withRouter } from 'react-router-dom';

import FormInput from '../../atoms/form-input/form-input.component'; 

const LoginForm = ({ login, history }) => {
  const [ userCredentials, setUserCredentials ] = useState({ 
    username: "", 
    password: ""
  });

  const { username, password } = userCredentials; 

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      await login( username, password );
      return history.push('/');
    } catch(e) {
      console.log(e)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({...userCredentials,  [name]: value });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} className="form">
        <FormInput 
          name="username"  
          type="text" 
          value={username} 
          handleChange={handleChange}
          label="Username"
          required />
        <FormInput 
          name="password" 
          type="password" 
          value={password} 
          handleChange={handleChange}
          label="Password"
          required />
        <div className="button">
          <button  type="submit" >Login</button>
        </div>
      </form>

    </div>
  )
};

export default withRouter(LoginForm);