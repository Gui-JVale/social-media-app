import React from 'react';
import { useMutation,  } from '@apollo/react-hooks';

import { DELETE_POST, TOGGLE_POST_DROPDOWN_HIDDEN } from '../graphql/mutations';
import { GET_POSTS } from '../graphql/queries';

import PostOptionsDropdown from '../components/post/post-options-dropdown/post-options-dropdown.component';



const PostOptionsDropdownContainer = ({ postId, ...props }) => {
  const [deletePost] = useMutation(DELETE_POST, { 
    variables: { postId },
    update(cache,{ data: { deletePost }}) {
      const { posts } = cache.readQuery({ query: GET_POSTS })
      cache.writeQuery({
        query: GET_POSTS,
        data: { posts: posts.filter(post => post.id !== deletePost.id)}
      });
    }
  });
  const [togglePostDropdownHidden] = useMutation(TOGGLE_POST_DROPDOWN_HIDDEN, {variables: { postId }})

  return (
    <PostOptionsDropdown 
      deletePost={deletePost} 
      toggleHidden={togglePostDropdownHidden}
      postId={postId}
      {...props} 
    />

  )
};

export default PostOptionsDropdownContainer;

