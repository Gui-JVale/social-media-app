import React from 'react';

import './profile-core-info.styles.sass';

import PostTime from '../../post/post-time/post-time.component';

const ProfileCoreInfo = ({ username, isPost, hasFollowButton, big }) => (
  <div className={`profile-core-info ${ big ? "profile-core-info--big" : ""}`}>
    <div className="profile-core-info__username">{ username }</div>
    { isPost ? <PostTime time="2hr"/> : (
        hasFollowButton ? <div className="follow">Follow</div> : null
    )}
  </div>
);

export default ProfileCoreInfo;