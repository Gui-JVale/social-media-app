import React from 'react';

import FormInput from '../../atoms/form-input/form-input.component';

import useFormFields from '../../../hooks/use-form-fields';

const EditBio = () => {
  return (
    <div className="edit-bio">
      <div className="edit-bio__link">Edit Bio</div>
      <div className="edit-bio__edit-mode">
        <form onSubmit={(e) => e.preventDefault()}>
          <FormInput name="bio" type="text" label="Tell more about you" />
        </form>
      </div>
    </div>
  );
};

export default EditBio;
