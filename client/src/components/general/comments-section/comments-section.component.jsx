import React from 'react';

import Comment from '../comment/comment.component';

const CommentsSection = ({ comments }) => (
  <div className="comments-section">
    {comments.map( comment => <Comment key={comment.id} comment={comment} />)}
  </div>
);

export default CommentsSection;