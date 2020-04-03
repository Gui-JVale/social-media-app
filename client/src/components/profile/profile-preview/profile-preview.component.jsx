import React from 'react';

import './profile-preview.styles.sass';

import ProfilePicture from '../profile-picture/profile-picture.component';
import PostTime from '../../post/post-time/post-time.component';

const ProfilePreview = ({ isPost, big }) => (
  <div className={`profile-preview ${ big ? "profile-preview--big" : ""}`}>
    <ProfilePicture circle/>
    <div className="profile-preview__info">
      <div className="profile-preview__username">M. Scott</div>
      { isPost ? (
        <PostTime time="2hr"/>
      ) : (
        <div className="follwb-n">Follow</div>
      ) }
    </div>
  </div>
);

export default ProfilePreview;