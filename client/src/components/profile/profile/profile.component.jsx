import React from 'react';

import './profile.styles.sass';

import ProfilePicture from '../profile-picture/profile-picture.component';
import { default as ProfileActionBar } from '../../../containers/profile-action-bar.container';
import ProfileCoreInfo from '../profile-core-info/profile-core-info.component';
import Post from '../../post/post/post.component';

const Profile = (props) => {
  const {
    userId,
    isPost,
    big,
    username,
    picture,
    bio,
    posts,
    isFollowedByCurrentUser,
  } = props;

  return (
    <div className="profile">
      <div className="profile__identity">
        <ProfilePicture big={big} imgUrl={picture} />
        <ProfileCoreInfo userId={userId} username={username} big={big} />
      </div>

      {!isPost ? (
        <div className="profile__general">
          <ProfileActionBar
            userId={userId}
            isFollowedByCurrentUser={isFollowedByCurrentUser}
          />
          {bio ? <div className="profile__bio">{bio}</div> : null}
          {posts.length > 0
            ? posts.map((post) => (
                <Post
                  key={post.id}
                  postId={post.id}
                  {...post}
                  author={{
                    id: userId,
                    username: username,
                    profilePicture: picture,
                  }}
                  username={username}
                  profilePicture={picture}
                />
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
