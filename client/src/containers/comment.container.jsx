import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../graphql/queries';
import { TOGGLE_COMMENT_DROPDOWN_HIDDEN } from '../graphql/mutations';

import Comment from '../components/general/comment/comment.component';
import Spinner from '../components/atoms/spinner/spinner.component';


const CommentContainer = ({commentId, ...props}) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const [toggleCommentDropdownHidden] = useMutation(TOGGLE_COMMENT_DROPDOWN_HIDDEN, {variables: { id: commentId }})

  if (loading) return <Spinner />
  if (error) return <p>Error: {error}</p>

  const isLoggedIn = !!data.currentUser;

  const currentUser = isLoggedIn ? data.currentUser: null;

  return (
    <Comment 
      currentUser={currentUser} 
      toggleCommentDropdownHidden={toggleCommentDropdownHidden} 
      commentId={commentId}
      {...props} 
    />
  ) 

};

export default CommentContainer;