import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import { CREATE_COMMENT } from '../graphql/mutations';
import { GET_POST_COMMENTS } from '../graphql/queries';

import SubmitCommentForm from '../components/general/submit-comment-form/submit-comment-form.component';

const CreateCommentContainer = ({ match }) => {
  const [createComment] = useMutation(CREATE_COMMENT, {
    update(cache, { data: { createComment }}) {
      console.log(createComment)
      const { getPostComments } = cache.readQuery({ 
        query: GET_POST_COMMENTS, 
        variables: { postId: match.params.postId } 
      });
      console.log(getPostComments)
      console.log(getPostComments.concat([createComment]))
      cache.writeQuery({
        query: GET_POST_COMMENTS,
        data: { getPostComments: getPostComments.concat([createComment]) }
      })
    }
  })

  return <SubmitCommentForm onSubmit={body => createComment({ variables: { body, postId: match.params.postId  }})} />
};

export default withRouter(CreateCommentContainer);