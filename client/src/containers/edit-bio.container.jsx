import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { CLIENT__GET_CURRENT_USER_BIO } from '../graphql/queries';
import { EDIT_BIO } from '../graphql/mutations';

import EditBio from '../components/profile/edit-bio/edit-bio.component';

const EditBioContainer = () => {
  const { data } = useQuery(CLIENT__GET_CURRENT_USER_BIO);
  const [editBio] = useMutation(EDIT_BIO);

  return (
    <EditBio
      bio={data.currentUser.bio}
      editBio={(bio) => editBio({ variables: { bio } })}
    />
  );
};

export default EditBioContainer;
