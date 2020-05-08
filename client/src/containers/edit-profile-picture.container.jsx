import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { CLIENT__GET_CURRENT_USER_PICTURE } from '../graphql/queries';
import { EDIT_PROFILE_PICTURE } from '../graphql/mutations';

import EditProfilePicture from '../components/profile/edit-profile-picture/edit-profile-picture.component';

const EditProfilePictureContainer = () => {
  const { data } = useQuery(CLIENT__GET_CURRENT_USER_PICTURE);
  const [editProfilePicture] = useMutation(EDIT_PROFILE_PICTURE);

  return (
    <EditProfilePicture
      picture={data.currentUser.picture}
      editProfilePicture={(imgUrl) =>
        editProfilePicture({ variables: { imgUrl } })
      }
    />
  );
};

export default EditProfilePictureContainer;
