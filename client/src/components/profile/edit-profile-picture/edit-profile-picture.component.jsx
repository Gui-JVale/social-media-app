import React from 'react';

import FormInput from '../../atoms/form-input/form-input.component';

import useFormFields from '../../../hooks/use-form-fields';

const EditProfilePicture = ({ getPicture, picture }) => {
  const initialState = picture ? { picture } : { picture: '' };

  const { handleChange, values } = useFormFields(
    initialState,
    'picture',
    picture
  );

  return (
    <div className="edit-picture">
      <div className="edit-picture__link" onClick={getPicture}>
        Edit picture
      </div>
      {picture ? (
        <div className="edit-picture__edit-mode">
          <form onSubmit={(e) => e.preventDefault()}>
            <FormInput
              name="picture"
              type="text"
              label="Show us your best self"
              value={values.picture}
              handleChange={handleChange}
            />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default EditProfilePicture;
