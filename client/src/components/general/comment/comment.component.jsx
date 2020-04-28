import React from 'react';

import './comment.styles.sass';

import Profile from '../../profile/profile/profile.component';
import ContentBox from '../content-box/content-box.component';
import MoreOptionsIcon from '../more-options-icon/more-options-icon.component';
import { default as CommentDropdown } from '../../../containers/comment-dropdown.container';

const Comment = ({
  comment: { author, body, dropdownHidden, id },
  toggleCommentDropdownHidden,
  currentUser,
}) => (
  <div className="comment">
    <ContentBox>
      {author.username === currentUser.username ? (
        <MoreOptionsIcon
          iconWrapperClassName="comment__more-options"
          style={{ fontSize: 20 }}
          onClick={toggleCommentDropdownHidden}
        />
      ) : null}
      <Profile
        username={author.username}
        picture={author.profilePicture}
        isPost
      />
      <CommentDropdown
        isHidden={dropdownHidden}
        commentBody={body}
        commentId={id}
      />
      <div className="comment__body">{body}</div>
    </ContentBox>
  </div>
);

export default Comment;
