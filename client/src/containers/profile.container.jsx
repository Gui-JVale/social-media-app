import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_USER_BY_ID } from '../graphql/queries';

import Spinner from '../components/atoms/spinner/spinner.component';
import Profile from '../components/profile/profile/profile.component';


const ProfileContainer = ({ match, ...rest }) => {
  const {loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: match.params.userId },
  });

  if(loading) return <Spinner />
  if(error) return <p>Error: {error}</p>

  // const { username, picture } = data.getUserById;

  return <Profile userId={match.params.userId} {...data.getUserById} {...rest}  />
};

export default ProfileContainer;

