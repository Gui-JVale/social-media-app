import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { CLIENT__GET_CURRENT_USER } from '../graphql/queries';
import { TOGGLE_POST_DROPDOWN_HIDDEN } from '../graphql/mutations';

import Post from '../components/post/post/post.component';

const PostContainer = ({ postId, ...props }) => {
  const { data } = useQuery(CLIENT__GET_CURRENT_USER);
  const [togglePostDropdownHidden] = useMutation(TOGGLE_POST_DROPDOWN_HIDDEN, {
    variables: { id: postId },
  });

  const isLoggedIn = !!data.currentUser;

  const currentUserId = isLoggedIn ? data.currentUser.id : null;

  return (
    <Post
      currentUserId={currentUserId}
      togglePostDropdownHidden={togglePostDropdownHidden}
      postId={postId}
      {...props}
    />
  );
};

export default PostContainer;
