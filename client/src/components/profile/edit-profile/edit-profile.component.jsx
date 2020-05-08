import React from 'react';

import { default as EditProfilePicture } from '../../../containers/edit-profile-picture.container';
import { default as EditBio } from '../../../containers/edit-bio.container';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <EditBio />
      <EditProfilePicture />
    </div>
  );
};

export default EditProfile;
