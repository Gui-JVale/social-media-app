import React from 'react';

import Profile from '../../profile/profile/profile.component';

const Comment = ({ comment: { author, body }}) => (
  <div className="comment">
    <Profile username={author.username} picture={author.profilePicture} isPost/>
    <div className="comment__body">{body}</div>
  </div>
);

export default Comment;