import React from 'react';

import EditProfilePicture from '../edit-profile-picture/edit-profile-picture.component';
import EditBio from '../edit-bio/edit-bio.component';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <EditBio />
      <EditProfilePicture />
    </div>
  );
};

export default EditProfile;
