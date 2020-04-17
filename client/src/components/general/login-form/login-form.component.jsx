import React from 'react'; 
import { withRouter } from 'react-router-dom';

import useFormField from '../../../hooks/use-form-fields';

import FormInput from '../../atoms/form-input/form-input.component'; 

const LoginForm = ({ login, history }) => {
  const { handleChange, values: { username, password } } = useFormField({ 
    username: "", 
    password: ""
  });


  const handleSubmit = async event => {
    try {
      event.preventDefault();
      await login( username, password );
      return history.push('/');
    } catch(e) {
      console.log(e)
    }
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
          <button  type="submit">Login</button>
        </div>
      </form>

    </div>
  )
};

export default withRouter(LoginForm);