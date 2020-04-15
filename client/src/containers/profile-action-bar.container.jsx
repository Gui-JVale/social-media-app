import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { FOLLOW_USER } from '../graphql/mutations';

import ProfileActionBar from '../components/profile/profile-action-bar/profile-action-bar.component'

const ProfileActionBarContainer = ({userId, ...rest}) => {
  const [followUser] = useMutation(FOLLOW_USER, {
    variables: {userToFollowId: userId},
    update() {
      console.log("tried")
    }
  })

  return <ProfileActionBar followUser={followUser} userId={userId} {...rest} />
}

export default ProfileActionBarContainer;