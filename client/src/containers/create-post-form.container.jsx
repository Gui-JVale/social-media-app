import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import { CREATE_POST } from '../graphql/mutations';
import { GET_POSTS } from '../graphql/queries';

import SubmitPostForm from '../components/post/submit-post-form/submit-post-form.component';

const CreatePostContainer = ({ history }) => {
  const [createPost] = useMutation(CREATE_POST, {
    update(cache, {data: { createPost }}) {
      const { posts } = cache.readQuery({ query: GET_POSTS })
      cache.writeData({
        query: GET_POSTS,
        data: { posts: posts.push(createPost)}
      })
      return history.push('/')
    }
  })

  return <SubmitPostForm onSubmit={body => createPost({ variables: { body }})} />

};

export default withRouter(CreatePostContainer);

