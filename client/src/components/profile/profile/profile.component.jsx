import React from 'react';

import './profile.styles.sass';

import ProfilePicture from '../profile-picture/profile-picture.component';
import {default as ProfileActionBar} from '../../../containers/profile-action-bar.container';
import ProfileCoreInfo from '../profile-core-info/profile-core-info.component';

const Profile = (props) => {
  const { 
    userId, 
    isPost, 
    big, 
    username, 
    picture, 
    isFollowedByCurrentUser 
  } = props;

  return (
    <div className="profile">
      <div className="profile__identity">
        <ProfilePicture big={big} imgUrl={picture} />
        <ProfileCoreInfo  userId={userId} username={username} big={big}/>
      </div>
  
      {!isPost ? (
        <div className="profile__general">
          <ProfileActionBar userId={userId} isFollowedByCurrentUser={isFollowedByCurrentUser} /> 
          <div className="profile__bio">Bio</div>
        </div>
      ) : null}
      
    </div>
  );

}


export default Profile;