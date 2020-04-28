import React from 'react';

import useFormFields from '../../../hooks/use-form-fields';

import FormInput from '../../atoms/form-input/form-input.component';

const SubmitCommentForm = ({ onSubmit, comment }) => {
  const initialState = comment ? { body: comment } : { body: '' };
  const { handleChange, values } = useFormFields(initialState);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await onSubmit(values.body);
      return (values.body = '');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="submit-comment-form">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="body"
          type="textarea"
          value={values.body}
          handleChange={handleChange}
          label="Leave a comment"
          required
        />
        <div className="button">
          <button type="submit">Comment</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitCommentForm;
