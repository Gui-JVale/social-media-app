import React from 'react';

import './comment-dropdown.styles.sass';

const CommentDropdown = ({
  isHidden,
  toggleHidden,
  editComment,
  deleteComment,
}) => {
  const handleDeleteComment = async () => {
    try {
      await deleteComment();
      return toggleHidden();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={`comment-options-dropdown ${isHidden ? 'isHidden' : ''}`}>
      <ul className="comment-options-dropdown__list">
        <li className="comment-options-dropdown__item" onClick={editComment}>
          Edit comment
        </li>
        <li
          className="comment-options-dropdown__item"
          onClick={handleDeleteComment}
        >
          Delete Comment
        </li>
      </ul>
    </div>
  );
};

export default CommentDropdown;
