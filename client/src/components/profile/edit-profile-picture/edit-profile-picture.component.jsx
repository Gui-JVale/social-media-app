import React from 'react';

import FormInput from '../../atoms/form-input/form-input.component';

import useFormFields from '../../../hooks/use-form-fields';
import useEditMode from '../../../hooks/use-edit-mode';

const EditProfilePicture = ({ editProfilePicture, picture }) => {
  const { editMode, toggleEditMode } = useEditMode();
  const initialState = picture ? { picture } : { picture: '' };

  const { handleChange, values } = useFormFields(
    initialState,
    'picture',
    picture
  );

  const onSubmit = (e) => {
    e.preventDefault();
    return editProfilePicture(values.picture);
  };

  return (
    <div className="edit-picture">
      <div className="edit-picture__link" onClick={toggleEditMode}>
        Edit picture
      </div>
      {editMode ? (
        <div className="edit-picture__edit-mode">
          <form onSubmit={onSubmit}>
            <FormInput
              name="picture"
              type="text"
              label="Show us your best self"
              value={values.picture}
              handleChange={handleChange}
            />
            <div className="button">
              <button type="submit">Edit Profile Picture</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default EditProfilePicture;
