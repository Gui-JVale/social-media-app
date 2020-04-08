import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_USER_BY_ID } from '../../../graphql/queries';

import Spinner from '../../general/spinner/spinner.component';
import Profile from './profile.component';


const ProfileContainer = ({ match, big }) => {
  const {loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: match.params.userId },
  });

  if(loading) return <Spinner />
  if(error) return <p>Error: {error}</p>

  const { username, picture } = data.getUserById;

  return <Profile username={username} profileImgUrl={picture} big={big} />
};

export default ProfileContainer;

