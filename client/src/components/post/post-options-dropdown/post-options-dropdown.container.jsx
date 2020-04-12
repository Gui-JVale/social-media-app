import React from 'react';
import { useMutation,  } from '@apollo/react-hooks';

import { DELETE_POST, TOGGLE_DROPDOWN_HIDDEN } from '../../../graphql/mutations';
import { GET_POSTS } from '../../../graphql/queries';

import PostOptionsDropdown from './post-options-dropdown.component';



const PostOptionsDropdownContainer = ({ postId, ...props }) => {
  const [deletePost] = useMutation(DELETE_POST, { 
    variables: { postId },
    update(cache,{ data: { deletePost }}) {
      const { posts } = cache.readQuery({query: GET_POSTS});
      cache.writeData({
        query: GET_POSTS,
        data: { posts: posts.filter(post => post.id !== deletePost.id)}
      })
    }
  });
  const [toggleDropdownHidden] = useMutation(TOGGLE_DROPDOWN_HIDDEN, {variables: { postId }})

  return (
    <PostOptionsDropdown 
      deletePost={deletePost} 
      toggleHidden={toggleDropdownHidden}
      {...props} 
    />

  )
};

export default PostOptionsDropdownContainer;

