import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import {
  GET_USER_BY_ID,
  GET_USER_FOLLOWING,
  GET_USER_FOLLOWERS,
} from '../graphql/queries';

import Spinner from '../components/atoms/spinner/spinner.component';
import Profile from '../components/profile/profile/profile.component';

const ProfileContainer = ({ match, ...rest }) => {
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: match.params.userId },
  });

  const [
    getFollowers,
    { loading: loadingFollowers, data: followersData },
  ] = useLazyQuery(GET_USER_FOLLOWERS, {
    variables: { userId: match.params.userId },
  });
  const [
    getFollowing,
    { loading: loadingFollowing, data: followingData },
  ] = useLazyQuery(GET_USER_FOLLOWING, {
    variables: { userId: match.params.userId },
  });

  if (loading) return <Spinner />;
  if (error)
    return (
      <p>
        Error, <br />
        {error.message}
      </p>
    );

  return (
    <Profile
      userId={match.params.userId}
      getFollowers={getFollowers}
      getFollowing={getFollowing}
      userFollowersData={{ loadingFollowers, followersData }}
      userFollowingData={{ loadingFollowing, followingData }}
      {...data.getUserById}
      {...rest}
    />
  );
};

export default ProfileContainer;
