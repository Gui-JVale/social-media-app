import React from 'react';

import './comments-section.styles.sass';

import { default as Comment } from '../../../containers/comment.container';
import CreateCommentContainer from '../../../containers/create-comment.container';
import EditCommentContainer from '../../../containers/edit-comment.container';

const CommentsSection = ({ comments, isEditMode }) => (
  <div className="comments-section">
    {comments.map((comment) => (
      <Comment key={comment.id} comment={comment} commentId={comment.id} />
    ))}

    {isEditMode ? <EditCommentContainer /> : <CreateCommentContainer />}
  </div>
);

export default CommentsSection;
