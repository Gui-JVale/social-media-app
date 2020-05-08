import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { CLIENT__GET_CURRENT_USER_PICTURE } from '../graphql/queries';

import EditProfilePicture from '../components/profile/edit-profile-picture/edit-profile-picture.component';

const EditProfilePictureContainer = () => {
  const [getPicture, { called, data }] = useLazyQuery(
    CLIENT__GET_CURRENT_USER_PICTURE
  );

  if (!called) {
    return <EditProfilePicture getPicture={getPicture} />;
  }

  return <EditProfilePicture picture={data.currentUser.picture} />;
};

export default EditProfilePictureContainer;
