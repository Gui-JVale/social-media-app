import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import { CREATE_POST } from '../../../graphql/mutations';

import CreatePostForm from './create-post-form.component';

const CreatePostContainer = ({ history }) => {
  const [createPost] = useMutation(CREATE_POST, {
    update() {
      return history.push('/')
    }
  })

  return <CreatePostForm createPost={ body => createPost({ variables: { body }})} />

};

export default withRouter(CreatePostContainer);

