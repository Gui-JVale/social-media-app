import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import {
  DELETE_COMMENT,
  TOGGLE_COMMENT_DROPDOWN_HIDDEN,
  CLIENT__SET_CURRENT_COMMENT,
} from '../graphql/mutations';
import { GET_POST_COMMENTS } from '../graphql/queries';

import CommentDropdown from '../components/general/comment-dropdown/comment-dropdown.component';

const CommentDropdownContainer = ({
  commentId,
  commentBody,
  match,
  ...props
}) => {
  // Toggle dropdown hidden
  const [
    toggleCommentDropdownHidden,
  ] = useMutation(TOGGLE_COMMENT_DROPDOWN_HIDDEN, { variables: { commentId } });

  // Delete Comment
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    variables: {
      postId: match.params.postId,
      commentId,
    },
    refetchQueries: [
      {
        query: GET_POST_COMMENTS,
        variables: { postId: match.params.postId },
      },
    ],
  });

  // Edit Comment
  const [setCurrentCommentBody] = useMutation(CLIENT__SET_CURRENT_COMMENT, {
    variables: { body: commentBody, commentId: commentId },
  });

  return (
    <CommentDropdown
      editComment={setCurrentCommentBody}
      deleteComment={deleteComment}
      toggleHidden={toggleCommentDropdownHidden}
      {...props}
    />
  );
};

export default withRouter(CommentDropdownContainer);
