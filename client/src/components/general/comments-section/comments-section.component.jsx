import React from 'react';

import './comments-section.styles.sass';

import { default as Comment } from '../../../containers/comment.container';
import CreateCommentContainer from '../../../containers/create-comment.container';

const CommentsSection = ({ comments }) => (
  <div className="comments-section">
    {comments.map( comment => <Comment key={comment.id} comment={comment} commentId={comment.id} />)}

    <CreateCommentContainer />
  </div>
);

export default CommentsSection;