import React from 'react';

import './profile.styles.sass';

import ProfilePreview from '../profile-preview/profile-preview.component';

const ProfileOverview = () => (
  <div className="profile-overview">
      <ProfilePreview />
      <div className="action-bar">Action Bar</div>
      <div className="profile-overview__bio">Bio</div>
  </div>
);

export default ProfileOverview;