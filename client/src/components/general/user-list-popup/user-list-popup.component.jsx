import React from 'react';

import useToggleHidden from '../../../hooks/use-toggle-hidden';

import Spinner from '../../atoms/spinner/spinner.component';

const UserListPopup = ({
  userFollowersData: { loadingFollowers, followersData },
  userFollowingData: { loadingFollowing, followingData },
}) => {
  const { hidden } = useToggleHidden();
  return (
    <div className={`user-list-popup ${hidden && 'user-list-popup--hidden'}`}>
      {loadingFollowers || loadingFollowing ? (
        <Spinner />
      ) : (
        <div className="user-list">
          {followersData
            ? followersData.getUserById.followers.map((follower) => (
                <div>{follower.username} </div>
              ))
            : followingData
            ? followingData.getUserById.following.map((following) => (
                <div>{following.username}</div>
              ))
            : 'No data to show'}
        </div>
      )}
    </div>
  );
};

export default UserListPopup;
