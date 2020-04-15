import React from 'react';
import { Link } from 'react-router-dom';

import './profile-core-info.styles.sass';

import PostTime from '../../post/post-time/post-time.component';

const ProfileCoreInfo = ({ userId, username, isPost, hasFollowButton, big,  }) => (
  <div className={`profile-core-info ${ big ? "profile-core-info--big" : ""}`}>
    <Link to={`/profile/${userId}`}>
      <div className="profile-core-info__username">{ username }</div>
    </Link>
    { isPost ? <PostTime time="2hr"/> : (
        hasFollowButton ? <div className="follow">Follow</div> : null
    )}
  </div>
);

export default ProfileCoreInfo;