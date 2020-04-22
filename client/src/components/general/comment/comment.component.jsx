import React from 'react';

import './comment.styles.sass';

import Profile from '../../profile/profile/profile.component';
import ContentBox from '../content-box/content-box.component';
import MoreOptionsIcon from '../more-options-icon/more-options-icon.component';
import CommentDropdown from '../comment-dropdown/comment-dropdown.component';

const Comment = ({ comment: { author, body, dropdownHidden }, toggleCommentDropdownHidden, currentUser}) => (
  <div className="comment">
    <ContentBox>
      {author.username === currentUser.username ? (
        <MoreOptionsIcon 
          iconWrapperClassName="comment__more-options"
          style={{ fontSize: 20 }}
          onClick={toggleCommentDropdownHidden}
        />
      ) : null }
      <Profile username={author.username} picture={author.profilePicture} isPost/>
      <CommentDropdown isHidden={dropdownHidden}/>
      <div className="comment__body">{body}</div>

    </ContentBox>
  </div>
);

export default Comment;