import React from 'react';

import ActionBar from '../../general/action-bar/action-bar.component';
import Cta from '../../general/cta/cta.component';

const ProfileActionBar = ({
  followUser,
  isFollowedByCurrentUser,
  getFollowers,
  getFollowing,
}) => {
  return (
    <ActionBar>
      <Cta
        text={`${isFollowedByCurrentUser ? 'Already Following' : 'Follow'}`}
        onClick={followUser}
        isActive={isFollowedByCurrentUser}
      />
      <Cta text="Followers" onClick={getFollowers} />
      <Cta text="Following" onClick={getFollowing} />
    </ActionBar>
  );
};

export default ProfileActionBar;
