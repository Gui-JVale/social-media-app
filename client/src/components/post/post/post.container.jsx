import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../../../graphql/queries';
import { TOGGLE_DROPDOWN_HIDDEN } from '../../../graphql/mutations';

import Post from './post.component';
import Spinner from '../../general/spinner/spinner.component';


const PostContainer = ({postId, ...props}) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const [toggleDropdownHidden] = useMutation(TOGGLE_DROPDOWN_HIDDEN, {variables: { id: postId }})

  if (loading) return <Spinner />
  if (error) return <p>Error: {error}</p>

  const isLoggedIn = !!data.currentUser;

  const currentUserId = isLoggedIn ? data.currentUser.id : null;

  return (
    <Post 
      currentUserId={currentUserId} 
      toggleDropdownHidden={toggleDropdownHidden} 
      postId={postId}
      {...props} 
    />
  ) 

};

export default PostContainer;