import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import {
  GET_POST_COMMENTS,
  CLIENT__GET_CURRENT_COMMENT,
} from '../graphql/queries';

import CommentsSection from '../components/general/comments-section/comments-section.component';
import Spinner from '../components/atoms/spinner/spinner.component';

const CommentsSectionContainer = ({ match }) => {
  const { data, error, loading } = useQuery(GET_POST_COMMENTS, {
    variables: { postId: match.params.postId },
  });

  const {
    data: { currentComment },
  } = useQuery(CLIENT__GET_CURRENT_COMMENT);

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  return !!data.getPostComments ? (
    <CommentsSection
      comments={data.getPostComments}
      isEditMode={!!currentComment}
    />
  ) : (
    <p>No comments yet</p>
  );
};

export default withRouter(CommentsSectionContainer);
