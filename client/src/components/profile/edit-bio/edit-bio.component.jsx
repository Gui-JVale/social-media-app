import React, { useState } from 'react';

import FormInput from '../../atoms/form-input/form-input.component';

import useFormFields from '../../../hooks/use-form-fields';
import useEditMode from '../../../hooks/use-edit-mode';

const EditBio = ({ getBio, bio, editBio }) => {
  const { editMode, toggleEditMode } = useEditMode();
  const { handleChange, values } = useFormFields({ bio });

  const onSubmit = (e) => {
    e.preventDefault();
    return editBio(values.bio);
  };

  console.log(bio);
  return (
    <div className="edit-bio">
      <div className="edit-bio__link" onClick={toggleEditMode}>
        Edit Bio
      </div>
      {editMode ? (
        <div className="edit-bio__edit-mode">
          <form onSubmit={onSubmit}>
            <FormInput
              name="bio"
              type="text"
              label="Tell more about you"
              value={values.bio}
              handleChange={handleChange}
            />
            <div className="button">
              <button type="submit">Edit Bio</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default EditBio;
