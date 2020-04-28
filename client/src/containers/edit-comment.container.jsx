import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import { EDIT_COMMENT } from '../graphql/mutations';
import {
  GET_POST_COMMENTS,
  CLIENT__GET_CURRENT_COMMENT,
} from '../graphql/queries';

import SubmitCommentForm from '../components/general/submit-comment-form/submit-comment-form.component';

const EditCommentContainer = ({ match }) => {
  // Get Comment Body
  const {
    data: {
      currentComment: { body, commentId },
    },
  } = useQuery(CLIENT__GET_CURRENT_COMMENT);

  // Edit comment functionality
  const [editComment] = useMutation(EDIT_COMMENT, {
    variables: {
      postId: match.params.postId,
      body,
      commentId,
    },
    refetchQueries: [
      {
        query: GET_POST_COMMENTS,
        variables: { postId: match.params.postId },
      },
    ],
    update(cache) {
      cache.writeQuery({
        query: CLIENT__GET_CURRENT_COMMENT,
        data: { currentComment: null },
      });
    },
  });

  return (
    <SubmitCommentForm
      comment={body}
      onSubmit={(body) =>
        editComment({ variables: { body, postId: match.params.postId } })
      }
    />
  );
};

export default withRouter(EditCommentContainer);
