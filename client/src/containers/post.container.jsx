import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../graphql/queries';
import { TOGGLE_POST_DROPDOWN_HIDDEN } from '../graphql/mutations';

import Post from '../components/post/post/post.component';
import Spinner from '../components/atoms/spinner/spinner.component';


const PostContainer = ({postId, ...props}) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const [togglePostDropdownHidden] = useMutation(TOGGLE_POST_DROPDOWN_HIDDEN, {variables: { id: postId }})

  if (loading) return <Spinner />
  if (error) return <p>Error: {error.message}</p>

  const isLoggedIn = !!data.currentUser;

  const currentUserId = isLoggedIn ? data.currentUser.id : null;

  return (
    <Post 
      currentUserId={currentUserId} 
      togglePostDropdownHidden={togglePostDropdownHidden} 
      postId={postId}
      {...props} 
    />
  ) 

};

export default PostContainer;