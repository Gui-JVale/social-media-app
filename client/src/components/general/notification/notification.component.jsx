import React from 'react';
import ContentBox from '../content-box/content-box.component';
import { Link } from 'react-router-dom';

const Notification = ({
  notification: { actionType, read, createdAt, targetId, author },
}) => {
  switch (actionType) {
    case 'LIKED_POST':
      return (
        <Link to={`/#${targetId}`}>
          <div className="notification">
            <ContentBox>{author.username} liked your post</ContentBox>
          </div>
        </Link>
      );
    case 'COMMENTED_POST':
      return (
        <Link to={`/posts/${targetId}/comments`}>
          <div className="notification">
            <ContentBox>{author.username} commented on you post</ContentBox>
          </div>
        </Link>
      );
    case 'NEW_FOLLOWER':
      return (
        <Link to={`/profile/${targetId}`}>
          <div className="notification">
            <ContentBox>{author.username} started following you</ContentBox>
          </div>
        </Link>
      );
    default:
      return <div className="notification"></div>;
  }
};

export default Notification;
