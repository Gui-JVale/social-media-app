import React from 'react';
import { Link } from 'react-router-dom';

import './post-options-dropdown.styles.sass';

const PostOptionsDropdown = ({ isHidden, toggleHidden, deletePost, postId }) => {
  
  const handleDeletePost = async () => {
    try {
      await deletePost();
      return toggleHidden();
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <div className={`post-options-dropdown ${isHidden ? "isHidden" : ""}`}>
      <ul className="post-options-dropdown__list"> 
        <li className="post-options-dropdown__item">
          <Link to={`/posts/${postId}/edit`}>Edit Post</Link>
        </li>
        <li className="post-options-dropdown__item" onClick={handleDeletePost}>Delete Post</li>
      </ul>
    </div>
  );
};

export default PostOptionsDropdown;