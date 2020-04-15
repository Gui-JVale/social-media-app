import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { LIKE_POST } from '../graphql/mutations';

import PostActionBar from '../components/post/post-action-bar/post-action-bar.component';
import { GET_POSTS } from '../graphql/queries';

const PostActionBarContainer = ({ postId, ...rest}) => {
  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId },
    update(cache) {
      const { posts } = cache.readQuery({
        query: GET_POSTS,
      })
      const updatedPosts = posts.map(post => post.id === postId ? {...post, isLikedByCurrentUser: !post.isLikedByCurrentUser} : post);

      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: updatedPosts
        }
      })

    }
  });

  return <PostActionBar likePost={likePost} {...rest} />
}

export default PostActionBarContainer;