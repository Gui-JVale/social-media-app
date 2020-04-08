import React, { useState } from 'react';

import FormInput from '../../general/form-input/form-input.component';

const CreatePostForm = ({createPost}) => {
  const [ registerFields, setRegisterFields] = useState({
    body: "",
  });

  const { body } = registerFields;

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await createPost(body);
    }catch(e) {
      console.log(e)
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setRegisterFields({...registerFields, [name]: value })
  }

  return (
    <div className="create-post-form">
      <form onSubmit={handleSubmit} className="form">
        <FormInput
          name="body"
          type="textarea"
          value={body}
          handleChange={handleChange}
          label="How do you feel?"
          required 
        />
        <div className="button">
          <button  type="submit">Post</button>
        </div>
      </form>
    </div>
  )
};

export default CreatePostForm;