import React from 'react';

import './comments-section.styles.sass';

import Comment from '../comment/comment.component';
import CreateCommentContainer from '../../../containers/create-comment.container';

const CommentsSection = ({ comments }) => (
  <div className="comments-section">
    {comments.map( comment => <Comment key={comment.id} comment={comment} />)}

    <CreateCommentContainer />
  </div>
);

export default CommentsSection;