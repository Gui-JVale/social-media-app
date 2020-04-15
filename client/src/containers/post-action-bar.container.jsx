import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { LIKE_POST } from '../graphql/mutations';

import PostActionBar from '../components/post/post-action-bar/post-action-bar.component';

const PostActionBarContainer = ({ postId }) => {
  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId },
    update() {
      console.log('liked')
    }
  });

  return <PostActionBar likePost={likePost} />
}

export default PostActionBarContainer;