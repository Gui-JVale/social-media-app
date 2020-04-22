import React from 'react';
import { useMutation,  } from '@apollo/react-hooks';

import { DELETE_COMMENT, TOGGLE_COMMENT_DROPDOWN_HIDDEN } from '../graphql/mutations';
import { GET_POST_COMMENTS } from '../graphql/queries';

import PostOptionsDropdown from '../components/post/post-options-dropdown/post-options-dropdown.component';



const CommentDropdownContainer = ({ commentId, ...props }) => {
  const [deleteComment] = useMutation(DELETE_COMMENT, { 
    variables: { commentId },
    update(cache,{ data: { deleteComment }}) {
      // const { posts } = cache.readQuery({ query: GET_POSTS })
      // cache.writeQuery({
      //   query: GET_POSTS,
      //   data: { posts: posts.filter(post => post.id !== deletePost.id)}
      // });
    }
  });
  const [toggleCommentDropdownHidden] = useMutation(TOGGLE_COMMENT_DROPDOWN_HIDDEN, {variables: { commentId }})

  return (
    <PostOptionsDropdown 
      deletePost={deletePost} 
      toggleHidden={toggleCommentDropdownHidden}
      postId={postId}
      {...props} 
    />

  )
};

export default PostOptionsDropdownContainer;

