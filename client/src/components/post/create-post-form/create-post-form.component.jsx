import React from 'react';

import useFormFields from '../../../hooks/use-form-fields';

import FormInput from '../../atoms/form-input/form-input.component';

const CreatePostForm = ({ createPost }) => {
  const { handleChange, values } = useFormFields({ body: ''})

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await createPost(values.body);
    }catch(e) {
      console.log(e)
    }
  };

  return (
    <div className="create-post-form">
      <form onSubmit={handleSubmit} className="form">
        <FormInput
          name="body"
          type="textarea"
          value={values.body}
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