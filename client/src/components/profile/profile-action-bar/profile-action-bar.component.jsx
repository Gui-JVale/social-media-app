import React from 'react';

import ActionBar from '../../general/action-bar/action-bar.component';
import Cta from '../../general/cta/cta.component';

const ProfileActionBar = ({ followUser, isFollowedByCurrentUser }) => (
  <ActionBar>
    <Cta 
      text={`${isFollowedByCurrentUser ? "Already Following" : "Follow"}`} 
      onClick={followUser} isActive={isFollowedByCurrentUser}
    />
    <Cta text="Followers"/>
    <Cta text="Following"/>
  </ActionBar>
);

export default ProfileActionBar;