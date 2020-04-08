import React from 'react';

import './profile.styles.sass';

import ProfilePicture from '../profile-picture/profile-picture.component';
import ProfileActionBar from '../profile-action-bar/profile-action-bar.component';
import ProfileCoreInfo from '../profile-core-info/profile-core-info.component';

const Profile = ({ isPost, big, username, profileImgUrl  }) => (
  <div className="profile">
    <div className="profile__identity">
      <ProfilePicture big={big} imgUrl={profileImgUrl} />
      <ProfileCoreInfo  username={username} big={big}/>
    </div>

    {!isPost ? (
      <div className="profile__general">
        <ProfileActionBar /> 
        <div className="profile__bio">Bio</div>
      </div>
    ) : null}
    
  </div>
);

export default Profile;