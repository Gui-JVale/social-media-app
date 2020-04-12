import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import { EDIT_POST } from '../graphql/mutations';
import { GET_POST_BY_ID } from '../graphql/queries';

import SubmitPostForm from '../components/post/submit-post-form/submit-post-form.component';
import Spinner from '../components/atoms/spinner/spinner.component';

const EditPostContainer = ({ history, match }) => {
  const {loading, error, data } = useQuery(GET_POST_BY_ID, {variables: {postId: match.params.postId}})

  const [editPost] = useMutation(EDIT_POST, {
    update() {
      return history.push('/')
    }
  });

  if(loading) return <Spinner />
  if(error) return <p>Error {error}</p>

  const post = data.getPostById ? data.getPostById : null;

  return (
    <SubmitPostForm 
      onSubmit={body => editPost({ variables: { postId: match.params.postId,  body }})} 
      post={post}
    />
  ) 

};

export default withRouter(EditPostContainer);

