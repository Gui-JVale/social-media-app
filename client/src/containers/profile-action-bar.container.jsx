import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { FOLLOW_USER } from '../graphql/mutations';

import ProfileActionBar from '../components/profile/profile-action-bar/profile-action-bar.component'
import { GET_USER_BY_ID } from '../graphql/queries';

const ProfileActionBarContainer = ({userId, ...rest}) => {
  const [followUser] = useMutation(FOLLOW_USER, {
    variables: {userToFollowId: userId},
    update(cache) {
      const { getUserById } = cache.readQuery({
        query: GET_USER_BY_ID,
        variables: { userId }
      });

      cache.writeQuery({
        query: GET_USER_BY_ID,
        variables: { userId },
        data: {
          getUserById: {...getUserById, isFollowedByCurrentUser: !getUserById.isFollowedByCurrentUser}
        }
      })
    }
  })

  return <ProfileActionBar followUser={followUser} userId={userId} {...rest} />
}

export default ProfileActionBarContainer;