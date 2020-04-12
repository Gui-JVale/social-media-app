import React, { useState } from 'react';

import FormInput from '../../atoms/form-input/form-input.component';

const RegisterForm = ({ register }) => {
  const [ registerFields, setRegisterFields] = useState({
    email: "",
    username: "",
    picture: "",
    password: "",
    confirmPassword: ""
  });

  const { email, username, password, confirmPassword, picture } = registerFields;

  const handleSubmit = async e =>{
    try {
      e.preventDefault();
      await register(email, username, picture,  password, confirmPassword);
    }catch(e) {
      console.log(e)
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setRegisterFields({...registerFields, [name]: value })
  }

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required 
        />
        <FormInput
          name="username"
          type="text"
          value={username}
          handleChange={handleChange}
          label="Username"
          required 
        />
        <FormInput
          name="picture"
          type="text"
          value={picture}
          handleChange={handleChange}
          label="Profile Picture Url"
          required 
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required 
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required 
        />
        <div className="button">
          <button  type="submit">Register</button>
        </div>
      </form>
    </div>
  )
};

export default RegisterForm